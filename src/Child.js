// import React, { Component } from "react";
// import GrandChild from "./GrandChild";

// export default class Child extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   clickHandler = () => {
//     this.setState(
//       (state) => {
//         return { count: state.count + 1 };
//       },
//       () => {
//         this.props.getCount(this.state.count);
//       }
//     );
//   };
//   componentWillUnmount() {
//     console.log('Unmounted !!!');
//   }
//   render() {
//     return (
//       <div style={{ border: "3px solid blue", padding: "20px" }}>
//         <h3>{this.props.name}</h3>
//         <GrandChild
//           getCount={this.props.getCount}
//           name={this.props.name + " ===> From Child Comp"}
//         />
//         <button className="btn btn-primary" onClick={this.clickHandler}>
//           Update Count
//         </button>
//       </div>
//     );
//   }
// }