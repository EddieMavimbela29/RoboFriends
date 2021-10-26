import React from 'react';

class CounterButton extends React.PureComponent{

    constructor(){
        super();
        this.state ={
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.count !== nextState.count){
         return true;
        }
         return false;
    }

    updateCount = () =>{
        this.setState( state => {
            return{count: state.count + 1}
        })
    }

    render(){
        console.log('counterButton');
        return(
            <div>
                <button color={'red'} onClick={this.updateCount} >count : {this.state.count} </button>
            </div>
        )
    }

}

export default CounterButton;
