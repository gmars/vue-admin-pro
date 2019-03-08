function CountDown(endDateStr) {
  var endDate = new Date(endDateStr)
  var nowDate = new Date()
  var totalSeconds = parseInt((endDate - nowDate) / 1000)
  var days = Math.floor(totalSeconds / (60 * 60 * 24))
  var modulo = totalSeconds % (60 * 60 * 24)
  var hours = Math.floor(modulo / (60 * 60))
  modulo = modulo % (60 * 60)
  var minutes = Math.floor(modulo / 60)
  var seconds = modulo % 60
  return `${days}:${hours}:${minutes}:${seconds}`
}

export { CountDown }
