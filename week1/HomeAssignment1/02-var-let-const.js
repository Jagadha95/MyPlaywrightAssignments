// Declare using const
/*const browserVersion = "Chrome"
console.log("Const: \nOutside function BrowserName: "+browserVersion)
function getBrowserVersion(){
    if(browserVersion="Chrome"){
        let browserVersion = "Edge"
        console.log("Inside function BrowserName: "+browserVersion)
    }
}
getBrowserVersion()*/


// Declare using let
let browserVersion1 = "Chrome"
console.log("Let: \nOutside function BrowserName: "+browserVersion1)
function getBrowserVersion1(){
    if(browserVersion1="Chrome"){
        var browserVersion1 = "Edge"
        console.log("Inside function BrowserName: "+browserVersion1)
    }
}
getBrowserVersion1()


// Declare using var
var browserVersion2 = "Chrome"
console.log("var: \nOutside function BrowserName: "+browserVersion2)
function getBrowserVersion2(){
    if(browserVersion2="Chrome"){
        let browserVersion2 = "Edge"
        console.log("Inside function BrowserName: "+browserVersion2)
    }
}
getBrowserVersion2()