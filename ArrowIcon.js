import React, { Component } from 'react';
import Radium from 'radium'

class ArrowIcon extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: props.isOpen
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(props){
    this.setState({open: props.isOpen});
  }

  handleClick() {
    if(this.state.open) {
      this.setState({
        open: false
      });
    } else {
      this.setState({
        open: true
      });
    }
  }

  render() {

    let rotate1 = !this.state.open 
      ? 'translate(75%, -50%) rotate(45deg)' 
      : 'translate(0%, -50%) rotate(-45deg)';

    let rotate2 = !this.state.open 
      ? 'translate(-75%, -50%) rotate(-45deg)' 
      : 'translate(0%, -50%) rotate(45deg)';

    let rotateHeight = !this.state.open ? '2.5em' : '14px';

    let heightSwap = !this.state.open ? '9px' : '14px';

    const styles = {
      button: {
        position:'relative',
        border: 0,
        background: 'none',
        textIndent: '-9999%',
        pointerEvents: 'none',
      },
      buttonLine1: {
        content: '',
        display: 'block',
        position: 'absolute',
        height: heightSwap,
        width: '3px',
        borderRadius: '3px',
        background: '#666',
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
        width: '3px',
        borderRadius: '3px',
        background: '#666',
        transformOrigin: '50%',
        top: '50%',
        left: '50%',
        transition: 'all .25s ease-in-out',
        transform: rotate2,
      },
    }

    return (
      <div className='button'  
        style={{display: 'flex'}}
        onClick={this.handleClick}
      >
        <button style={styles.button} className='b' >
          <span style={styles.buttonLine1} className='bl1' />
          <span style={styles.buttonLine2} className='bl2' />
        </button>
      </div>
    )
  }
}
export default Radium(ArrowIcon)
