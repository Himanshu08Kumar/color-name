import React from 'react'
import colorNames from 'colornames'
import ToggleBtn from './ToggleBtn'

const Form = ({colorValue,setColorValue, setHexColor, changeToggle, isToggle}) => {
  return (
    <>
    <form onSubmit={(e) => e.preventDefault()}>
        <input type="text"
            autoFocus
            placeholder='Add Color Name'
            required
            value={colorValue}
            onChange={(e)=>{
            setColorValue(e.target.value)
            setHexColor(colorNames(e.target.value))
            }}
        />

        <ToggleBtn changeToggle={changeToggle} isToggle={isToggle}/>
    </form>
      
    </>
  )
}

export default Form
