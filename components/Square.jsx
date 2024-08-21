import React from 'react'

const Square = ({colorValue, hexColor, isToggle}) => {
  return (
    <div className="square" style={{
        backgroundColor: colorValue,
        color: (isToggle == true ? '#fff': '#000')
        
    }}>
     <p>{colorValue ? colorValue : "Empty Value"}</p>
     <p>{hexColor ? hexColor : null}</p>
    </div>
  )
}

export default Square
