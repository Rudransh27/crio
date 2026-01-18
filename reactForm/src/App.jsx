import { useState, Component } from "react";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();

    console.log("App constructor");
  }

  componentDidMount(){
    console.log("App CDM")

  }
  
  componentDidUpdate(){
    console.log("updated")
  }

  componentWillUnmount(){

  }
  render() {

    console.log("App render.")
    return (
      <>
        <h1>Welcome to Rudransh Portfolio</h1>
        <Form />
      </>
    );
  }
}

export default App;
