import React, {useState} from 'react';
import ResourceList from './ResourceList';

const App =()=>{
  //create a state for function component
  const[resource,setResource]= useState('posts');

    return (
      <div className="App">
        <div>
          <button onClick={()=>setResource('posts')}>Posts</button>
          <button onClick={()=>setResource('todos')}>Todos</button>
        </div>
        <ResourceList resource={resource}/>
      </div>
    )
}

export default App;
