import { render, screen, fireEvent } from '@testing-library/react'
import DatePicker from './index'

describe('DatePicker', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date(1598832000000))
    render(<DatePicker />)
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders the DatePicker input', () => {
    const dateDisplayed = screen.getByText('8/31/2020')
    expect(dateDisplayed).toBeVisible()
  })

  it('does not render the date selector before clicking', () => {
    const monthOnPopup = screen.queryByText('August')
    expect(monthOnPopup).toBeNull()
  })

  it('does render the date selector after clicking', () => {
    const dateDisplayed = screen.getByText('8/31/2020')
    fireEvent.click(dateDisplayed)

    const monthOnPopup = screen.getByText('August')
    expect(monthOnPopup).toBeVisible()
  })

  it('hides the date selector after clicking again', () => {
    const dateDisplayed = screen.getByText('8/31/2020')
    fireEvent.click(dateDisplayed)
    fireEvent.click(dateDisplayed)

    const monthOnPopup = screen.queryByText('August')
    expect(monthOnPopup).toBeNull()
  })

  it('shows an alert if chevron tries to go out of bounds', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})

    const chevronNextBtn = screen.getByRole('button', { name: '>' })
    fireEvent.click(chevronNextBtn)

    expect(window.alert).toHaveBeenCalled()
  })

  it('changes selected dates if chevron tries to go to a valid interval', () => {
    const chevronPrevBtn = screen.getByRole('button', { name: '<' })
    fireEvent.click(chevronPrevBtn)

    const newStartDate = screen.getByText('8/16/2020')
    expect(newStartDate).toBeVisible()

    const newEndDate = screen.getByText('8/23/2020')
    expect(newEndDate).toBeVisible()
  })

  it('changes one whole month if one month is selected', () => {
    const dateDisplayed = screen.getByText('8/31/2020')
    fireEvent.click(dateDisplayed)

    fireEvent.click(screen.getByRole('gridcell', { name: 'Sat Aug 01 2020' }))
    fireEvent.click(screen.getByRole('gridcell', { name: 'Mon Aug 31 2020' }))

    const chevronPrevBtn = screen.getByRole('button', { name: '<' })
    fireEvent.click(chevronPrevBtn)

    const startDateDisplayed = screen.getByText('7/1/2020')
    const endDateDisplayed = screen.getByText('7/31/2020')
    expect(startDateDisplayed).toBeVisible()
    expect(endDateDisplayed).toBeVisible()
  })
})
