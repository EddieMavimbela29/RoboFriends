import React,{ useEffect, useState } from "react";
import axios from 'axios';
import SearchBox from '../components/SearchBox';
import CardList from '../components/Cardlist';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import '../containers/App.css'
import { useSelector } from "react-redux";


const Home = () => {
   const [robots, setRobots] = useState([]);
   const [searchField, setSearchField] = useState("");
   const { isFetching, error } = useSelector((state) => state.robot);

   useEffect(()=> {
     const getRobots = async () => {
         try {
           const res = await axios.get("https://jsonplaceholder.typicode.com/users");
           setRobots(res.data)
         } catch (e) {}
     }
     getRobots();
   },[]);

   const onSearchChange = (e) => {
     setSearchField(e.target.value);
   }

   const filteredRobots = robots.filter(robot => {
     return robot.name.toLowerCase().includes(searchField.toLowerCase());
   });

  return(
    <div className='tc'>
       <h1 className='f1'>RoboFriends</h1>
       <SearchBox searchChange={onSearchChange}/>
       <Scroll>
         { isFetching && <h1>Loading</h1>}
          { error && <h1>server shutdown</h1>}
           <ErrorBoundry>
             <CardList robots={filteredRobots} />
           </ErrorBoundry>
       </Scroll>
     </div>
   );

}



export default Home;
