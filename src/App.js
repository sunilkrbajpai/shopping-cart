import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
// import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={

        products:[
            {
                price:99,
                title:'Watch',
                qty:1,
                img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=759&q=80',
                id:1
            },
            {
                price:999,
                title:'Mobile phone',
                qty:1,
                img:'https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
                id:2
            },
            {
                price:9990,
                title:'Laptop',
                qty:1,
                img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
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

getCartCount=()=>{
  const {products}=this.state;
  let count=0;

  products.forEach((product) => {
    count+=product.qty;
  });
  return count;
}
getCartTotal=()=>{
  const {products}=this.state;
  let cartTotal=0;

  products.map((product)=>{
    cartTotal=cartTotal+product.qty*product.price
  })
  return cartTotal;
}

  render(){

    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
        products={products}
        onIncreaseQuan={this.handleIncreaseQuantity}
        onDecreaseQuan={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize:25,padding:20,color:'blue'}}>Total: Rs {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
