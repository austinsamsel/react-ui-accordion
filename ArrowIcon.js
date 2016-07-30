import React, { Component } from 'react';
import Radium from 'radium';

class ArrowIcon extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(this.state.open){
      this.setState({
        open: false
      })
    } else {
      this.setState({
        open: true
      })
    }
  };

  render() {
    let heightSwap = !this.state.open ? '9' : '14';
 
	let rotate1 = !this.state.open ? 'translate(75%, -50%) rotate(45deg)' : 'translate(0%, -50%) rotate(-45deg)';

	let rotate2 = !this.state.open ? 'translate(-75%, -50%) rotate(-45deg)' : 'translate(0%, -50%) rotate(45deg)';

	let rotateHeight = !this.state.open ? '2.5em' : '14';


	const styles = {
	  button: {
		position: 'absolute',
		top:'-7px',
		right: 0,
		margin: 0,
		padding: 0,
		height: '2.5em',
		width: '3em',
		outline: 0,
		border: 0,
		background: 'none',
		textIndent: '-9999%',
		pointerEvents: 'none'
	  },
	  buttonLine1: {
		content: '',
		display: 'block',
		position: 'absolute',
		height: heightSwap,
		width: '3',
		borderRadius: '3',
		background: '#000',
		transformOrigin: '50%',
		top: '50%',
		left: '50%',
		transition: 'all .25s ease-in-out',
		transform: rotate1,
	  },
	  buttonLine2: {
		content: '',
		display: 'block',
		position: 'absolute',
		height: heightSwap,
		width: '3',
		borderRadius: '3',
		background: '#000',
		transformOrigin: '50%',
		top: '50%',
		left: '50%',
		transition: 'all .25s ease-in-out',
		transform: rotate2,
	  },   
	}
	
	return (
	  <button onClick={this.handleClick} style={styles.button}>
        <span style={styles.buttonLine1} />
        <span style={styles.buttonLine2} />
      </button> 	
	);
  }
}
export default Radium(ArrowIcon);
