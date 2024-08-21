import { useState } from "react"
import Square from "../components/Square"
import Form from "../components/Form";


function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexColor, setHexColor] = useState('');
  const [isToggle, changeToggle] = useState(false);


  return (
    <>
      <Square colorValue={colorValue} hexColor={hexColor} isToggle={isToggle}/>
      <Form colorValue={colorValue} setColorValue={setColorValue} setHexColor = {setHexColor} changeToggle={changeToggle} isToggle={isToggle}/>
      
    </>
  )
}

export default App
