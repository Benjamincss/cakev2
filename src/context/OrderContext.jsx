import { createContext } from "react"

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  order: [],
  handleAdd: () => {},
  handleDelete: () => { },
  handleEdit: () => { },
  resetOrder: () => {},

  newProduct: [],
  setNewProduct: () => { },
  
  cart: [],
  addToCart: (product) => {
    setCart((prevCart) => [...prevCart, product]);
  },
  removeFromCart: (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  },
})
