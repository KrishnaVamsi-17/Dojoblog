import {useState,useEffect} from 'react';


const useFetch = (url) => {
  const [data,setData] = useState(null);
  const [Loading , setLoading] = useState(true);
  const [error,setError] = useState(null);


  useEffect(()=> {
    setTimeout(() => {
      fetch(url)
    .then(res => {
      if(!res.ok){
        throw Error('Could not fetch the data for that resource');
      }
      return res.json();
    })
    .then(data=> {
      setData(data);
      setLoading(false);
      setError(null);
    })
    .catch(err => {
     
      setLoading(false);
      setError(err.message);
      
      
    })
    }, 1000);
    
  },[url]);
  return {data,Loading,error};
}

export default useFetch;
