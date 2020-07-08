import React from 'react';
import CartItem from './Cartitem';

const Cart =(props)=>{
    
        const {products}=props;

        return(
            <div className="cart">  
            {products.map((product)=>{

                return  (
                <CartItem 
                product={product} 
                key={product.id}
                onIncreaseQuan={props.onIncreaseQuan}
                onDecreaseQuan={props.onDecreaseQuan}
                onDeleteProduct={props.onDeleteProduct}
                />
                )

            })}          
            </div>
        );
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4
    }
}

export default Cart;