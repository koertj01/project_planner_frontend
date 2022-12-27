import React from 'react'
import JsonData from '../data.json'

function JsonDataDisplay() {

    //we need to 'fetch' JsonData from the backend instead of importing a file, we could also write a 'header' in the 
    //json to define the columns -- maybe define a table as a ~custom-doc~

    const DisplayData=JsonData.map(
        (info) => {
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                </tr>
            )
        }
    )

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}

export default JsonDataDisplay;