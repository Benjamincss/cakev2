import { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu2 } from "../../../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "./Main/MainRightSide/Admin/AdminPanel/AddForm"
import Cart  from "./Navbar/Cart"



export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [menu, setMenu] = useState(fakeMenu2)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [cart, setCart] = useState([])
  

  const handleAdd = (newProduct) => {
    const menuCopy = [...menu]

    const menuUpdated = [newProduct, ...menuCopy]

    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = [...menu]

    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)

    setMenu(menuUpdated)
  }

  const handleEdit = (updatedProduct) => {
    setMenu(prevMenu => prevMenu.map(product => product.id === updatedProduct.id ? { ...updatedProduct } : product));
  }

  const resetMenu = () => {
    setMenu(fakeMenu2)
  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleEdit, 
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    cart,


    

    addToCart: (product) => {
      setCart((prevCart) => {
        const productExists = prevCart.find((p) => p.id === product.id);
    
        if (productExists) {
          return prevCart.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    },
    removeFromCart: (productId) => {
      setCart((prevCart) => {
        return prevCart.reduce((acc, product) => {
          if (product.id === productId) {
            if (product.quantity > 1) {
              acc.push({ ...product, quantity: product.quantity - 1 });
            }
          } else {
            acc.push(product);
          }
          return acc;
        }, []);
      });
    }

    


    
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Cart />
          <Main />
        </div>

      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
