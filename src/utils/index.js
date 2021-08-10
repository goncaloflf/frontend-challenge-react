export const getLastWeekDate = () => {
  const date = new Date()
  date.setDate(date.getDate() - 7)
  return date
}

const isLastDayOfMonth = (date) => {
  const test = new Date(date.getTime())
  const month = date.getMonth()
  test.setDate(test.getDate() + 1)
  return test.getMonth() !== month
}

export const isFullMonth = (startDate, endDate) =>
  startDate.getDay() === 1 &&
  isLastDayOfMonth(endDate) &&
  startDate.getMonth() === endDate.getMonth()

export const getNumberOfDays = (start, end) => {
  const oneDay = 1000 * 60 * 60 * 24

  const diffInTime = end.getTime() - start.getTime()

  const diffInDays = Math.round(diffInTime / oneDay)

  return diffInDays
}

export const areValidDates = (start, end) =>
  start.getTime() < new Date('2020-01-01').getTime() ||
  end.getTime() > new Date().getTime()
