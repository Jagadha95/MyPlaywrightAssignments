//Print Duplicate Values
let num = [56,78,90,23,90,76,43,56]
console.log("Duplicate value is: ")
let count=0
for(let i=0;i<num.length;i++){
    for(let j=i+1;j<num.length;j++){
        if(num[i]===num[j]){
            console.log(num[i])
            count = count+1
        }
        
    }
    console.log(count)
}
