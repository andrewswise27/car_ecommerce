import HeaderContainer from "./containers/HeaderContainer";
import ProductContainer from "./containers/ProductContainer";
import { useState } from 'react';
import BasketContainer from "./containers/BasketContainer";
import styled from "styled-components";

function App() {

  const [products, setProducts] = useState([
    {manufacturer: 'Mercedes', model: 'SLS-AMG', price: 80000, img: 'https://www.brabus.com/_Resources/Persistent/f/7/2/4/f72424de0255855aaaf501bc4a3edbeb92179d23/C4S_138%20%287%29-1169x780.jpg?bust=f72424de?bust=f72424de' },
    {manufacturer: 'Mazda', model: 'MX-5', price: 18000, img: 'https://assets-eu-01.kc-usercontent.com/bb5aba31-d98c-0160-8548-418b3723c58e/0053148b-30bd-4868-a204-e3fa60dacc37/Mazda%20MX-5%20100%20anniversary%20(13).jpg'},
    {manufacturer: 'Audi', model: 'R8', price: 50000, img: 'https://www.topgear.com/sites/default/files/2022/04/1-Audi-R8.jpg' },
    {manufacturer: 'Nissan', model: 'Fairlady', price: 30000, img: 'https://www.nissan-global.com/JP/INNOVATION/DESIGN/DESIGNWORKS/Z_CUSTOMIZED_PROTO/ASSETS/IMG/ZCP_main.jpg' },
    {manufacturer: 'BMW', model: 'Z4', price: 35000, img: 'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1562247473/autoexpress/2019/03/p90340055_highres_the-all-new-bmw-z4-2_0.jpg'},
    {manufacturer: 'Aston Martin', model: 'Vanquish', price: 55000, img: 'https://www.topgear.com/sites/default/files/2021/10/AstonMartinVanquishSMaxEarey000.jpg'}
])

  const [basketItems, setBasketItems] = useState([])

  const [basketVisible, setBasketVisible] = useState(false)

  const addToBasket = (index) => {
    const newBasket = [...basketItems, products[index]]
    setBasketItems(newBasket)
  };

  const flipBasketVisible = () => {
    setBasketVisible(!basketVisible)
  }

  const removeFromBasket = (index) => {
    const newBasket = [...basketItems]
    newBasket.splice(index, 1)
    setBasketItems(newBasket)
  }

  return (
    <Container>
      <HeaderContainer basketItems={basketItems} flipBasketVisible={flipBasketVisible}/>
      {basketVisible ? <BasketContainer basketItems={basketItems} removeFromBasket={removeFromBasket}/> : null}
      <ProductContainer products={products} addToBasket={addToBasket}/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`

export default App;
