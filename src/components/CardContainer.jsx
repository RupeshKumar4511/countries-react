import Card from './Card';
import css from './CardContainer.module.css';
import CardShimmer from './CardShimmer';

export default function CardContainer({ data,query }) {


    return data == null ? <CardShimmer/> : (

        <div className={css.CardContainer} >
        {    
        
            data.filter((country) =>
                country.name.common.toLowerCase().includes(query)).length > 0 ? (
                data
                .filter((country) =>country.name.common.toLowerCase().includes(query))
            .map((item, i) => (
                <Card
                    image={item.flags.png}
                    title={item.name.common}
                    fullname={item.name.official}
                    region={item.region}
                    capital={item.capital}
                    population={item.population.toLocaleString('en-IN')}
                    data={item}
                    key={i}
                />
            ))) : 
            (<p >No countries match your search.</p>)

        }
   


           
        </div>
    )
}