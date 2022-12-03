
"username=azure+green&password=password%21"
function firstStep(input) {
 return input.split("&")
}

function secondStep(input) {
  let arr = []
for(let i = 0; i < input.length; i++){
  let t = input[i]
  arr.push(t.split("="))

}
return arr
}

function thirdStep(input) {
  const newPath = input.map(el => {
    const ele = el.map(str => {
      return str.replace('+', " ");
    });
    return ele;
  });
  return newPath;
}

function fourthStep(input) {
  const newPath = input.map(el => {
    const ele = el.map(str => {
      return decodeURIComponent(str);
    });
    return ele;
  });
  return newPath;
}

function fifthStep(input) {
  let obj = {}
  for(let i = 0; i < input.length; i++){
    let [a,b] = input[i]
    obj[a]=b
  }
  return obj
}

function parseBody(str) {
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))))
}


/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};