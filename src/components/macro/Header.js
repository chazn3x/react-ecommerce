import styledComponents from "styled-components"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { GreyButton } from "../commons/buttons"
import { ModalContext } from "../commons/Modal"
import { useContext } from "react"
import { ProductsContext } from "../../App"
import { CartModal } from "../partials/CartModal"

// Styled components
const HeaderWrapper = styledComponents.header`
  width: 100%;
  height: 80px;
  background-color: rgb(250,250,250);
  padding: 0 1rem;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 .2rem .2rem rgba(0,0,0,.1);
`
const Title = styledComponents.h1`
  color: black;
  font-weight: 100
`
const Green = styledComponents.span`color: rgb(33, 193, 139)`
const CartButton = styledComponents(GreyButton)`
  background-color: ${props => props.length > 0 ? 'rgb(88, 92, 204)' : ''};
  color: ${props => props.length > 0 ? 'white' : ''};
`
const CartProducts = styledComponents.span`
  margin-right: 1rem
`
const CartIcon = styledComponents(FontAwesomeIcon).attrs({icon: faCartShopping})`
  font-size: 1.5rem
`

// React component
function Header() {
  const cartProducts = useContext(ProductsContext)
  const modal = useContext(ModalContext)
  return (
    <HeaderWrapper>
      <Title><Green>Altruistic</Green> eCommerce</Title>
      <CartButton onClick={() => modal.openClose(<CartModal/>)} length={cartProducts.cart.length}>
        <CartProducts>{cartProducts.cart.length > 0 ? `${cartProducts.cart.length} product${cartProducts.cart.length > 1 ? 's' : ''} in your cart` : 'Your cart is empty'}</CartProducts>
        <CartIcon/>
      </CartButton>
    </HeaderWrapper>
  )
}

export {Header}