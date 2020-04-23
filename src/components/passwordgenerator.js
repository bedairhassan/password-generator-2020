
// IDEAL IS default value OR at least two different elements !
// you can send choices = [`number`,`specialChar`]
// you can send choices = [`number`,`letter`]
// you can send choices = [`specialChar`,`letter`]
// you can send choices = [`specialChar`,`letter`]
// NOT ALLOWED IS THE FOLLOWING
// [`number`,`number`]
// [`letter`,`letter`]
// [`specialChar`,`specialChar`]
var generatePARENT = (length,choices = [`number`, `specialChar`, `letter`]) => {
   
    const GenerateR = (prev) => {

        while (true) {
    
            var r = Math.floor(Math.random() * choices.length)
    
            if (r !== prev) {
                return r
            }
        }
    }

    const stringG = (choice) => { // string ? => yes

        const choices = { number: `number`, specialChar: `specialChar`, letter: `letter` }
    
        const number = `0123456789`
        const specialChar = `!@#$%^&*()`
        const letters = `QWERTYUIOPASDFGHJKLZXCVBNM`
    
        
    
        switch (choice) {
    
            case choices.number: return number[Math.floor(Math.random() * number.length)]
            case choices.specialChar: return specialChar[Math.floor(Math.random() * specialChar.length)]
        }
    
        if (choices.letter === choice) {
    
            var p50 = Math.floor(Math.random() * 100)
    
            var letter = letters[Math.floor(Math.random() * letters.length)]
    
            return p50 < 50 ? letter.toLowerCase() : letter
        }
    
        return `Choice ${choice} non-existent`
    }

    
    var sumString = ``
   
    var prev = 0,random=0
    
    for (let i = 0; i < length; i++) {
   
        // body // 
        random = GenerateR(prev)

        // successful 
        sumString += stringG(choices[random])

        // update // successful 
        prev = random
    }
    return sumString
}

const entries = 8
for (let i=0;i<entries;i++){
    console.log(generatePARENT(5,[`number`,`specialChar`]))
}


module.exports = {
    generatePARENT
}