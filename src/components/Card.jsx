import { Link } from 'react-router-dom';
import styles from './Card.module.css';
export default function Card({image,title, region,capital,population,data}){
    
    return (
        <Link to={`/${title}`} state={data}>
        <div className={styles.card}>
            <img src={image} alt="image" className={styles.image}/>
            <h2>{title}</h2>
            <p><b>Region : </b>{region}</p>
            <span><b>Capital : </b>{capital}</span>
            <p><b>Population : </b>{population}</p>
        </div>
        </Link>
    );
}




