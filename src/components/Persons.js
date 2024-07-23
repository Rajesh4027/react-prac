import React from 'react'

function Persons({person}) {
  return (
    <div>
      <h2>I am {person.name}.My id is {person.id}.My age is {person.age}.I know {person.skill}</h2>

    </div>
  )
}

export default Persons