import React from 'react'
import ItemList from './ItemList'

const Content = ({items,handleCheck,handleDelete}) => {

  return (
    <>
        {items.length ? (
          <ItemList
            items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />
        ) : (
            <p style={{marginTop: '2rem'}}>Sua lista está vazia</p>
        )}
    </>
  )
} 

export default Content