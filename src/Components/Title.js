import React, {Component} from 'react';

class Title extends Component {
  render () {
    return (
      <h1>
      {/* {this.props.heading.map((heading,index) =><h1 key= {index}>{heading}</h1>)} */}
      {this.props.heading}
      </h1>
    )
  }
}
export default Title