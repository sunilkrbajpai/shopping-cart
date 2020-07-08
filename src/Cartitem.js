import React from 'react';

class CartItem extends React.Component{
    
    increaseQty=()=>{
        // this.state.qty+=1;

        // this.setState({
        //     qty:this.state.qty + 1
        // });

        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        },()=>{
        console.log(this.state);

        });
    }

    decreaseQty=()=>{

        const {qty}=this.state;
        if(qty===1)
        return;

        this.setState((prevState)=>{
            return {
                qty:prevState.qty-1
            }
        });
    }

    render(){
        const {price,title,qty}=this.props.product;
        return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Price: Rs.{price}</div>
                <div style={{color:'#777'}}>Quantity: {qty}</div>
                <div className="cart-item-actions">
                    <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/svg/992/992651.svg"
                    onClick={this.increaseQty}
                    />
                    
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/512/3082/3082375.png"
                    onClick={this.decreaseQty}
                    />
                    
                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/svg/70/70287.svg"/>
                </div>
            </div>    
        </div>)
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4
    }
}

export default CartItem;