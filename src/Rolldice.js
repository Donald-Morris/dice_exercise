import React, { Component } from 'react';
import Die from './Die';
import './Rolldice.css';

class Rolldice extends Component {
  static defaultProps = {
    faces: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);
    this.state = { die1: 'one', die2: 'one', rolling: false };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const newDie1 =
      this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
    const newDie2 =
      this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
    this.setState({ die1: newDie1, die2: newDie2, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className='Rolldice'>
        <div className='Rolldice-container'>
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>

        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default Rolldice;
