import React, { PropTypes } from 'react'
import GifItem from './GifItem'

// stateless component
const GifList = (props) => {
  const gifItems = props.data.map((gif, i) => {
    return (
      <GifItem key={i}>
        {gif.images.original.url}
      </GifItem>
    )
  });

  return (
    <div>
      {gifItems}
    </div>
  )
}

GifList.PropTypes = {
  data: PropTypes.array.isRequired
}

export default GifList
