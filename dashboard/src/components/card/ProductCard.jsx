import PropTypes from "prop-types";

export const ProductCard = ({allProducts}) => {
    return (
    <>
   {  allProducts.map(({price}, index) => (
               
    <article key={index} className="index__main--article" data-aos="fade-down" data-aos-duration="1000">
    <a ><img  alt=""/></a>
    <div className="index__main--article-info">
            <h4 className="index__main--article-lineProduct"> {price}</h4>
            <p>asdasd</p>
            <h4>{price}</h4> 
            <h4> {price}</h4>     
         
    </div>
    <div className="index__main--article-comprar"><a href="#"><button  type="button"><i
                    className="fa-solid fa-cart-shopping"></i> COMPRAR</button></a>
    </div>
    <div className="index__main--article-verMas"><a href="/products/productDetail/= id"><button>
                VER MÁS</button></a></div>
</article>
     ))}
    
    </>
  )
}
ProductCard.propTypes = {
    allProducts : PropTypes.func
  }