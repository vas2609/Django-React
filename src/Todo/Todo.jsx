import { Component } from "react";



class Todo extends Component {
    state = {
        item: []
    }


    componentDidMount() {
        fetch('http://127.0.0.1:8000/api', {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        }

        )
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    item: res
                })
            })
    }


    render() {
     
        return (

            <div>
                {
                    this.state.item.map((el, ind) =>{
                        let{employee_email, emplyee_name, emplyee_regNo} = el
                        return(
                            <div key={ind}>
                                <ul>
                                    <li>{employee_email}</li>
                                    <li>{emplyee_name}</li>
                                    <li>{emplyee_regNo}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Todo;