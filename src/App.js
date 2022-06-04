import React, { useState } from "react"
import { Header } from "./components/macro/Header"
import { Main } from "./components/macro/Main"
import { Modal, ModalContext } from "./components/commons/Modal"
import allProducts from './data/products.json'

// Products context
const ProductsContext = React.createContext()

function App() {
  // Modal
  const [modal, setModal] = useState({opened: false, content: '', openClose})
  function openClose(content) {
    setModal(modal => ({...modal, content, opened: !modal.opened}))
  }
  // Products
  const [productsState, setProducts] = useState({
    filteredProducts: allProducts,
    categories: allProducts.map(category => category.name),
    filteredCategories: allProducts.map(category => category.name),
    filterCategory,
    cart: [],
    updateCart
  })
  function filterCategory(category) {
    const filteredCategories = productsState.filteredCategories
    if (!filteredCategories.includes(category)) {
      filteredCategories.push(category)
    } else {
      const i = filteredCategories.indexOf(category)
      filteredCategories.splice(i, 1)
    }
    setProducts(state => ({
      ...state,
      filteredCategories: filteredCategories,
      filteredProducts: allProducts.filter(category => (
        state.filteredCategories.includes(category.name)
      ))
    }))
  }
  function updateCart(product) {
    const oldCart = productsState.cart
    if (!oldCart.includes(product)) {
      oldCart.push(product)
    } else {
      const i = oldCart.indexOf(product)
      oldCart.splice(i, 1)
    }
    setProducts(state => ({
      ...state,
      cart: oldCart
    }))
  }
  // Render
  return (
    <ProductsContext.Provider value={productsState}>
      <ModalContext.Provider value={modal}>
        <Header/>
        <Main/>
        <Modal/>
      </ModalContext.Provider>
    </ProductsContext.Provider>
  )
}

export {App, ProductsContext}