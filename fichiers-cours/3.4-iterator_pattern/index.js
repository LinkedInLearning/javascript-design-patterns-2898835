var Iterator = require("./Iterator");

var Member = function (name) {
  this.name = name;
  this.chatroom = null;
};

Member.prototype.send = function(content) {
  this.chatroom.receive(this, content)
}

class Subject {
  constructor() {
    this.observers = {}
  }
  subscribe(fn) {
    this.observers[fn.name] = fn;
  }
  unsubscribe(fn) {
    delete this.observers[fn.name]
  }
  notify() {
    const [observer, object] = arguments
    Object.values(this.observers).forEach(({name, update}) => {
      if (name !== observer) {
        update(object)
      }
    })
  }
}
// subject
class ChatRoom extends Subject {
  constructor() {
    super()
    this.members = {}
  }
  register(member) {
    this.members[member.name] = member;
    member.chatroom = this;
    this.notify("MessageNotificationObserver", arguments)
  }
  receive() {
    this.notify("RegistrationObserver", arguments)
  }
}

// observers
var RegistrationObserver = function() {
  this.name = "RegistrationObserver";
  this.update = function(...args) {
    const [member] = args[0]
    console.log("new member added: " + member.name);
  }
}

var MessageNotificationObserver = function() {
  this.name = "MessageNotificationObserver";
  this.update = function(...args) {
    const [member, message] = args[0]
    if (!message) {
      return false
    }
    console.log("new message from : " + member.name + ": " + message);
  }
}

var registrationNotification = new RegistrationObserver()
var messageNotification = new MessageNotificationObserver()

var chatRoom = new ChatRoom()
var member1 = new Member("Sandra");

chatRoom.subscribe(registrationNotification)
chatRoom.subscribe(messageNotification)
// chatRoom.unsubscribe(messageNotification)

chatRoom.register(member1)
member1.send("Hello")

var subscribers = Object.values(chatRoom.observers)
var iter = new Iterator(subscribers)

iter.run()