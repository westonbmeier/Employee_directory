import React, { Component } from 'react'
import employees from "../assets/employees";
import Cards from "./cards";

export default class Container extends Component {

constructor(props) {

    super(props);

        this.state = {
            list: employees,
        }
    }
    ///Sorting by first name///
    sortFirstName = () => {

        function compare(a, b) {
            const name1 = a.firstName.toLowerCase();
            const name2 = b.firstName.toLowerCase();
    
            let comparison = 0;
            if (name1 > name2) {
                comparison = 1;

            } else if (name1 < name2) {

                comparison = -1;
            }
            return comparison;
        }

    let sorted = employees.sort(compare);

    this.setState({list: sorted })
    }
    ///Sorting by last name///
    sortLastName = () => {

        function compare(a, b) {
            const name1 = a.lastName.toLowerCase();
            const name2 = b.lastName.toLowerCase();
    
            let comparison = 0;
            if (name1 > name2) {
                comparison = 1;

            } else if (name1 < name2) {

                comparison = -1;

            }
            return comparison;
        }
        
        // Set the state to the new array
        let sorted = employees.sort(compare);

        this.setState({list: sorted })
    }