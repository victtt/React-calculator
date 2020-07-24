import React from 'react'

export default function Button(props) {

  return (
    <button onClick={props.handleOnClick} value={props.value}>
    {props.value}
  </button>
  )
}

