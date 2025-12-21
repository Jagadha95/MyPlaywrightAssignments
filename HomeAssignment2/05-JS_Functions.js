// Task 1:
function userProfile(name){
    console.log("Hello "+name+"!")
}

//Task 2:
let double = (num)=>{
    return num*2
}

// Task 3:
setTimeout(function(){
    console.log("This message is delayed by 2 seconds")
},2000)

// Task 4:
function getUserData(callback)
{
setTimeout(()=>{
    getData(callback)
},3000)
}
function getData(callback){
    console.log("User's Name: John")
    console.log("User's Age: 20")
}

// Main:
let name = 'Jagadha'
let num = 40
userProfile(name)
console.log("Double the number of " + num + " is: " +double(num))
getUserData(getData)