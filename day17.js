//Day 17
//Data Structures

//Activity: 1
//Linked List
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

const node1 = new Node(10);
const node2 = new Node(10, node1);


class LinkedList{
    constructor(){
        this.head = null;
    }

    addLast(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeLast(){
        if(!this.head){
            return null;
        }
        let current = this.head;
        let prev = null;
        while(current.next){
            prev = current;
            current = current.next;
        }
        prev.next = null;
    }

    display(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.display()
list.removeLast()
list.display()

//Activity: 2
//Stack
class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }
    
    pop(){
        if(this.items.length === 0){
            return `Stack is Empty`
        }
        return this.items.pop();
    }

    peek(){
        if(this.items.length === 0){
            return `Stack is Empty`
        }
        return this.items[this.items.length -1];
    }

    display(){
        let str = '';
        for(let i=0; i<this.items.length; i++){
            str += this.items[i] + ' ';
        }
        return str;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20)
console.log(stack.display())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.display())


const revStr = (str) => {
    const stack = new Stack;
    let revStr = '';
    for(let i=0; i<str.length; i++){
        stack.push(str[i]);
    }
    while(stack.items.length > 0){
        revStr += stack.pop();
    }
    return revStr;
}

console.log(revStr("Aakash"));

//Activity: 3
//Queue
class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.items.length === 0){
            return `Queue is Empty`
        }
        return this.items.shift();
    }

    front(){
        if(this.items.length === 0){
            return `Queue is Empty`
        }
        return this.items[0];
    }

    display(){
        let str = '';
        for(let i=0; i<this.items.length; i++){
            str += this.items[i] + ' ';
        }
        return str;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.display())
console.log(queue.front())
console.log(queue.dequeue())
console.log(queue.display())

const printJob = (jobs) => {
    const queue = new Queue;
    for(let i=0; i<jobs.length; i++){
        queue.enqueue(jobs[i]);
    }
    while(queue.items.length > 0){
        console.log(queue.dequeue())
    }  
}

const jobs = [
    'A',
    'B',
    'C',
    'D'
]
printJob(jobs)

//Activity: 4
//Binary Tree
class TreeNode{
    constructor(data, left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const leftNode = new TreeNode(1);
const rightNode = new TreeNode(3);
const root = new TreeNode(2, leftNode, rightNode);
console.log("Root :", root.data)
console.log("Left Node :", root.left.data)
console.log("Right Node :", root.right.data)


class BinaryTree {
    constructor() {
        this.root = null; 
    }

    insert(data) {
        const newNode = new TreeNode(data); 
        if (this.root === null) {
            this.root = newNode; 
        } else {
            this._insertNode(this.root, newNode); 
        }
    }

    _insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode; 
            } else {
                this._insertNode(node.left, newNode);  
            }
        } else {
            if (node.right === null) {
                node.right = newNode; 
            } else {
                this._insertNode(node.right, newNode); 
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left); 
            console.log(node.data);         
            this.inOrderTraversal(node.right); 
        }
    }
}


const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-order traversal of the binary tree:");
tree.inOrderTraversal(); 