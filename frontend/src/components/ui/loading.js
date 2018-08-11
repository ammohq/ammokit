import React, {Component} from 'react';
import ReactLoading from 'react-loading';

export default class Loading extends Component {

  render() {
    const {color = '#000000', height = 32, width = 32} = this.props;

    return (
      <ReactLoading
        className="loading"
        width={width}
        height={height}
        delay={0}
        color={color}
        type="spin"/>
    )
  };
}
