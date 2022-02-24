var Member = function (name) {
  this.name = name;
  this.chatgroup = null;
  this.send = function (message) {
    this.chatgroup.send(this, message);
  };
  this.receive = function (...args) {
    const [sender, message] = args[0];
    console.log(
      `sender: ${sender.name} => recipient: ${this.name}: "${message}"`
    );
  };
  this.notification = function (message) {
    console.log(message);
  };
};

class ChatGroup {
  constructor(name) {
    this.name = name;
    this.members = {};
  }

  add = function (member) {
    this.members[member.name] = member;
    member.chatgroup = this;
    Object.keys(this.members).forEach((key) => {
      this.members[key].notification(`new member ${member.name}`);
    });
  };
  // broadcast message to all members of the group chat
  send = function (...args) {
    const [sender] = args;
    Object.keys(this.members).forEach((key) => {
      if (key !== sender.name) {
        this.members[key].receive(args);
      }
    });
  };
}

var chatroom = new ChatGroup("Family & Friends");
var member1 = new Member("Sandra");
var member2 = new Member("Dylan");
var member3 = new Member("Annie");

chatroom.add(member1);
chatroom.add(member2);
chatroom.add(member3);

member1.send("Hey all, what are you doing today ?");
