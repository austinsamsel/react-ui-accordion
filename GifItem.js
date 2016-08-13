import React, { PropTypes } from 'react'

// stateless component
const GifItem = (props) => {
  return (
    <div>
      <img src={props.children} style={{width:'100%'}} />
    </div>
  )
}

GifItem.PropTypes = {
  children: PropTypes.string.isRequired
}

export default GifItem
