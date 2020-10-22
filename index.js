function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${(line.length)} in line.`
}

function nowServing(line) {
  if(line.length > 0) {
    name=line[0]
    line.shift()
    return `Currently serving ${name}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var currently = "The line is currently: "
  if(line.length=0) {
    return "The line is currently empty"
  }
  for(let i = 0; i < line.length; line++) {
    currently += `${i}. ${line[i]}, `
    console.log(i)
  }
  return currently
}
