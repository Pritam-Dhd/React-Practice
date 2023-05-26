import React from "react";
import Name from "./Name"; 
import "../Hooks/UseState.css";

class OOP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pritam",
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  increase() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }

  decrease() {
    this.setState((prev) => {
      if (prev.count > 0) {
        return {
          count: prev.count - 1,
        };
      } else {
        return {
          count: 0,
        };
      }
    });
  }

  handleChange(e){
    this.setState({
        name:e.target.value
    })
  }
  // just like using useEffect for mounting
  componentDidMount(){
    setTimeout(()=>{
      console.log("Component");
    },2000);
  }

  // this function doesnt allow the component to render 
  // shouldComponentUpdate(){
  //   return false;
  // }

  // Shows when the component is rendered
  componentDidUpdate(){
    console.log("Component Update");
  }

  // This function is called before the component is mounted
  componentWillUnmount(){
    console.log("Component Unmount");
  }


  render() {
    return (
      <div>
        <h1>OOP</h1>
        {this.state.name}
        <div className="center_div">
          <p>{this.state.count}</p>
          <div className="button2" onClick={this.increase}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREASE
          </div>
          <div className="button2" onClick={this.decrease}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECREASE
          </div>
        </div>
        <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter your name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                    <Name name={this.state.name}/>
      </div>
    );
  }
}

export default OOP;
