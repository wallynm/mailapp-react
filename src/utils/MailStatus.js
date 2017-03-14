module.exports = {
  // Load Mock Product Data Into localStorage
  load: function() {
    return [{
      color: 'orange',
      name: 'Personal',
      counter: 10
    }, {
      color: 'green',
      name: 'Work',
      counter: 10
    }, {
      color: 'purple',
      name: 'Friends',
      counter: 10
    }, {
      color: 'blue',
      name: 'Personal',
      counter: 10
    }];
  }
};