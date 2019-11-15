import React, {useState, useEffect} from 'react';
import useResources from './useResources'

const ResourceList=({resource})=>{
  const resources =useResources(resource);
  return(
    <div>
      <div>
      {resource}
      </div>
      <ul>
      {resources.map(record =><li key={record.id}>{record.title}</li>)}
      </ul>
    </div>
  );
}

export default ResourceList;
