import { React, Component, state } from "react";

// we need to convert the customers to data and allow for column filtering
// we also need to add pagination if the table has more than n(rows)
// additional the ability to select ordering by column and searching could be added 
// lastly we could just build a new table and use a common endpoint

class CustomTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch("url/route")
            .then(res => res.json())
            .then(
                (customers) => {
                    this.setState({ customers: customers});
                },
                (error) => {
                    // alert(error)/console.log; 
                }
            )
    }

    render() {
        return (<table cellPadding={"0"} cellSpacing={"0"}>
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Country</th>
                </tr>
            </thead>

            <tbody>
                {this.state.customers.map(customer =>
                <tr>
                    <th>{customer.CustomerId}</th>
                    <th>{customer.Name}</th>
                    <th>{customer.Country}</th>
                </tr>
                )}
            </tbody>
        </table>);
    }
}

export default CustomTable;