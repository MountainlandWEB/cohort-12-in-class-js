class Message {
  constructor(text, id = Utils.getNewId('message-'), username, liked = false) {
    this.text = text;
    this.id = id;
    this.username = username;
    this.liked = liked;
  }

  markAsLiked(liked) {
    this.liked = liked;
  }
}
