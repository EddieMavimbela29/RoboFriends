import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/Cardlist';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import '../containers/App.css'


import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    pending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

 class App extends Component {  
  
   componentDidMount(){
     this.props.onRequestRobots();
   }

   render() {

   const { searchField, onSearchChange, robots, isPending } = this.props;
   const filteredRobots = robots.filter( robot => {
       return robot.name.toLowerCase().includes(searchField.toLowerCase());
   });

     return (
         <div className="tc">
             <Header/>
             <SearchBox searchChange={onSearchChange}/>
             <Scroll>
               { isPending ? <h1> Loading</h1> :
               <ErrorBoundry>
                  <CardList robots={filteredRobots} />
               </ErrorBoundry>  
               }
             </Scroll>     
         </div>
    )
         
  }
    
}


    
  
export default  connect(mapStateToProps, mapDispatchToProps)(App);
