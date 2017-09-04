function shout (string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}

function logShout (string){
  console.log('HELLO')
}

function logWhisper (string){
  console.log('hello')
}

var lowercase = 'hello!'
var uppercase = 'HELLO!'
function sayHiToGrandma (string){
  console.log('hello!')
<<<<<<< HEAD
  if (string === 'I love you, Grandma.'){
    return('I love you, too.')
  }
else if (string.toLowerCase() === string) {
  return('I can\'t hear you!')
} else if (string.toUpperCase() === string)
return('YES INDEED!')
=======
if (string.toLowerCase() === string) {
  return('I can\'t hear you!')
} else if (string.toUpperCase() === string)
return('YES INDEED!')
} else if (string === 'I love you, Grandma.'){
  return('I love you, too.')
>>>>>>> dcbb49eb20ffe6eadb37f75650a84016ba7fc8cf
}
