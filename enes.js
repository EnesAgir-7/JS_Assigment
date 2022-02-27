class Stack{
    constructor(){
        this.items=[]
        this.limit = 12
        this.num = 0
    }

    push(element){
        //* limited element can add
        if(this.num>this.limit){
            console.log("you can not add more than 12 num");
        }
        //* Add element to top of stack
        else{
            this.items[this.num]= element
            console.log(`${element} added to ${this.num} posion`);
            this.num +=1
            return this.num - 1
        }
    }

    
}

const stack = new Stack()

console.log(stack.stack)
stack.push(12)
stack.push(23)
stack.push(36)
stack.push(41)
stack.push(32)
stack.push(34)
stack.push(45)
stack.push(52)
stack.push(30)