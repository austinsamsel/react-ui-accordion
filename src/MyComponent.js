import React, { Component } from 'react';
import Radium from 'radium';
import Accordion from './accordion/Accordion';
import GifList from './gifList/GifList';
import GifItem from './gifList/GifItem';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class MyComponent extends Component {

  constructor() {
    super()
    this.state = {
      trending: [],
      random: null,
      query: [],
      translate: null,
    }
    this.loadTrending = this.loadTrending.bind(this);
    this.loadRandom = this.loadRandom.bind(this);
    this.loadQuery = this.loadQuery.bind(this);
    this.loadTranslate = this.loadTranslate.bind(this);
  }

  componentDidMount() {
    this.loadTrending();
    this.loadRandom();
    this.loadQuery();
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

  loadQuery() {
    fetch('//api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC')
     .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
     })
     .then(gifs => {
       // console.log(gifs);
       const someGifs = gifs.data.slice(1,4);
       this.setState({query: someGifs})
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
       // console.log(gifs);
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

  render() {

    const s = {
      page: {
        background: 'linear-gradient(-30deg, #B3FFAB, #12FFF7)',
        minHeight:'100vh',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      },
      wrap : {
        fontFamily: '"avenir next", avenir, sans-serif',
        padding: '2rem',
        maxWidth: '600px',
        margin: '2rem',
        backgroundColor:'white',
        borderRadius:'10px',
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
      p: {
        color: '#534f67',
      },
      link: {
        color: 'deeppink',
        textDecoration: 'none',
      },
      // the following to be passed to Accordion
      title : {
        padding: '0.5rem',
        fontWeight: '600',
        borderBottom: '1px solid #eee'
      },
    }

    return (
      <div style={s.page}>
        <div style={s.wrap}>
          <h1 style={{color:'#7200ff', fontSize:'2.25rem'}}>React UI Accordion</h1>
          <p className="about" style={s.p}>
            Demo of an accordion UI component made in React. This uses the GIPHY API to populate each window with content. <a href="https://hightops.co" style={s.link}>Made by High Tops</a>.
          </p>
          <div style={s.item}>
            <Accordion title="Top 3 Trending GIFs" titleStyle={s.title} >
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
            <Accordion title="Dolphin 🐬  GIFs" titleStyle={s.title} >
              <div style={s.content}>
                <GifList data={this.state.query} />
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
      </div>
    );
  }
}
export default Radium(MyComponent);
