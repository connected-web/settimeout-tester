const NL = '\n'
const metrics = {}
const ttlInMs = 600 * 1000
const workIntervalMs = 5000
const reportIntervalMs = 30000

const categories = 'car, truck, ship, bicycle, train, tram, motorcycle, van, aeroplane, hovercraft'.split(', ')

let outstandingWork = 0

function makeWorkForCategories () {
  categories.forEach(category => {
    setTimeout(() => {
      const workTotal = Math.round(Math.random() * category.length * 1000)
      let workCount = workTotal
      while (workCount > 0) {
        let delayInMs = Math.round(Math.random() * ttlInMs)
        createWork({
          category,
          delayInMs
        }, recordWork)
        workCount--
      }

      console.log(`Made work for ${workTotal} ${category}s`)
    }, 0)
  })
}

function doWork (context, callback) {
  const copy = JSON.parse(JSON.stringify(context))
  copy.value = JSON.stringify(context).length
  outstandingWork -= 1
  callback(copy)
}

function createWork (context, callback) {
  const timeoutId = setTimeout(doWork, context.delayInMs, context, callback)
  outstandingWork += 1
}

function recordWork (context) {
  const record = metrics[context.category] || {
    count: 0,
    totalTimeSpentSeconds: 0
  }

  if (record.count) {
    record.minimum = Math.max(context.value, record.minimum)
    record.maximum = Math.min(context.value, record.maximum)
    record.sum = record.sum + context.value
  } else {
    record.minimum = context.value
    record.maximum = context.value
    record.sum = context.value
  }

  record.count = record.count + 1
  record.totalTimeSpentSeconds += context.delayInMs / 1000

  metrics[context.category] = record
}

function reportWork () {
  console.log(NL, 'Work report at:', formatDate(new Date()), `Outstanding Work: ${outstandingWork} items`, NL, JSON.stringify(metrics, null, 2), NL)
}

function formatDate (date) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let hourFormatted = hour % 12 || 12
  let minuteFormatted = minute < 10
      ? '0' + minute
      : minute
  let morning = hour < 12
      ? 'am'
      : 'pm'

  return month + '/' + day + '/' + year + ' ' + hourFormatted + ':' + minuteFormatted + morning
}

makeWorkForCategories()
setInterval(makeWorkForCategories, workIntervalMs)
setInterval(reportWork, reportIntervalMs)
