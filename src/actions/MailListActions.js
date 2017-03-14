import AppDispatcher from '../dispatcher/AppDispatcher';
import MailConstants from '../constants/MailConstants';

export default MailListActions = {

  // Load initial products
  loadEmail(data) {
    AppDispatcher.handleViewAction({
      actionType: MailConstants.LIST_LOAD_EMAIL,
      data: data
    });
  },

  // Add item to cart
  addEmail(mailId) {
    AppDispatcher.handleViewAction({
      actionType: MailConstants.LIST_MAIL_ADD,
      product: mailId
    });
  }

  // Remove item from cart
  removeEmail(mailId) {
    AppDispatcher.handleViewAction({
      actionType: MailConstants.LIST_MAIL_REMOVE,
      product: mailId
    });
  }

  toggleMailContent(isVisible) {
    AppDispatcher.handleViewAction({
      actionType: MailConstants.CONTENT_MAIL_VISIBLE,
      isVisible: isVisible
    });
  }
}