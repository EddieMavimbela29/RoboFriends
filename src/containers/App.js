import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/Cardlist';
import Scroll from '../components/Scroll';
import '../containers/App.css'

 class App extends Component {  
    
   constructor(){
     super()

     this.state = {
       robots: [], 
       searchField: ''
     }
   }

   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({robots: users})
      })
   }

   onSearchChange = (event) => {
     this.setState({searchField: event.target.value});
   };

   render() {

    const { robots, searchField } = this.state;
  
    const filteredRobots = robots.filter( robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if( !robots.length ){
      return <h1> Loading</h1>
    }else{
    return (
         <div className="tc">
             <h1 className='f2'> RoboFriends </h1>
             <SearchBox searchChange={this.onSearchChange}/>
             <Scroll>
               <CardList robots={filteredRobots} />
             </Scroll>     
         </div>
    );
    }     
  }
    
}


    
  
export default App;
