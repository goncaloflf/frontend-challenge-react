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
  startDate.getDate() === 1 &&
  isLastDayOfMonth(endDate) &&
  startDate.getMonth() === endDate.getMonth()

export const getNumberOfDays = (start, end) => {
  const oneDay = 1000 * 60 * 60 * 24
  const diffInTime = end.getTime() - start.getTime()
  if (!diffInTime || diffInTime <= 0)
    throw new Error('Start date must be before end date')
  const diffInDays = Math.round(diffInTime / oneDay)
  return diffInDays
}

export const areInvalidDates = (start, end) =>
  start.getTime() < new Date('2020-01-01').getTime() ||
  end.getTime() > new Date().getTime()

export const getFirstAndLastDayOfMonth = (date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

  return [firstDay, lastDay]
}
