import {
  getLastWeekDate,
  isLastDayOfMonth,
  isFullMonth,
  getNumberOfDays,
  areInvalidDates,
  getFirstAndLastDayOfMonth,
} from './index'

describe('Utils', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date(1598832000000))
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('getLastWeekDate', () => {
    it('returns the correct day', () => {
      const lastWeekDate = getLastWeekDate()
      expect(lastWeekDate).toStrictEqual(new Date('2020-08-24'))
    })
  })

  describe('isFullMonth', () => {
    it('returns the correct response', () => {
      const isLastDayOfMonthFalsy = isFullMonth(
        new Date('2020-08-2'),
        new Date('2020-08-31')
      )
      expect(isLastDayOfMonthFalsy).toBeFalsy()

      const isLastDayOfMonthTruth = isFullMonth(
        new Date('2020-08-1'),
        new Date('2020-08-31')
      )
      expect(isLastDayOfMonthTruth).toBeTruthy()
    })
  })

  describe('getNumberOfDays', () => {
    it('returns the correct response with a valid input', () => {
      const numberOfDays = getNumberOfDays(
        new Date('2020-08-1'),
        new Date('2020-08-31')
      )
      expect(numberOfDays).toStrictEqual(30)
    })

    it('throws an error with the wrong input', () => {
      expect(() =>
        getNumberOfDays(new Date('2020-08-31'), new Date('2020-08-1'))
      ).toThrowError()

      expect(() =>
        getNumberOfDays('potatoes', new Date('2020-08-1'))
      ).toThrowError()
    })
  })

  describe('areInvalidDates', () => {
    it('returns the correct value if inside the limit', () => {
      expect(
        areInvalidDates(new Date('2020-08-1'), new Date('2020-08-4'))
      ).toBeFalsy()

      expect(
        areInvalidDates(new Date('2019-08-1'), new Date('2020-08-4'))
      ).toBeTruthy()
    })
  })
})
