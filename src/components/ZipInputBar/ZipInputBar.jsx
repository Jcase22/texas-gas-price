import {useState} from 'react'

const ZipInputBar = () => {

  const [inputText, setInputText] = useState("")

  const handleTextChange = (event) => {
    setInputText(event.target.value)
  }

  return (
    <>
      <input id="zip-input-bar" onChange={handleTextChange} value={inputText} placeholder="Enter Zip Code to Find Nearby Gas Prices"></input>
    </>
  )
}

export default ZipInputBar