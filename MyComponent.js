import React, { Component } from 'react';
import Radium from 'radium';
import Accordion from './Accordion';
import ArrowIcon from './ArrowIcon';
import GifList from './GifList';
import GifItem from './GifItem';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class MyComponent extends Component {
  
  constructor() {
    super()
    this.state = {
      trending: [],
      random: null,
      goats: [],
      translate: null,
    }
    this.loadTrending = this.loadTrending.bind(this);
    this.loadRandom = this.loadRandom.bind(this);
    this.loadGoats = this.loadGoats.bind(this);
    this.loadTranslate = this.loadTranslate.bind(this);
  } 
 
  componentDidMount() {
    this.loadTrending();
    this.loadRandom();
    this.loadGoats();
    this.loadTranslate();
  }

  loadTrending() {  
    fetch('//api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
     .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
     })
     .then(gifs => {
       // console.log(gifs.data);
       const someGifs = gifs.data.slice(1,4);
       this.setState({trending: someGifs})
    }); 
  }

  loadRandom() { 
    fetch('//api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag')
     .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
     })
     .then(gifs => {
       // console.log(gifs);
       this.setState({random: gifs.data.image_original_url})
    }); 
  }

  loadGoats() { 
    fetch('//api.giphy.com/v1/gifs/search?q=baby+goats&api_key=dc6zaTOxFJmzC')
     .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
     })
     .then(gifs => {
       // console.log(gifs);
       const someGifs = gifs.data.slice(1,4);
       this.setState({goats: someGifs})
    }); 
  }

  loadTranslate() { 
    fetch('//api.giphy.com/v1/gifs/translate?s=rad&api_key=dc6zaTOxFJmzC')
     .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
     })
     .then(gifs => {
       console.log(gifs); 
       this.setState({translate: gifs.data.images.original.url})
    }); 
  }

  credit() {
    return(  
      <div style={{width:'100%', textAlign:'right', paddingTop:'1rem'}}>
        <img src="//raw.githubusercontent.com/austinsamsel/react-ui-accordion/master/assets/Poweredby_640px-White_HorizText.png" style={{width:'180px'}} alt="Powered By GIPHY" />
      </div>
    ); 
  }

  titleBar(){
    return(
      <div>
        Top 3 Trending GIFs {/* <ArrowIcon />*/}
      </div>
    );
  }
 
  render() {

    const s = {
      wrap : {
        fontFamily: '"avenir next", avenir, sans-serif',
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
      },
      item : {
        padding:'0.5rem 0',
      },
      content : {
        backgroundColor: '#eee',
        padding:'1rem',
        borderBottom: '1px solid #54e6e6',
        color: '#534f67',
      },
      // the following to be passed to Accordion
      title : {
        padding: '0.5rem',
        fontWeight: '600',
        borderBottom: '1px solid #eee'
      },
    } 

    return (
      <div style={s.wrap}>
        <h1 style={{color:'mediumpurple'}}>React UI Accordion</h1>

        <div style={s.item}>
          <Accordion title={this.titleBar()} titleStyle={s.title} >
            <div style={s.content}>
              <GifList data={this.state.trending} />
              {this.credit()}
            </div>
          </Accordion>
        </div>

        <div style={s.item}>
          <Accordion title="Totally Random GIF" titleStyle={s.title} >
            <div style={s.content}>
			  <GifItem> 
                {this.state.random}
              </ GifItem> 
              {this.credit()}
            </div>
          </Accordion>
        </div>

        <div style={s.item}>
          <Accordion title="baby goats!!!" titleStyle={s.title} >
            <div style={s.content}>
              <GifList data={this.state.goats} />
              {this.credit()}
            </div>
          </Accordion>
        </div>

        <div style={s.item}>
          <Accordion title="you are..." titleStyle={s.title} >
            <div style={s.content}>
			  <GifItem> 
                {this.state.translate}
              </ GifItem>
              <p>... rad.</p>
              {this.credit()}
            </div>
          </Accordion>
        </div>
      </div>
    );
  }
}
export default Radium(MyComponent);
