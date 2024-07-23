import React, { useState } from 'react'

function Forms() {

  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>input value: {value}</p>
    </div>
  )
}

export default Forms