function GetGreeting(props) { 
    return <h1>Hello, {props.name}.</h1>; 

}
function DateTime(props){
  return <h2>It is {props.Date}.</h2>;
 }
 function Click(){
   return <button 
   className='but1'
   onClick={activateLasers}>
   Activate Lasers
 </button>
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
    {/* <select>
  <option value="grapefruit">葡萄柚</option>
  <option value="lime">酸橙</option>
  <option selected value="coconut">椰子</option>
  <option value="mango">芒果</option>
</select> */}
    </div>
  )
}
export default Show;

