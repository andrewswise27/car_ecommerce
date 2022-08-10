import React from 'react'
import styled from 'styled-components'

const Basket = ({totalPrice, totalItems, flipBasketVisible}) => {

    const handleClick = () => {
        flipBasketVisible()
    }

  return (
    <Wrapper>
        <Title>
            Basket {totalItems ? <span> ({totalItems}) </span>: null}
        </Title>
        <BasketInfo>
            Total: {new Intl.NumberFormat('gb-GB', { style: 'currency', currency: 'GBP' }).format(totalPrice)}
        </BasketInfo>
        <ButtonWrapper>
            <CheckoutButton>
              Checkout
             </CheckoutButton>
            <ViewBasket onClick={handleClick}>
             Basket
            </ViewBasket>
        </ButtonWrapper>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
    align-items: center;
    width: 200px;
    max-width: 200px;
`
const Title = styled.h3`
    margin: 0;
`
const BasketInfo = styled.blockquote`
    display: inline-block;
    margin: 0;
`
const CheckoutButton = styled.button``

const ViewBasket = styled.button`
    display: inline-block;
`

const ButtonWrapper = styled.div`

`

export default Basket