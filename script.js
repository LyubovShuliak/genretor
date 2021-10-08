let greeting  = prompt("say something", "")
const greetings = ["hi", "hello", "howdo", "how do you do", "How are you?"]
const responses = ["Hello, I am J.A.R.V.I.S", "I believe I've already said it, but, sure, hello again",  "You are malfunctioning", "I believe your intentions to be hostile", "I will not respond to that" ]


function* idMaker() {
 
   if (greetings.indexOf(greeting)!=-1) {
    for (let index = 0; index < responses.length; index++) {
        yield responses[index]
        
    }
   }
    
}
let gen = idMaker()

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);