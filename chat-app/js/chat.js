class Chat {
  constructor(name, id = Utils.getNewId('chat-'), messages = []) {
    // create an id for the chat
    this.id = id;
    this.name = name;
    this.messages = messages;
  }
  addMessage(message) {
    this.messages.push(message);
  }
  getMessage(messageId) {
    return this.messages.find((message) => message.id == messageId);
  }
}
