import React from 'react';
import CartItem from './Cartitem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={

            products:[
                {
                    price:99,
                    title:'Watch',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:999,
                    title:'Mobile phone',
                    qty:1,
                    img:'',
                    id:2
                },
                {
                    price:9990,
                    title:'Laptop',
                    qty:1,
                    img:'',
                    id:3
                },
            ]
        }
    }

    handleIncreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);

        products[index].qty+=1;
        this.setState({
            // products:products
            products
        },()=>{       
             console.log('',product);
        })

    }
    handleDecreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);

        if(products[index].qty===1)
        return;

        products[index].qty-=1;
        this.setState({
            // products:products
            products
        },()=>{       
             console.log('',product);
        })

    }


    handleDeleteProduct=(id)=>{
        const {products}=this.state;
        const items=products.filter((item)=>item.id!==id);

        this.setState({
            products:items
        })
    }

    render(){
        const {products}=this.state;

        return(
            <div className="cart">  
            {products.map((product)=>{

                return  (
                <CartItem 
                product={product} 
                key={product.id}
                onIncreaseQuan={this.handleIncreaseQuantity}
                onDecreaseQuan={this.handleDecreaseQuantity}
                onDeleteProduct={this.handleDeleteProduct}
                />
                )

            })}          
            </div>
        );
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4
    }
}

export default Cart;