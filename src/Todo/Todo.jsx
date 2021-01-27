import { Component } from "react";



class Todo extends Component {
    state = {
        item: [],
        value:'',
        regNo:'',
        name: '',
        email: ''
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
    handleChange = (event) =>{

        let{name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
      
        let{regNo,  name,  email} = this.state

        let newData = {
            emplyee_regNo:regNo,
            emplyee_name:name,
            employee_email: email
        }
     

        let body = JSON.stringify(newData);

        fetch('http://127.0.0.1:8000/api/create',{
            method:'POST',
            headers: { 'content-type': 'application/json' },
            body: body
        })

        .then(respons => respons.json())
        .then(res =>{
            let task = [res ,...this.state.item];
            this.setState({
                item: task,
                inputValue: ''
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
            <div>
                  <div style={{color:'red'}}>
               Dates {data}
            </div>
            <div>
                <input 
                placeholder='name'
                name='name'
                onChange = {this.handleChange}
                type="text"
                />
                 <input 
              
                placeholder='regNo'
                name='regNo'
                onChange = {this.handleChange}
                type="text"
                />
                    <input 
                placeholder='email'
                onChange = {this.handleChange}
                name='email'
                type="email"
                />
                <div>
                    <button
                    onClick={this.handleClick}
                    >
                        click me
                    </button>
                </div>
            </div>
            </div>
          
        );
    }
}

export default Todo;