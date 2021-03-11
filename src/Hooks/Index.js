import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
/**
 * use hooks
 * 
 */
function EampleTwo() {
  /**
   * define some state
   */
  const [age] = useState(26)
  const [sex] = useState('boy')
  const [work] = useState('front-end enginner')
  return (
    <div>
      <p>William this year is {age}old</p>
      <p>sex:{sex}</p>
      <p>his work is {work}</p>
    </div>
  )
}
function Index() {
  return <h2>hhh</h2>
}
function IndextWO() {
  return <h2>hhhtwo</h2>
}
function Eample() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // console.log('useEffect=>you clicked me ${count} times');
  })
  return (
    <div>
      <EampleTwo />
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>Click me</button>{/* 当状态需要改变时用setCount之类的*/}
      <Router>
        <ul>
          <li><Link to='/'>s</Link></li>
          <li><Link to='/list/'>s1</Link></li>
        </ul>
        <Route path='/' exact component={Index} />
        <Route path='/list/' component={IndextWO} />
      </Router>

    </div>
  )
}

export default Eample;