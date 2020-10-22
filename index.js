function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${(line.length)} in line.`
}

function nowServing(line) {
  if(line.length > 0) {
    name=line[0]
    line.splice(1)
    return `Now serving ${name}`
  }
}
