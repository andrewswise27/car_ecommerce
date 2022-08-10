import React from 'react'
import styled from 'styled-components'
const BasketItems = ({index, manufacturer, model, price, img, removeFromBasket}) => {

    const handleClick = () => {
        removeFromBasket(index)
    }


  return (
    <Wrapper>
        <Image src={img}/>
        <Details>
        {manufacturer} {model} 
        <br></br>
        {new Intl.NumberFormat('gb-GB', { style: 'currency', currency: 'GBP' }).format(price)}
        <br></br>
            <RemoveButton onClick={handleClick}>
                Remove
            </RemoveButton>
        </Details>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: grey;
    margin-bottom: 16px;
    margin-left: 10px;
`
const Image = styled.img.attrs(props => ({ src: props.src }))`
    width: 100px;
    height: 75px;
`
const Details = styled.div`
    margin-left: 5px;
    font-size: 1rem;
    color: white;
`
const RemoveButton = styled.button``

export default BasketItems