import  {useState, useEffect} from 'react';
import jsonPlaceHolder from '../apis/jsonPlaceHolder'

const useResources= resource =>{
  const fetchResource = async (resource)=>{
    const response= await jsonPlaceHolder.get(`/${resource}`);
    setResources(response.data);
  }

  //initalize a state called resources with empty array
  const[resources,setResources] =useState([]);

  //useEffect is ran when component first renders and also whenever it rerenders
  //checks array arguement, if it different useEffect is called again
  useEffect(()=>{
    fetchResource(resource);
  }, [resource]);

  return resources;
}

export default useResources;
