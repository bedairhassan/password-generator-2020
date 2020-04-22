
var random = `random value`
var totalTracker = [] // min : 0 // max : 2

const GenerateR = (prev) => {

  while(true){

    var r = Math.floor(Math.random() * 3)

    if (r!==prev){
      return r
    }
  }
}

var Arr=[],prev=0
for (let i = 0; i < 30; i++) {
  
  // body // 
  random = GenerateR(prev)

  // successful different random values as sequential
  // ... 
  Arr.push(random)

  // update // successful 
  prev = random

}

console.log(Arr)