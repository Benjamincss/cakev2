import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext"
import { theme } from "../../../../../../theme"
import { formatPrice } from "../../../../../../utils/maths"
import CardComponent from "../../../../../reusable-ui/Card"
import EmptyMenuAdmin from "./EmptyMenuAdmin"
import EmptyMenuClient from "./EmptyMenuClient"

const IMAGE_BY_DEFAULT = "/images/cupcake-item.png";

export default function Menu() {
  const { menu, isModeAdmin, handleDelete, resetMenu, setNewProduct  } = useContext(OrderContext);

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetMenu} />
  }

  return (
    <MenuStyled className="menu">
    {menu.map((product) => {
      return (
        <CardComponent
          key={product.id}
          title={product.title}
          imageSource={product.imageSource ? product.imageSource : IMAGE_BY_DEFAULT}
          leftDescription={formatPrice(product.price)}
          hasDeleteButton={isModeAdmin}
          onDelete={() => handleDelete(product.id)}
          onEditClick={() => setNewProduct(product)}
        />
      )
    })}
  </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`