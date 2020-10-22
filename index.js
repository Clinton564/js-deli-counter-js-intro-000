function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${(line.length + 2)} in line.`
}
