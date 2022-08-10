import React from 'react'
import ProductItem from '../components/ProductItem'
import styled from 'styled-components'

const ProductContainer = ({addToBasket, products}) => {

    const cars = products.map((product, i) => {
        return (<ProductItem key={i}
            manufacturer={product.manufacturer}
            model={product.model}
            price={product.price}
            img={product.img} 
            addToBasket={addToBasket}
            index={i}/>
            )
    })

  return (
    <>
    <Container >{cars}
    </Container>
    </>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;
    margin: 16px;
`


export default ProductContainer