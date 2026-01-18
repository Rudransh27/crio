import {Component} from 'react';

class Form extends Component{

    constructor(){
        console.log("Form Constructor")
        super();
        this.state={
           email:"",
           password:""
        }
    }

    handleInputChange(event){
        this.setState((prevState)=> (
            {...prevState, [event.target.name]:event.target.value}
        ))
    }

    componentDidMount(){
        console.log("Form CDM")
    }

    componenetDidUpdate(){

    }

    componenetWillUnmount(){

    }


    render(){
        console.log("Form Render")
        return (
            <>
            <div>Login Form</div>
            <input type="email" name="email" placeholder="abc@gmail.com" onChange={((event) => this.handleInputChange(event))}/>
            <br/>
            <input type="password" name="password" placeholder="Enter your password" onChange={(event)=> this.handleInputChange(event)}/>
            <br/>
            <button>Login</button>
            <br/>
            <button>Signup</button>
            </>
        )
    }

}

export default Form;