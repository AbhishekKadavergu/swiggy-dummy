import React from "react";
export class UserClass extends React.Component {
constructor(props){
  console.log("from constructor");
    super(props)
    this.state = {
        count: 0,
        count2: 2
    }
}

componentDidMount(){
  console.log('Component Mounted!')
}

render() {
    console.log('From render!')
    const {name} = this.props
    const {count, count2} = this.state
    return (
      <div className="user-card">
        <button onClick={()=>{
            this.setState({
                count: this.state.count+1
            })
        }}>Counter</button>
        <h3>Count: {count}</h3>
        <h3>Count 2: {count2}</h3>
        <h3>Name: {name} classy</h3>
        <h3>Location: Hyderabad</h3>
        <h3>Follow me on Instagram: abhishek_kadavergu</h3>
      </div>
    );
  }
}

