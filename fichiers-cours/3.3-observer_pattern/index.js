var Member = function (name) {
  this.name = name;
  this.chatroom = null;
};
Member.prototype.sendMessage = function (content) {
  this.chatroom.receive(this, content);
};
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }

  unsuscribe(fn) {
    this.observers = this.observers.filter((callback) => callback !== fn);
  }
  notify(object) {
    this.observers.forEach((fn) => fn.update(object));
  }
}

class ChatRoom extends Subject {
  constructor() {
    super();
    this.members = {};
  }
  register(member) {
    this.members[member.name] = member;
    member.chatroom = this;
    this.notify(arguments);
  }
  receive() {
    this.notify(arguments);
  }
}

// observers
var MessageNotificationObserver = function () {
  this.update = function (args) {
    const [member, message] = args;
    if (!message) {
      return false;
    }
    console.log("new message from " + member.name + ": '" + message + "'");
  };
};

var RegistrationObserver = function () {
  this.update = function (...args) {
    const [member] = args[0];
    console.log("new member added " + member.name);
  };
};

var messageObserver = new MessageNotificationObserver();
var registrationObserver = new RegistrationObserver();

var chat = new ChatRoom();
chat.subscribe(messageObserver);
chat.subscribe(registrationObserver);

var member1 = new Member("Sandra");
chat.register(member1);
member1.sendMessage("Hello");
