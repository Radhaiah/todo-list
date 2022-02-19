// import React, { Component } from "react";

// export default class GrandChild extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   clickHandler = () => {
//     this.setState((state)=> { return {count: state.count + 1} }, ()=>{
//         this.props.getCount(this.state.count);
//     });
//   }
//   render() {
//     return (<div style={{ border: '3px solid green', padding: '20px', margin: '20px'}}>{this.props.name}
//         <h5>Count : { this.state.count }</h5>
//         <button className='btn btn-primary' onClick={this.clickHandler}>Update Count</button>
//     </div>);
//   }
// }