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
        let data = this.state.item.map((elem, index) =>{
            let {employee_email, emplyee_name, emplyee_regNo} = elem;
            return(
                <div key ={index}>
                    <ul>{employee_email}</ul>
                    <ul>{emplyee_name}</ul>
                    <ul>{emplyee_regNo}</ul>
                    
                </div>
            )
        })
     
        return (

            <div style={{color:'red'}}>
               Dates {data}
            </div>
        );
    }
}

export default Todo;