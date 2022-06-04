import { useContext } from "react"
import styledComponents from "styled-components"
import { ProductsContext } from "../../App"
import { ProductCard } from "./ProductCard"

// Styled components
const Wrapper = styledComponents.div`
  width: 100%;
  padding: 1rem;
  overflow-x: hidden;
`
const CategorySection = styledComponents.section`
  padding-bottom: 2rem;
`
const CategoryTitle = styledComponents.h2`
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 500;
`
const ProductsSlider = styledComponents.div`
  display: flex;
  align-items: baseline;
  overflow-x: scroll;
  width: 100%;
`
const NoProducts = styledComponents.p`
  text-align: center;
  margin-top: 5rem;
  font-size: 1.5rem;
`

// React component
function ProductsPage() {
  const filteredProducts = useContext(ProductsContext).filteredProducts
  return (
    <Wrapper>
      {filteredProducts.length > 0 ? 
        filteredProducts.map((category, i) => (
          <CategorySection key={i}>
            <CategoryTitle>{category.name}</CategoryTitle>
            <ProductsSlider>
              {category.products.map(product => (
                <ProductCard key={product.name} product={product}/>
              ))}
            </ProductsSlider>
          </CategorySection>
        )) : 
        <NoProducts>No category selected.</NoProducts>
      }
    </Wrapper>
  )
}

export {ProductsPage}