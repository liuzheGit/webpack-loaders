//Greeter,js
import React, {Component} from 'react'
import config from './stu.json';

class Greeter extends Component{
  render() {
    return (
      <div>
      {config.greetText}
  </div>
  );
  }
}

export default Greeter
