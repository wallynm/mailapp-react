import Flux from 'flux';
let AppDispatcher = new Flux.Dispatcher();

AppDispatcher.handleViewAction = function(action) {
  this.dispatch({
    source : 'VIEW_ACTION',
    action : action
  });
}

export default AppDispatcher;