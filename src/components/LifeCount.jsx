import React, { Component } from 'react';
import memoize from 'memoize-one';

export default class LifeCount extends Component {

  state = {
    lifePoints: this.props.lifePoints
  }

  // update = memoize(this.setState({lifePoints: 10}))
  render() {
    // if(this.state.lifePoints != this.props.lifePoints)
      // this.update()
    return (
    <div className="Life-count">
      <div className="Life-count-container">
        <div className="Life-count-points">
          <span>{this.props.lifePoints}</span>
        </div>
      </div>
    </div>
  )}
}

