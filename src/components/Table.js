import React from 'react'
import Column from './Column'

function Table() {
  return (
    <table  style={{border:'4px solid red'}}>
        <tbody >
            <tr >
                <Column />
            </tr>
        </tbody>
    </table>
  )
}

export default Table