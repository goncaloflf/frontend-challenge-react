import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'

import { useState } from 'react'
import Popup from './Popup'
import Moment from './Moment'
import { areValidDates, getLastWeekDate, getNumberOfDays } from '../../utils'

const CHEVRON_TYPE = {
  PREV: 'PREV',
  NEXT: 'NEXT',
}

const DatePicker = () => {
  const [endDate, setEndDate] = useState(new Date())
  const [startDate, setStartDate] = useState(getLastWeekDate())
  const [popupOpen, setPopupOpen] = useState(false)

  const handleMomentClick = () => {
    setPopupOpen(!popupOpen)
  }

  const handleDateChange = ([newStartDate, newEndDate]) => {
    setStartDate(newStartDate)
    setEndDate(newEndDate)
  }

  const createChevronClickHandler = (type) => () => {
    const daysInterval =
      (getNumberOfDays(startDate, endDate) + 1) *
      (type === CHEVRON_TYPE.NEXT ? 1 : -1)

    const newStartDate = new Date(startDate.getTime())
    newStartDate.setDate(newStartDate.getDate() + daysInterval)

    const newEndDate = new Date(endDate.getTime())
    newEndDate.setDate(newEndDate.getDate() + daysInterval)

    if (areValidDates(newStartDate, newEndDate)) {
      alert('You are trying to change to a date out of bounds.')
      return
    }
    setStartDate(newStartDate)
    setEndDate(newEndDate)
  }

  return (
    <div className="date-picker">
      <Moment
        startDate={startDate}
        endDate={endDate}
        onClick={handleMomentClick}
        onNextChevron={createChevronClickHandler(CHEVRON_TYPE.NEXT)}
        onPrevChevron={createChevronClickHandler(CHEVRON_TYPE.PREV)}
      />
      {popupOpen && (
        <Popup
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
        />
      )}
    </div>
  )
}

export default DatePicker
