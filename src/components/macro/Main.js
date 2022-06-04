import styledComponents from "styled-components"
import { ProductsPage } from "../partials/ProductsPage"
import { Sidebar } from "../partials/Sidebar"

// Styled components
const MainWrapper = styledComponents.main`
  display: flex;
`

// React component
function Main() {
  return (
    <MainWrapper>
      <Sidebar/>
      <ProductsPage/>
    </MainWrapper>
  )
}

export {Main}