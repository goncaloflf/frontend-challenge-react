import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'

const Moment = ({
  startDate,
  endDate,
  onClick,
  onNextChevron,
  onPrevChevron,
}) => {
  return (
    <div className="moment">
      <button onClick={onPrevChevron}>{'<'}</button>
      <div onClick={onClick}>
        <span>{startDate.toLocaleDateString('en-GB')}</span>
        <span>-</span>
        <span>{endDate.toLocaleDateString('en-GB')}</span>
      </div>
      <button onClick={onNextChevron}>{'>'}</button>
    </div>
  )
}

export default Moment
