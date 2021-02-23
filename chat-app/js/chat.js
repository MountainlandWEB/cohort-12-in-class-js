class Chat {
  constructor(name, messages = []) {
    this.name = name;
    this.messages = messages;
  }
  addMessage(message) {
    this.messages.push(message);
  }
}
