import React from 'react'

function Persons({person , key}) {
  return (
    <div>
      <h2>
       {key} I am {person.name}.My id is {person.id}.My age is {person.age}.I know {person.skill}</h2>

    </div>
  )
}

export default Persons