import { useContext } from "react"
import styledComponents from "styled-components"
import { ProductsContext } from "../../App"
import { BlueButton } from "../commons/buttons"
import { CartProduct } from "./CartProduct"

// Styled components
const Wrapper = styledComponents.div`
  width: 500px;
  height: 500px;
  padding: 1rem;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Products = styledComponents.div`
  overflow-y: scroll;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
`
const NoProducts = styledComponents.p`
  margin: 2rem 3rem;
`
const CheckoutButton = styledComponents(BlueButton)`
  margin-top: 1.5rem;
  width: max-content;
  margin-left: auto;
  margin-right: 0;
`

// React component
function CartModal() {
  const cartProducts = useContext(ProductsContext)
  return (cartProducts.cart.length > 0 ?
    (<Wrapper>
      <Products>
        {cartProducts.cart.map((product, i) => 
          <CartProduct key={i} product={product}/>
        )}
      </Products>
      <CheckoutButton>Buy now</CheckoutButton>
    </Wrapper>) :
    <NoProducts>Your cart is empty.</NoProducts>
  )
}

export {CartModal}