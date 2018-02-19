var takeANumber = function(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson); 
  var position = katzDeliLine[newPerson]; 
  return "Welcome, " + newPerson + ". You are number " + position + " in line."
}