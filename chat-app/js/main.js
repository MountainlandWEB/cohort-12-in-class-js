const chats = [];
const users = [];
let currentChat;

// dummy data
const chat = new Chat('Friends');
chats.push(chat);
currentChat = chats[0];
const user1 = new User('barnaby-1205');
const user2 = new User('fresh4days');
users.push(user1, user2);
const message = new Message('hello, can you hear me?!', user1.username);
currentChat.addMessage(message);

function print() {
  // chats
  let chatsHtml = '';
  chats.forEach((chat) => {
    chatsHtml += `<li class="list-group-item">${chat.name}</li>`;
  });
  document.getElementById('chats').innerHTML = chatsHtml;
  // current chat name
  document.getElementById('current-chat-name').innerText = currentChat.name;
  // current chat message window
  let chatWindowHtml = '';
  currentChat.messages.forEach((message) => {
    chatWindowHtml += `
        <div class="message">
            <p>${message.text}</p>
            <p>${message.username}</p>
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
    </div>`;
  });
  document.getElementById('users').innerHTML = usersHtml;
}

print();
