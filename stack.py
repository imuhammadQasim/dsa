class Stack:
    def __init__(self):
        self.stack = []
    
    def push(self, val):
        self.stack.append(val)
        
    def pop(self, val):
        if not self.isEmpty():
            return self.stack.pop()
        return "Stack Underflow"
        
    def isEmpty(self):
        return len(self.stack) == 0
    
    def peek(self):
        if not self.isEmpty():
            return self.stack[-1]
        return None

    
        
        
        

s = Stack()
s.push(2)
s.push(3)
s.push(4)
print(s)