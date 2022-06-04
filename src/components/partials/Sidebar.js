import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import styledComponents from "styled-components"
import { ProductsContext } from "../../App"

// Styled components
const SidebarWrapper = styledComponents.div`
  position: sticky;
  top: 80px;
  left: 0;
  width: 300px;
  height: calc(100vh - 80px);
  background: rgba(220,220,220,.5);
  box-shadow: .2rem 0 .2rem rgba(0,0,0,.1);
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  z-index: 2;
`
const Category = styledComponents.div`
  cursor: pointer;
  padding: 1rem;
  border-bottom: 1px solid lightgrey;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: rgba(255,255,255,.5)
  }
`
const Minus = styledComponents(FontAwesomeIcon).attrs({icon: faMinus})`
  font-size: .7rem;
`
const Plus = styledComponents(Minus).attrs({icon: faPlus})``

// React component
function Sidebar() {
  const context = useContext(ProductsContext)
  return (
    <SidebarWrapper>
      {context.categories.map(category => (
        <Category key={category} onClick={() => context.filterCategory(category)}>
          {category}
          {context.filteredCategories.includes(category) ? <Minus/> : <Plus/>}
        </Category>
      ))}
    </SidebarWrapper>
  )
}

export {Sidebar}