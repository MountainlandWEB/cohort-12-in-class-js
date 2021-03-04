const chats = {};
const users = [];
let currentChat;

// dummy data
const chat = new Chat('Friends');
chats[chat.id] = chat;
currentChat = chat;
const user1 = new User('barnaby-1205');
const user2 = new User('fresh4days');
users.push(user1, user2);
const message = new Message('hello, can you hear me?!', user1.username);
currentChat.addMessage(message);

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
  //for in way
  // for (let chatId in chats) {
  //   chatsHtml += `<li class="list-group-item">${chats[chatId].name}</li>`;
  // }
  //forEach on the values
  Object.values(chats).forEach((chat) => {
    chatsHtml += `<li class="list-group-item" onclick="selectCurrentChat('${chat.id}')">${chat.name}</li>`;
  });
  document.getElementById('chats').innerHTML = chatsHtml;
  // current chat name
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
  // users
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
  }
}

function addNewMessage(chatId, username) {
  const text = document.getElementById(username).value;
  const newMessage = new Message(text, username);
  chats[chatId].addMessage(newMessage);
  print();
}

function likeMessage(messageId) {
  const message = currentChat.getMessage(messageId);
  message.markAsLiked(!message.liked);
  print();
}

function selectCurrentChat(chatId) {
  currentChat = chats[chatId];
  // print again
  print();
}
