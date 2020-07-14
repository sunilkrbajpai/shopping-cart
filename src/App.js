import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';
// import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={

        products:[],
        loading:true
    }
    this.db=firebase.firestore();
}
componentDidMount () {
  // firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot)=>{
  //   snapshot.docs.map((doc)=>{
  //     console.log(doc.data());
  //   })

  //   const products=snapshot.docs.map((doc)=>{

  //     const data=doc.data();
  //     data['id']=doc.id;
  //     return data;
  //   })
  //   this.setState({
  //     products,
  //     loading:false
  //   })
  // })
this.db
  .collection('products')
  .onSnapshot((snapshot)=>{
    snapshot.docs.map((doc)=>{
      console.log(doc.data());
    })

    const products=snapshot.docs.map((doc)=>{

      const data=doc.data();
      data['id']=doc.id;
      return data;
    })
    this.setState({
      products,
      loading:false
    })
  })
}

handleIncreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);

    // products[index].qty+=1;


    // this.setState({
    //     // products:products
    //     products
    // });

    const docReg=this.db.collection('products').doc(products[index].id);
    docReg.update({
      qty:products[index].qty+1
    })
    .then(()=>{
      console.log('Product Updated');
    })

}
handleDecreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);

    if(products[index].qty===1)
    return;

    // products[index].qty-=1;
    // this.setState({
    //     // products:products
    //     products
    // },()=>{       
    //      console.log('',product);
    // })

    const docReg=this.db.collection('products').doc(products[index].id);
    docReg.update({
      qty:products[index].qty-1
    })
    .then(()=>{
      console.log('Product Updated');
    })

}

handleDeleteProduct=(id)=>{
    const {products}=this.state;
    // const items=products.filter((item)=>item.id!==id);

    // this.setState({
    //     products:items
    // })

    const docRef=this.db.collection('products').doc(id);
    docRef.delete()
    .then(()=>{
      console.log('Deleted Successfully');
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

addProducts=()=>{
  this.db.collection('products')
  .add({
    img:'',
    qty:3,
    title:'Washing Machine',
    price:99999
  })
  .then((docRef)=>{
    console.log(docRef);
  }).catch((err)=>{
    console.log(err);
  })
}

  render(){

    const {products,loading}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>

        <button onClick={this.addProducts}>Add a product</button>
        <Cart 
        products={products}
        onIncreaseQuan={this.handleIncreaseQuantity}
        onDecreaseQuan={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />

        {loading && <h1>Loading products in Cart</h1>}
        <div style={{fontSize:25,padding:20,color:'blue'}}>Total: Rs {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
