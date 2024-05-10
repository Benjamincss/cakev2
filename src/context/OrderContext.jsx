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
  setNewProduct: () => {},
})
