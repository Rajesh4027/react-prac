import React from 'react'
import Persons from './Persons'

function NameList() {
    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'react'
        },
        {
            id:2,
            name:'Max',
            age:20,
            skill:'Js'
        },
        {
            id:3,
            name:'Tony',
            age:35,
            skill:'react,css'
        },
        {
            id:4,
            name:'Sakthi',
            age:19,
            skill:'html'
        }
    ]
    const personList = persons.map(person =><Persons person={person} /> )
    
    return <div>{personList}</div>
}

export default NameList