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

    //* Return and remove top element in stack
    //* Return undefined if stack is emty
    pop(){
        if(this.num==0) return undefined
        let deleteItem = this.items[this.num-1]
        this.num -=1
        console.log(`The top item after the stack popped is ${deleteItem}`);
        return deleteItem
    }

    //* check top element in stock 
    peek(){
        console.log(`top element is ${this.items[this.num-1]}`)
        return this.items[this.num-1]
    }
    //* gives the exact size of stack
    size(){
        console.log(`The size of the stack is ${this.num}`);
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
stack.pop()
stack.peek()
stack.size();
stack.push(30)

stack.pop()