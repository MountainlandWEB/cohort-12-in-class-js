const chats = retrieveChats() || {};
const users = retrieveUsers();
let currentChat = retrieveCurrentChat();

// dummy users
if (!users.length) {
  const user1 = new User('barnaby-1205');
  const user2 = new User('fresh4days');
  users.push(user1, user2);
}

document
  .getElementById('new-chat-button')
  .addEventListener('click', addNewChat);
document
  .getElementById('new-chat-input')
  .addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
      addNewChat();
    }
  });

print();

function print() {
  // chats
  let chatsHtml = '';
  //forEach on the values
  Object.values(chats).forEach((chat) => {
    chatsHtml += `<li class="list-group-item" onclick="selectCurrentChat('${chat.id}')">${chat.name}</li>`;
  });
  document.getElementById('chats').innerHTML = chatsHtml;
  // current chat name
  if (currentChat) {
    document.getElementById('current-chat-name').innerText = currentChat.name;
    // current chat message window
    let chatWindowHtml = '';
    currentChat.messages.forEach((message) => {
      chatWindowHtml += `
      <div onclick="likeMessage('${message.id}')" class="message">
      <p>${message.text}</p>
      <p>${message.username}</p>
      <i class="bi bi-hand-thumbs-up-fill" style="display:${
        message.liked ? 'block' : 'none'
      }" ></i>
      </div>
      `;
    });
    document.getElementById('chat-window').innerHTML = chatWindowHtml;
  }
  // users
  if (users.length && currentChat) {
    let usersHtml = '';
    users.forEach((user) => {
      usersHtml += `
      <div>
      <label for="${user.username}">${user.username}</label>
      <input id="${user.username}">
      <button onclick="addNewMessage('${currentChat.id}', '${user.username}')" class="btn btn-primary">Send</button>
      </div>`;
    });
    document.getElementById('users').innerHTML = usersHtml;
  }
}

// save the state of the application to local storage
function save() {
  // save the chats object
  localStorage.setItem('chats', JSON.stringify(chats));
  // save the users object
  localStorage.setItem('users', JSON.stringify(users));
  // save the currentChat object
  localStorage.setItem('currentChat', JSON.stringify(currentChat));
}

function retrieveChats() {
  const retrieveChats = JSON.parse(localStorage.getItem('chats'));
  if (retrieveChats) {
    return Object.values(retrieveChats).map((chat) => createChat(chat));
  }
  return null;
}

function retrieveUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

function retrieveCurrentChat() {
  const chat = JSON.parse(localStorage.getItem('currentChat'));
  if (chat) {
    return createChat(chat);
  }

  return null;
}

function createChat(chat) {
  // take care of messages
  const messages = chat.messages.map(
    (message) =>
      new Message(message.text, message.id, message.username, message.liked)
  );
  // return new instance of class
  return new Chat(chat.name, chat.id, messages);
}

function addNewChat() {
  const chatName = document.getElementById('new-chat-input').value;
  if (chatName) {
    // create the chat
    const newChat = new Chat(chatName);
    // add chat to chats
    chats[newChat.id] = newChat;
    // clear out the input box
    document.getElementById('new-chat-input').value = '';
    //print again
    print();
    save();
  }
}

function addNewMessage(chatId, username) {
  const text = document.getElementById(username).value;
  const newMessage = new Message(text, username);
  chats[chatId].addMessage(newMessage);
  print();
  save();
}

function likeMessage(messageId) {
  const message = currentChat.getMessage(messageId);
  message.markAsLiked(!message.liked);
  print();
  save();
}

function selectCurrentChat(chatId) {
  currentChat = chats[chatId];
  // print again
  print();
}
