export const convertJobDescription = words => {
  let output = words

  // filter out special characters
  output = output.replace(/[^\w\s]/gi, '')

  // filter out new lines
  output = output.replace(/(\r\n|\n|\r)/gm, '')

  // all to lowercase
  output = output.toLowerCase()

  // split by spaces
  output = output.split(' ')

  // convert to object with count
  output = output.reduce((acc, next) => {
    acc[next] ? acc[next]++ : acc[next] = 1
    return acc
  }, {})

  // convert object to array
  output = Object.entries(output)

  console.log(output)

  return output
}
