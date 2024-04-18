/** 
 * * Node Class
 * * Here in the node class, we defining how each node in our linked list should look like
 * * Nodes make up a linked list so we have to first create nodes and then link them to create a linked list.
 * ? 
 * TODO:  
*/

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//--------creating nodes
// let node1 = Node(3)
// let node2 = Node(8)

/** 
 * * We have a node class which represents each node in a linked list
 * * each node has: data and a pointer to the next element
 * ? 1. we then create a LinkedList class to create a linked list out of the nodes. 
 * ? ...it has the head node set to null indicating it is initially empty.
*/

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    prepend(data){
        const newNode = new Node(4)
        newNode.next = this.head;
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    append(data){
        const newNode = new Node(49);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }
        this.tail.next = newNode;
        this.tail = newNode
    }
}

const list1 = new LinkedList();

list1.prepend(4)
list1.append(4)

console.log(list1)