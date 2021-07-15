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
    disply(){
        var runner = this.head;
        var str="";
        while(runner != null){
            str= str+ runner.val +" ";
            runner= runner.next;
        }
        return str;
    }
}

sll1 = new SLL();
node1 = new Node(5);
node2 = new Node(11);

sll1.head= node1;
node1.next =node2;
console.log(sll1.disply());