// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, { [key]: value });
}


function destructivelyUpdateDriverWithKeyAndValue(driver, object, value){
  driver[object] = value
  
  return driver
}

function deleteFromDriverByKey(driver, object, value){
  let new = Object.Object.assign({}, driver, { [key]: value });
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver
}