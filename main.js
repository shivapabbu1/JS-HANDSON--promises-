//1. Write one example explaining how you can write a callback function ?
const students=[
    {id: 1, name:'student1', classs:5},
    {id: 2, name:'student2', classs:8},
    {id: 3, name:'student3', classs:4},
    {id: 4, name:'student4', classs:9},
    {id: 5, name:'student5', classs:7},
]

const addStudent = (student, callback) => {
    setTimeout( () => {
        students.push(student)
        callback()
    }, 1000 )
}
const showStudents = () => {
    setTimeout( () => {
        students.forEach( student => console.log(student.name))
    }, 2000 )
}
addStudent({id:6,name:'student6',classs:6},showStudents)
console.log(students);


// 2."Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
setTimeout(()=>{
    console.log(1)
    setTimeout(()=>{
        console.log(2)
        setTimeout(()=>{
            console.log(3)
            setTimeout(()=>{
                console.log(4)
                setTimeout(()=>{
                    console.log(5)
                    setTimeout(()=>{
                        console.log(6)
                        setTimeout(()=>{
                            console.log(7)
                        },7000)
                    },6000)
                },5000)
            },4000)
        },3000)
    },2000)
},1000)
//3. "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
let printNumber=(time,num)=>{
    return new Promise((resolve, reject) => {
        if(num){
            setTimeout(()=>{
                resolve(num())
            },time)
        }
        else{
            reject(console.log("no number"))
        }
    })
}
printNumber(0,()=> console.log("Number")).then(()=>{
    return printNumber(1000,()=>{console.log("1");})
})
.then(()=>{
    return printNumber(2000,()=>{console.log("2");})
})
.then(()=>{
    return printNumber(3000,()=>{console.log("3");})
})
.then(()=>{
    return printNumber(4000,()=>{console.log("4");})
})
.then(()=>{
    return printNumber(5000,()=>{console.log("5");})
})
.then(()=>{
    return printNumber(6000,()=>{console.log("6");})
}
)
.then(()=>{
    return printNumber(7000,()=>{console.log("7");})
})
//4. Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

let promise=(arg1)=>{
    return new Promise((resolve, reject) => {
        if(arg1 === "yes"){
            resolve();
        }
        else{
            reject();
        }
    })
}
promise("no",()=>{console.log("arg is passed")}).then(()=>{console.log("Promise Resolved")}).catch(()=>{console.log("Promise Rejected");})

//5. Create examples to explain callback function
// Example1:
// function
function greeting(name, callback) {
    console.log('Hi' + ' ' + name+"!");
    callback();
}
// callback function
function callMe() {
    console.log('Please call me!!!');
}
// passing function as an argument
greeting('Prepbytes', callMe);
// Example2:
const main=(callback)=>{
    setTimeout(()=>{
        callback([2,4,6,8]);
    },2000)
}
const add=(array)=>{
    let sum=0;
    for(let i of array){
        sum = sum + i;
    }
    console.log(sum);
}
main(add)
// Example3:Custom Callback Function
function runThis(message, callback) {
    console.log("Given message: " + message);

    if (typeof callback == "function")
        callback();
}
runThis("Hello World!", function callFunction() {
    console.log("This is a callback function.")
});
//6. Create examples to explain callback hell function
// Example1:
let words = document.querySelectorAll(".word")

const animateAllWords = (animate) =>{
    setTimeout(()=>{animate(words[0]);
        setTimeout(()=>{animate(words[1]);
            setTimeout(()=>{animate(words[2]);
                setTimeout(()=>{animate(words[3]);
                    setTimeout(()=>{animate(words[4]);
                },5000)
            },4000)
        },3000)
    },2000)
},1000)
}
const animate = (word) => {
    word.classList.add("animate");
}
animateAllWords(animate);
//7. Create examples to explain promises function
// Example1:
 let greetingg = new Promise(function(resolve,reject){
    let greet1 = "Hi Prepbytes!!!"
    let greet2 = "Hello World!!"
    let greet3 = "Hi Prepbytes!!!"
    if((greet1 === greet2)||(greet1 === greet3)){
        resolve();
    }
    else{
        reject();
    }
 })
 greetingg.then(function(){
    console.log("Success");
 }).catch(function(){
    console.log("Error...");
 })
// Example2:

//8. Create examples to explain async await function
console.log("hi")
let name=new Promise(function(resolve,reject){
  setTimeout(()=>{resolve("shiva")},1000)  
})
async function x(){
    let result=await name;
    console.log(result);
    console.log("hello")
}
x();
//9. Create examples to explain promise.all function
// Promise.all() method waits for fulfillment of all promises and then prints data.
let firstPromise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("First Promise fullfilled after 1 seconds");
    },1000)
})
let secondPromise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Second Promise fullfilled after 3 seconds");
    },3000)
})
let thirdPromise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Third Promise fullfilled after 5 seconds");
    },5000)
})
try{
    let output = Promise.all([firstPromise,secondPromise,thirdPromise])
    output.then((data)=>{console.log(data)});
}
catch(error){
    console.log(error);
}