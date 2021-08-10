import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import { useEffect, useState } from 'react'
import { DateRangePicker } from '@blueprintjs/datetime'

const Popup = ({ startDate, endDate, onChange }) => {
  const [tmpStartDate, setTmpStartDate] = useState(startDate)
  const [tmpEndDate, setTmpEndDate] = useState(endDate)

  const handleInternalChange = ([newStartDate, newEndDate]) => {
    setTmpStartDate(newStartDate)
    setTmpEndDate(newEndDate)

    newEndDate && newStartDate && onChange([newStartDate, newEndDate])
  }

  useEffect(() => {
    startDate !== tmpStartDate && setTmpStartDate(startDate)
    endDate !== tmpEndDate && setTmpEndDate(endDate)
  }, [startDate, endDate])

  return (
    <div>
      <DateRangePicker
        value={[tmpStartDate, tmpEndDate]}
        shortcuts={false}
        singleMonthOnly={true}
        onChange={handleInternalChange}
        maxDate={new Date()}
        minDate={new Date('2020-01-01')}
      />
    </div>
  )
}

export default Popup
