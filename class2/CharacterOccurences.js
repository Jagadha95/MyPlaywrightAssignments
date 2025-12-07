let personName = "Jagadha"
let char = 'd'
let count = 0
for(let i = 0; i <= personName.length; i++){
    if(personName[i]===char){
        count++
    }
}
console.log("Occuence of the character "+ char +" is: " + count)
