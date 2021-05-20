    import React from 'react'

function Basket(props) {
    const { cartItems1, onAdd, onRemove } = props;
    const itemsPrice = cartItems1.reduce((a,c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice * 0.12;
    const totalPrice = itemsPrice +shippingPrice;
    return (
        <div>
            <h1 className="display-4" style={{float:'left'}}>Products Cart</h1>
            {
                    props.countItems ? (
                        <div style={{textAlign:"left"}}>
                        <i class="fas fa-shopping-basket ml-3">{props.countItems}</i>    
                        </div>
                    ) : (
                        <p className="lead mb-1 text-center">Cart is Empty</p>
                    )
                }
            
                            <div className="container">
                           <table className="table table-bordered">
                               <tr>
                                   <th>Name</th>
                                   <th>Price</th>
                                   <th>qty</th>
                                   <th>Image</th>
                                   <th>total</th>
                                   <th>shiping price</th>
                               </tr>
                               </table>
                               </div>
                   {
                       cartItems1.map((cartIt) =>(
                           <div className="container" >
                        <table className="table table-bordered" style={{backgroundColor:"#c3dac3"}}>
                        <tr>
                            <td>{cartIt.name}</td>
                            <td>{cartIt.price}</td>
                            <td><button class="fas fa-plus mr-1 btn btn-outline-success" onClick={() => onAdd(cartIt)}></button> {cartIt.qty} <button class="fas fa-minus ml-1 btn btn-outline-success" onClick={() => onRemove(cartIt)}></button></td>
                            <td><img src={cartIt.image} style={{ width:"80px", height:"80px" }}></img></td>
                            <td>{cartIt.price*cartIt.qty}</td>
                            <td>{((cartIt.price*cartIt.qty)*0.12)}</td>
                        </tr>
                        </table>
                        </div>
                       ))
                    }
                
                    <h3>GRAND TOTAL : {totalPrice}</h3>
                    <a name="" id="" class="btn btn-danger btn-lg center mb-3" href="#" role="button">Checkout</a>
                            
        </div>
    )
}

export default Basket
