import { Button } from 'antd';
import React from 'react';
import './index.css'
   export default class TestTwo extends React.Component {
       /**
        * constructor(props) {
        * super(props);
        */
    /**
     * define life cycle 
     * 
     */
    componentDidMount(){
        console.log('i am a componentDidMount')
    }
    componentDidUpdate(){
        console.log('i am  a componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('i am a componentWillUnmount');
    }
    /**
     * render and do some layout
     */
    render(){ 
        return(
            <div className='divTwo'>
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
 
