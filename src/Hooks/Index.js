import React, { useState } from "react";
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
function Eample() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <EampleTwo />
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>Click me</button>{/* 当状态需要改变时用setCount之类的*/}
    </div>
  )
}

export default Eample;