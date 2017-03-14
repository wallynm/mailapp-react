import Events from 'events';
import AppDispatcher from'../dispatcher/AppDispatcher';
import MailConstants from '../constants/MailConstants';
let EventEmitter = Events.EventEmitter;

let _emails = {}, _mailVisible = false;

function MailListModel(email) {
  this.id = email.id;
  this.name = email.name;
  this.title = email.title;
  this.preview = email.preview;
  this.date = email.date;
  this.tag = email.tag;
  this.new = email.new;
}

function _addItem (email) {
  return _emails[email.id] = new MailListModel(email);
}

function _removeItem (email) {
  delete _emails[email.id];
}

function _setVisibility (visibility) {
  _mailVisible = visibility;
}

class ListStoreFactory extends EventEmitter{

  // Return cart items
  getMailItems () {
    return _emails;
  }

  // Return amount of items in cart
  getEmailsAmount () {
    return Object.keys(_emails).length;
  }

  // Return cart visibility state
  getMailVisib () {
    return _mailVisible;
  }

  // Emit Change event
  emitChange () {
    this.emit('change');
  }

  // Add change listener
  addChangeListener (callback) {
    this.on('change', callback)
  }

  // Remove change listener
  removeChangeListener (callback) {
    this.removeListener('change', callback)
  }
}

let ListStore = new ListStoreFactory();

AppDispatcher.register(function (payload) {
  let action = payload.action;

  switch(action.actionType) {
    case MailConstants.LIST_MAIL_ADD:
      _addItem(action.product)
      break;
    case MailConstants.LIST_MAIL_REMOVE:
      _removeItem(action.product)
      break;
    case MailConstants.CONTENT_MAIL_VISIBLE:
      _setVisibility(action.isVisible)
      break;
    default:
      return;
  }

  ListStore.emitChange();
});

export default ListStore;