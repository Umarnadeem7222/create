import React from 'react'

function Main(props) {
    const { prod, onAdd } = props;
    return (
        <div>
            <div className="container aa" style={{backgroundColor : "#c3dac3",float:"left"}}> 
        <h1 className="display-3 text-center">HU E-STORE</h1>
            {
                prod.map((product) => (
                    
                    <div className="col-lg-4 col-md-4 col-xs-12 mt-4" style={{float:"left",backgroundColor:""}}>
                       <div className="card-container" >
                   <h2 className="card-price"><span class="currency">$</span>{product.price}</h2>
                 <h1 className="card-title">{product.name}</h1>
                 <h1 className="details-btn">More Details</h1>
                 <div className="card-image-container">
               <img src={product.image} alt=""/>
             </div>
             <i className="fas fa-cart-plus cart-btn" onClick={() => onAdd(product)}></i>
    </div>
                    </div>
          
                ))
            }
            </div>
        </div>
    )
}

export default Main
