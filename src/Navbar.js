import React from 'react';

const Navbar =(props)=>{

        return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/777/777205.svg" alt="cart"/>
                <span style={styles.count}>{props.count}</span>
            </div>    
        </div>)
}

const styles={
    cartIcon:{
        height:40,
        marginRight:25
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer: {
        position: 'relative'
      },
      count: {
        background: 'greenyellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 5,
        top: -9
      }
}

export default Navbar;