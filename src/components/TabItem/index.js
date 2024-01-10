import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickTab = () => {
    clickTabItem(tabId)
  }

  const activeBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        className={`tab-btn ${activeBtnClassName}`}
        type="button"
        onClick={clickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
