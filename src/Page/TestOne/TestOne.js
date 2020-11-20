import { Button } from 'antd';
 import './index.css'

/*
example one
use function construct component
*/
function TestOne(props) { 
    return <h1>Hello, {props.name}.</h1>; 

}
function DateTime(props){
  return <Button type="primary" >Primary</Button>;
 }
 function Click(){
   return <Button 
   className='btnOne'
   onClick={activateLasers}>
   Activate Lasers
 </Button>
 }
 function activateLasers(){
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 3);
  console.log(doubled);
 }
function Show(){
  return(
    <div className='divOne'>
      <Click/>
      <DateTime />
      <TestOne name="williamluo"/>
      <TestOne name="jackluo"/>
      <TestOne name="jerryluo"/>
    </div>
  )
}
export default Show;