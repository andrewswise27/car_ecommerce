import React from 'react'
import BasketItems from '../components/BasketItems'
import styled from 'styled-components'

const BasketContainer = ({basketItems, removeFromBasket}) => {

    const basketNodes = basketItems.map((item, i) => {
        return (<BasketItems key={i} index={i} 
                manufacturer={item.manufacturer}
                model={item.model}
                price={item.price}
                img={item.img}  
                removeFromBasket={removeFromBasket}/>)
    })

  return (
    <>
    {basketItems.length > 0 ? <Container>{basketNodes}</Container> : <EmptyContainer>Your Basket is empty</EmptyContainer>}
    </>
  )
}

const Container = styled.div`
    position: absolute;
    top: 63px;
    right: 0;
    width: 25%;
    background-color: grey;
    padding-top: 10px;
`

const EmptyContainer = styled.div`
    position: absolute;
    top: 63px;
    right: 0;
    width: 200px;
    background-color: grey;
    padding: 10px 0px;
    color: white;
    text-align: center;
`

export default BasketContainer