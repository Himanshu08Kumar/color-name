import React from 'react'

const ToggleBtn = ({isToggle, changeToggle}) => {
    let nextColor = changeToggle ? 'White' : 'Black';
  return (
    <button
        type="button"
        style={{cursor : 'pointer'}}
        onClick={() => {changeToggle(!isToggle)}}>
            Toggle Text Color
    </button>
  )
}

export default ToggleBtn
