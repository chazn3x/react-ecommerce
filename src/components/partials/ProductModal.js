import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import styledComponents from "styled-components"
import { ProductsContext } from "../../App"
import { BlueButton } from "../commons/buttons"


// Styled components
const Wrapper = styledComponents.div`
  display: flex;
  align-items: center;
  width: 800px;
  min-height: 500px;
  padding: 2rem;
`
const ProductImageWrapper = styledComponents.div`
  width: 50%;
  padding-right: 1.5rem;
`
const ProductImage = styledComponents.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`
const ProductInfoWrapper = styledComponents.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
`
const Brand = styledComponents.h3`
  color: rgb(33, 193, 139);
  text-transform: uppercase;
  font-weight: 200;
  margin-bottom: 1rem;
`
const Name = styledComponents.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`
const Description = styledComponents.p`
  font-size: .9rem;
  letter-spacing: 1px;
  color: grey;
`
const PriceWrapper = styledComponents.div`
  margin: 1.5rem 0;
`
const Price = styledComponents.span`
  font-size: 1.3rem;
  font-weight: 600;
  vertical-align: middle;
`
const Discount = styledComponents.span`
  color: rgb(88, 92, 204);
  background-color: rgba(88, 92, 204, .3);
  margin-left: 1rem;
  font-size: .8rem;
  padding: .2rem;
  border-radius: .3rem;
  vertical-align: middle;
  font-weight: 600;
`
const OldPrice = styledComponents.span`
  display: block;
  margin-top: .5rem;
  color: grey;
  text-decoration: line-through;
`
const CartButton = styledComponents(BlueButton)`
  width: max-content;
  padding: 1rem 2rem;
  font-weight: 600;
`
const CartIcon = styledComponents(FontAwesomeIcon).attrs({icon: faCartShopping})`
  margin-right: .5rem;
`

// React component
function ProductModal(props) {
  const cartProducts = useContext(ProductsContext)
  let price = (props.product.price).toFixed(2)
  let oldPrice
  if (props.product.discount) {
    oldPrice = price
    price = (price - ((price / 100) * props.product.discount)).toFixed(2)
  }
  return (
    <Wrapper>
      <ProductImageWrapper>
        <ProductImage src={require(`../../assets/img/${props.product.image}`)}/>
      </ProductImageWrapper>
      <ProductInfoWrapper>
        <Brand>
          {props.product.brand}
        </Brand>
        <Name>
          {props.product.name}
        </Name>
        <Description>
          {props.product.description}
        </Description>
        <PriceWrapper>
          <Price>${price}</Price>
          {props.product.discount > 0 &&
            <>
              <Discount>{props.product.discount}%</Discount>
              <OldPrice>${oldPrice}</OldPrice>
            </>
          }
        </PriceWrapper>
        <CartButton onClick={() => cartProducts.updateCart(props.product)}>
          <CartIcon/>
          {cartProducts.cart.includes(props.product) ? 'Remove from cart' : 'Add to cart'}
        </CartButton>
      </ProductInfoWrapper>
    </Wrapper>
  )
}

export {ProductModal}