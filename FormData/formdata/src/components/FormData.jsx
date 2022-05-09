
import { Form } from './Form'
import React from 'react'

let getFormData = JSON.parse(localStorage.getItem("data"))
console.log(getFormData)
export const FormData = (getFormData) => {
    console.log(getFormData)
  return (
    <div>

    <table style={{borderCollapse:"collapse",border:"1px solid black"}}> 
        <thead style={{border:'1px solid black'}}>
            <tr><th>{getFormData.name}</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th> Marital Status</th>

                </tr>
        </thead>
    </table>

    </div>
  )
}
