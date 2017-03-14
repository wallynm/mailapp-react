import Events from 'events';
import AppDispatcher from'../dispatcher/AppDispatcher';
import MailConstants from '../constants/MailConstants';
console.info(MailConstants)
let EventEmitter = Events.EventEmitter;

// Initial data points
let _emails = [];

// Will load products from some API
function loadEmail (data) {
  _emails = data;
}

export default class MailStoreFactory extends EventEmitter {

  // Return Product list
  getMailList () {
    return _emails;
  }

  // Emit Change event
  emitChange () {
    this.emit('change');
  }

  // Add change listener
  addChangeListener (callback) {
    this.on('change', callback);
  }

  // Remove change listener
  removeChangeListener (callback) {
    this.removeListener('change', callback);
  }

}

let MailStore = new MailStoreFactory();

AppDispatcher.register(function (payload) {
  let action = payload.action;

  switch (action.actionType) {
    case MailConstants.LIST_LOAD_EMAIL:
      loadEmail(action.data);
      break;
    default:
      return;
  }

  MailStore.emitChange();
});