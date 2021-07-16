class Node{
    constructor(value){
        this.val =value;
        this.next= null;
    }
}

class SLL{
    constructor(){
        this.head=null;
    }
    front(){
        if (this.head==null){
            return null;
        }
        return this.head.val
        
    }
    removeFront(){
        if (this.head==null){
            return null
        }
        this.head=this.head.next;
        return this.head;
    }
    addFront(value){
        var neweNode = new Node(value);
        neweNode.next= this.head;
        this.head= neweNode;
        return this;
    }
}
sll1 = new SLL();
node1 = new Node(5);
node2 = new Node(11);

sll1.head= node1;
node1.next =node2;

sll1.removeFront();
sll1.addFront(2).addFront(1);
console.log(sll1);
console.log(sll1.front());

for(vari=1; i<6; i++){
    console.log(i);
}

var i=1;
while(i<6){
    console.log(i);
    i++;
}

var runner = this.head;
while(runner != null){
    runner= runner.next;
}
