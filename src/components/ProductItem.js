import React from 'react'
import styled from 'styled-components'

const ProductItem = ({manufacturer, model, price, img, addToBasket, index}) => {

    const handleClick = (event) => {
        addToBasket(event.target.value)
    }

  return (
    <Wrapper>
        <ProductImg src={img}/>
        <ProductInfo>
            {manufacturer} <b>{model}</b> 
            <br></br>
            {new Intl.NumberFormat('gb-GB', { style: 'currency', currency: 'GBP' }).format(price)}
        </ProductInfo>
        <BasketButton onClick={handleClick} value={index}>
            Add to Basket
        </BasketButton>

    </Wrapper>
    
  )
}

const Wrapper = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    border: 1px solid black;
    padding: 16px 0px;
`
const ProductImg = styled.img.attrs(props => ({ src: props.src }))`
    width: 300px;
    height: 200px;
`
const ProductInfo = styled.blockquote`
    text-align: center;
`
const BasketButton = styled.button`
    border-radius: 2px;
    background-color: black;
    color: white;
`


export default ProductItem