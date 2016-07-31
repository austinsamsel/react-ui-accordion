import React, { Component } from 'react';
import Radium from 'radium';
import ArrowIcon from './ArrowIcon';

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

  componentDidUpdate(){
    const newHeight = this.refs.content.clientHeight;
    if (newHeight !== this.state.wrapHeight){
      this.setState({ wrapHeight: newHeight });
    }
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

    let wrapSize = !this.state.open ? '0px' : this.state.wrapHeight;
 
    let opacity = !this.state.open ? '0.0' : '1.0';

    const styles = {
      section: {
        position: 'relative',
        width: '100%'
      },
      contentWrap: {
        maxHeight: wrapSize,
        overflow: 'hidden',
        opacity: opacity,
        transition: '0.5s',
      },
      sectionHead: {
        cursor: 'default',
        display: 'flex',
        fontSize: '1.25rem',
        justifyContent: 'space-between',
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
        <div className='header' 
           style={[styles.sectionHead, this.props.titleStyle ]} 
           onClick={this.handleClick}
        >
          {this.props.title}
          <div style={{display:'flex'}}>
            <ArrowIcon isOpen={this.state.open} />
          </div>
        </div>
        <div className='contentWrap' style={styles.contentWrap}>
          <div ref='content' style={styles.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
export default Radium(Accordion)
