/**
 * data should be an object that contains at the
 * very least and key property like so
 *
 * { key: 23434 }
 *
 */

class BSTNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this._size = 0;
  }

  insert(data) {
    // make sure data has a key
    if (data.key) {
      // create new node
      let newNode = new BSTNode(data);
      // if root is null tree is empty so make new node the root
      if (!this.root) {
        this.root = newNode;
        // and increase the size
        this._size += 1;
      } else {
        let current = this.root;
        // traverse the tree until we find the place where the node
        // should be inserted
        while (true) {
          // key is already there
          if (current.data.key == data.key) {
            break;
          }

          // key is greater than
          if (data.key > current.data.key) {
            // node has no right child
            if (!current.right) {
              current.right = newNode;
              // and increase the size
              this._size += 1;
              break;
            } else {
              // let's look at the right child
              current = current.right;
            }
          }
          // key is less than
          else {
            if (!current.left) {
              current.left = newNode;
              // and increase the size
              this._size += 1;
              break;
            } else {
              // let's look at the left child
              current = current.left;
            }
          }
        }
      }
    }
  }

  // returns the data of the node if the node by that key is in the tree
  find(key) {
    let current = this.root;
    while (current) {
      if (current.data.key == key) {
        return current.data;
      } else if (key > current.data.key) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
  }

  // don't have to implement this one
  remove(key) {}

  size() {
    return this._size;
  }

  // returns an array with the elements sorted
  toArray() {
    if (this.root) {
      let array = [];
      this.addToArray(this.root, array);
      return array;
    }
  }

  addToArray(node, array) {
    // if node has left child
    if (node.left) {
      this.addToArray(node.left, array);
    }

    // add this node to array
    array.push(node.data);

    // if node has a right child
    if (node.right) {
      this.addToArray(node.right, array);
    }
  }
}
