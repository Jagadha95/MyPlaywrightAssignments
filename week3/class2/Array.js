let data = ["chrome",true,132.8]

data[5]="Webkit"

data.pop()

data.push("Firefox")

data.shift()
console.log("Data: ")
for (let dat of data){
    console.log(dat)
}