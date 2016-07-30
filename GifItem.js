import React, { PropTypes } from 'react'

// stateless component
const GifItem = (props) => {
  return (
    <div>
      <img src={props.children} style={{width:'100%'}} />
    </div>
  )
}

GifItem.propTypes = {
  children: PropTypes.string
}

export default GifItem
