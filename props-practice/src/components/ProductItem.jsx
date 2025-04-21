import React from 'react'

const ProductItem = ({item, idx}) => {
    return (
        <div style={{borderBottom: "0.3rem solid purple", padding: "1rem"}}>
            <h3>{idx + 1} : {item.name}-{item.price} {item.isSale && "세일중" }</h3>
        </div>
    );
}

export default ProductItem;