const formatDate = date => {
  const day = date.getDate().toString()
  const month = (date.getMonth() + 1).toString()
  return `${date.getFullYear()}${validateZeros(month)}${validateZeros(day)}`
}

const validateZeros = entry => entry.length < 2 ? '0' + entry : entry

export default formatDate