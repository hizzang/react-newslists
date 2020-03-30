import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './NewsLists';
import Categories from './Components/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=64ff34566c1e49398b0cf686cc89628f');

      setData(response.data);
    
    } catch(e){
      console.log(e);
    }
    
  };

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>

  )
}


export default App;