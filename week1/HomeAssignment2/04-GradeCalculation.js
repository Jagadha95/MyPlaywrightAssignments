function studentScore(score){
    switch(true){
        case (score>80):
            console.log("Distinction")
            break
        case (score>65):
            console.log("A Grade")
            break
        case (score>50):
            console.log("B Grade")
            break
        case (score>35):
            console.log("C Grade")
            break
        default:
            console.log("No Grade")
            break
    }
}

let score = 95
studentScore(score)