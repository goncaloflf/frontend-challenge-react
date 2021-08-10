import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import { DateRangePicker } from '@blueprintjs/datetime'

const DatePicker = () => {
  return (
    <div>
      <DateRangePicker shortcuts={false} />
    </div>
  )
}

export default DatePicker
