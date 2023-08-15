import React from 'react'

const Footer = ({length}) => {

  return (
    <footer>
        <p>{length} {length === 1 ? "Item" : "Items"} na Lista</p>
    </footer>
  )
}

export default Footer