import { Button } from 'antd';

function GetGreeting(props) { 
    return <h1>Hello, {props.name}.</h1>; 

}
function DateTime(props){
  return <Button type="primary">Primary</Button>;
 }
 function Click(){
   return <Button 
   className='but1'
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
    <div>
    <Click/>
    <DateTime />
    <GetGreeting name="williamluo"/>
    <GetGreeting name="jackluo"/>
    <GetGreeting name="jerryluo"/>
    <textarea>
    你好， 这是在 text area 里的文本
    </textarea>
     </div>
  )
}
export default Show;