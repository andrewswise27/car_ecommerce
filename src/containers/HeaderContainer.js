import React from 'react'
import Basket from '../components/Basket'
import styled from 'styled-components'

const HeaderContainer = ({basketItems, flipBasketVisible}) => {

    const totalPrice = basketItems.reduce((current, next) => {
      return current + next.price
    }, 0)

    const totalItems = basketItems.length

  return (
    <Wrapper>
        <Title>
            A&E Cars
        </Title>
        <Basket totalPrice={totalPrice} totalItems={totalItems} flipBasketVisible={flipBasketVisible}>
            
        </Basket>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: black;
    color: white;
    margin: 0px;
`
const Title = styled.h1`
    margin: 0 16px;
`



export default HeaderContainer