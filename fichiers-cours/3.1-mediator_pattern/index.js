var Member = function (name) {
  this.name = name;
  this.chatgroup = null;
};

class ChatGroup {
  constructor(name) {
    this.name = name;
    this.members = {};
  }
}


