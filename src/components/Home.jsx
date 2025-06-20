import {useEffect, useState } from 'react'
import FilterSearch from './FilterSearch';
import CardContainer from './CardContainer';
import CardShimmer from './CardShimmer';
import './Home.css';
import { useTheme } from '../Hooks/useTheme';
const Home = () => {
  const [query, setQuery] = useState('');
  const [filter ,setFilter] = useState('asia')
  const [fetchedData, setFetchedData] = useState([]);
  const [isDark]= useTheme();

  useEffect(() => {
   fetch(`https://restcountries.com/v3.1/region/${filter}`).then((res) => res.json()).then((res_data)=>{
      setFetchedData(res_data);
    }).catch((error)=>{console.log(error)})},
  [filter])

  if(fetchedData.length == 0){
  return(
  <CardShimmer/>
  )
  }


  return (
    <main className={isDark?'dark':''}>
      <FilterSearch setQuery={setQuery} setFilter={setFilter} />
      <CardContainer data={fetchedData}  query = {query}  /> 
    </main>
  )
}

export default Home
