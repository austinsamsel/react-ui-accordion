import React, { Component } from 'react';
import Radium from 'radium'

class Accordion extends Component {

  constructor() {
    super();

    this.state = {
      open: false,
      wrapHeight: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const contentHeight = this.refs.content.clientHeight;
    this.setState({ 
      wrapHeight: contentHeight 
    });
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

    let rotate1 = !this.state.open ? 'translate(75%, -50%) rotate(45deg)' : 'translate(0%, -50%) rotate(-45deg)';

    let rotate2 = !this.state.open ? 'translate(-75%, -50%) rotate(-45deg)' : 'translate(0%, -50%) rotate(45deg)';

    let rotateHeight = !this.state.open ? '2.5em' : '14px';

    let heightSwap = !this.state.open ? '9px' : '14px';

    let wrapSize = !this.state.open ? '0px' : this.state.wrapHeight;

    let wrapTransition = !this.state.open ? 'max-height 0.5s ease-in' : 'max-height 0.5s ease-in'    
    let opacity = !this.state.open ? '0.0' : '1.0';

    const styles = {
      section: {
        position: 'relative',
        width: '100%'
      },
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
      contentWrap: {
        maxHeight: wrapSize,
        overflow: 'hidden',
        opacity: opacity,
        transition: '0.5s',
      },
      sectionHead: {
        width: '100%',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        paddingRight: '2.1em',
      },
      content: {
        color: '#333',
        lineHeight: '1.3',
      }
    }

    return (
      <div style={styles.section}>
        <button style={styles.button}>
          <span style={styles.buttonLine1} />
          <span style={styles.buttonLine2} />
        </button>
        <div className='header' style={styles.sectionHead} onClick={this.handleClick}>
          {this.props.title}
        </div>
        <div className='contentWrap' style={styles.contentWrap}>
          <div ref='content' style={styles.content}>
            {this.props.children} - {this.state.wrapHeight}
          </div>
        </div>
      </div>
    )
  }
}
export default Radium(Accordion)
