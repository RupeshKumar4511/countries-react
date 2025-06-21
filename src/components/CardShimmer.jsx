import './CardShimmer.css';

const CardShimmer = () => {
  return (
 <div className='card-shimmer'>
    {
        Array.from({length:15}).fill(1).map((item,i)=> <div className="card" key={i}>
        <div className="image" ></div>
        <div className="content"></div>
    </div>)
    }
    

  </div>
  )
}

export default CardShimmer
