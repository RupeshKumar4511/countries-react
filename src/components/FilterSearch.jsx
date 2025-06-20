import styles from './FilterSearch.module.css';
import { CiSearch } from "react-icons/ci";

const FilterSearch = ({setQuery,setFilter}) => {
  return (
       <div className={styles['search-container']}>
      <div className={styles['search-box']}>
        <CiSearch className={styles['fa-solid']} /><input type="text" placeholder="Search a country...." className={styles.search} onChange={(e)=>setQuery((e.target.value).toLowerCase())}/>
      </div>
        <div className={styles['filter-title']}>
          <select name="filter" className={styles.filter}
          onChange={(e)=>setFilter(e.target.value)}
          >
         
            <option value="asia">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
         
          </select>
        </div>
      </div>
    
  )
}

export default FilterSearch
