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
    length(){
        var runner = this.head;
        var count =0;
        while(runner != null){
            count +=1;
            runner= runner.next;
        }
        return count;
    }
}

sll1 = new SLL();
node1 = new Node(5);
node2 = new Node(11);

sll1.head= node1;
node1.next =node2;
console.log(sll1.length());