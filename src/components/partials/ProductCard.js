import { useContext } from "react"
import styledComponents from "styled-components"
import {  ModalContext } from "../commons/Modal"
import { ProductModal } from "./ProductModal"

// Styled components
const CardWrapper = styledComponents.div`
  flex-shrink: 0;
  width: 190px;
  margin: 0 1rem;
  cursor: pointer;
`
const ProductImage = styledComponents.img`
  width: 100%;
  margin-bottom: 1rem;
`
const ProductName = styledComponents.h5`
  font-size: 1.1rem;
  margin-bottom: .7rem;
`
const Price = styledComponents.span`
  font-size: 1.5rem;
  vertical-align: middle;
`
const OldPrice = styledComponents.span`
  margin-left: .5rem;
  color: grey;
  text-decoration: line-through;
  vertical-align: middle;
`

// React component
function ProductCard(props) {
  const modal = useContext(ModalContext)
  let price = (props.product.price).toFixed(2)
  let oldPrice
  if (props.product.discount) {
    oldPrice = price
    price = (price - ((price / 100) * props.product.discount)).toFixed(2)
  }
  return (
    <>
      <CardWrapper onClick={() => modal.openClose(<ProductModal product={props.product}/>)}>
        <ProductImage src={require(`../../assets/img/${props.product.image}`)}/>
        <ProductName>
          {props.product.name}
        </ProductName>
        <Price>${price}</Price>
        {props.product.discount > 0 &&
          <OldPrice>${oldPrice}</OldPrice>
        }
      </CardWrapper>
    </>
  )
}

export {ProductCard}