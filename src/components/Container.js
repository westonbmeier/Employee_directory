import React, { Component } from 'react'
import employees from "../assets/employees";
import Cards from "./Cards";

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
            const name1 = a.firstName.toUpperCase();
            const name2 = b.firstName.toUpperCase();
    
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
            const name1 = a.lastName.toUpperCase();
            const name2 = b.lastName.toUpperCase();
    
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

    render() {
        return (
            <div>
                <div className={"container"}>
                    <div className="row">
                        <div className={"col-12 text-center"}>
                            <div>
                                <h4>Sort employees by:</h4>
                                <hr/>
                                <div>
                                    <button type="button" className="btn btn-light mr-1 mb-4" onClick={this.sortFirstName}> First Name</button>
                                    <button type="button" className="btn btn-light mr-1 mb-4" onClick={this.sortLastName}> Last Name</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-12"}>
                            <ul className="list-group">
                                <Cards list={this.state.list} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}