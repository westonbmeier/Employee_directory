import React from 'react'

function cards(props) {
    //mapping list of employees and posting to card in list order
     let employeeList = props.list.map(employee => {
        return(
        <li className={"list-group-item"} key={employee.id}>
            <h5>Name: { employee.firstName + " " + employee.lastName }</h5>
            <hr/>

            <h6>Job: { employee.job}</h6>
            <hr/>

            <h6>Phone: { employee.phone}</h6>
            <hr/>

            <h6>Email: { employee.email}</h6>
        </li>
        )
    });
    // .map results
    return (
        <div>
            {employeeList}
        </div>
    )
}

export default cards;