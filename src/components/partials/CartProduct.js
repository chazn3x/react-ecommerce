import { useContext } from "react"
import styledComponents from "styled-components"
import { ProductsContext } from "../../App"
import { OreangeButton } from "../commons/buttons"

// Styled components
const CartProductCard = styledComponents.div`
display: flex;
align-items: center;
margin-bottom: 2rem;
`
const ProductImage = styledComponents.img`
width: 80px;
margin-right: 2rem;
`
const ProductInfo = styledComponents.div`

`
const ProductName = styledComponents.h4`
  margin-bottom: .5rem;
`
const Price = styledComponents.span`
  font-size: 1.3rem;
  vertical-align: middle;
`
const Discount = styledComponents.span`
  color: rgb(88, 92, 204);
  background-color: rgba(88, 92, 204, .3);
  margin-left: .5rem;
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
const RemoveButton = styledComponents(OreangeButton)`
  margin-left auto;
  margin-right: 0;
  min-width: max-content;
`

// React component
function CartProduct(props) {
  const cartProducts = useContext(ProductsContext)
  let price = (props.product.price).toFixed(2)
  let oldPrice
  if (props.product.discount) {
    oldPrice = price
    price = (price - ((price / 100) * props.product.discount)).toFixed(2)
  }
  return (
    <CartProductCard>
      <ProductImage src={require(`../../assets/img/${props.product.image}`)}/>
      <ProductInfo>
        <ProductName>
          {props.product.name}
        </ProductName>
        <Price>${price}</Price>
        {props.product.discount > 0 &&
          <>
            <Discount>{props.product.discount}%</Discount>
            <OldPrice>${oldPrice}</OldPrice>
          </>
        }
      </ProductInfo>
      <RemoveButton onClick={() => cartProducts.updateCart(props.product)}>Remove</RemoveButton>
    </CartProductCard>
  )
}

export {CartProduct}