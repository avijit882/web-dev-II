import React from 'react'

function Menu(props) {
  return (
    <>
      <div>Menu</div>
      <ul>
        <li>Entertaiment</li>
        <li>Sports</li>
        <li>News</li>
       </ul>
      <button
        className="counter"
        onClick={() => props.setCount(count => count + 1)}
        >Count is {props.count}
        <
        className="counter"
        onClick={() => props.setCount(count => count + 1)}
        >Count is
       </button>
    </>
  )
}

export default Menu