function launchBrowser(browserName){
    if (browserName ==='Chrome'){
        console.log("Browser is Chrome")
    } 
    else if(browserName === 'Safari'){
        console.log("Browser is Safari")
    } 
    else if(browserName === 'Edge'){
        console.log("Browser is Edge")
    } 
    else{
        console.log("Browser is Firefox")
    }
        
}

function runTests(testType){
    switch(testType){
        case "Sanity":
            console.log("Type of testing is Sanity")
            break
        case "Regression":
            console.log("Type of testing is Regression")
            break
        case "Functional":
            console.log("Type of testing is Functional")
            break
        default:
            console.log("Type of testing is Smoke")
            break
    }
}
let browserName = 'Chrome'
let testType = 'Sanity'
launchBrowser(browserName)
runTests(testType)