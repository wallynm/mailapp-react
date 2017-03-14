'use strict';

module.exports = {
  // Load Mock Product Data Into localStorage
  load: function() {
    return [{
      id: 1,
      name: "Lisa Guerrero",
      title: "Company Goals for 2016",
      preview: "Hello everyone, i'm happy to share with you our new company goals",
      date: "20:24",
      tag: "green",
      new: true
    }, {
      id: 2,
      name:"Lisa Guerrero",
      title:"Company Goals for 2016",
      preview:"Hello everyone, i'm happy to share with you our new company goals",
      date: "20:24",
      tag: "purple",
      new: true
    }, {
      id: 3,
      name: "Peter Gregor",
      title: "Design for health project",
      preview: "Hi Jessica, I love your UI design work, and i'd like to talk with you",
      date: "14:10",
      tag: "green",
      new: true
    }, {
      id: 4,
      name: "Sara Richardson",
      title: "Meeting Zurich",
      preview: "Hi Jessica, I will be in Zurich tomorrow, hope we can meet there",
      date: "17:10",
      tag: "blue",
      new: true
    }];
  }
};