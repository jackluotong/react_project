import { Button } from 'antd';
import React from 'react';
import './index.css'
   export default class TestTwo extends React.Component {
       /**
        * constructor(props) {
        * super(props);
        */
       constructor(props){
           super(props) 
               this.state={
                   val:0,
                   date:new Date()
               }
        }
    /**
     * define life cycle 
     * 
     */
    componentDidMount(){
        console.log('i am a componentDidMount')
        this.setState({val:this.state.val+1})
        console.log(this.state.val);
        this.timer=setTimeout(() => {
            console.log(this.state.val);
        }, 1000);
        this.timerId=setInterval(
            () => this.tick(),
            1000
        );
    }
    componentDidUpdate(){
        console.log('i am  a componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('i am a componentWillUnmount');
        clearTimeout(this.timer)
        clearInterval(this.timerId)
    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    /**
     * define function
     * 
     */
    /**
     * render and do some layout
     */
    render(){ 
        return(
            <div className='divTwo'>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <h1>{this.state.val}</h1>
                 <h1>222</h1>
                <Button
                type="primary" shape="round"
                className='btnTwo'
                onClick={clickTwo}>click test.</Button> 
            </div>    
            );       
    }
}
function clickTwo(){
    alert(1)
}
 
