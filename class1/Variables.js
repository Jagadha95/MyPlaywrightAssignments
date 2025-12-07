var num = 45
console.log("Before Reassignment of num: "+num + "  Type: " + typeof(num))
num = "abc"
console.log("After Reassignment of num: "+num + "  Type: " + typeof(num))
console.log("Before Redeclaration of num: "+num + "  Type: " + typeof(num))
var num = true
console.log("After Redeclaration of num: "+num + "  Type: " + typeof(num))

let empName = "Jagadha"
console.log("Before Reassignment of Employee Name: "+empName + "  Type: " + typeof(empName))
empName="Jagadha Murali"
console.log("After Reassignment of Employee Name: "+empName + "  Type: " + typeof(empName))
//console.log("Before Redeclaration of num: "+empName + "  Type: " + typeof(empName))
//let empName = true
//console.log("After Redeclaration of num: "+empName + "Type: " + typeof(empName))

const final = 34
console.log("Before Reassignment of final: "+final + "  Type: " + typeof(final))
//final= 3.14
//console.log("Before Reassignment of final: "+final + "  Type: " + typeof(final))
//console.log("Before Redeclaration of final: "+final + "  Type: " + typeof(final))
//const final = null
//console.log("After Redeclaration of final: "+final + "Type: " + typeof(final))