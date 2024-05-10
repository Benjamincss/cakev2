import styled from "styled-components"
import { theme } from "../../../../../../theme"
import Button from "../../../../../reusable-ui/Button"

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuStyled>
      <span className="description">Il n'y a plus de produits disponibles ?</span>
      <span className="description">Cliquez ci-dessous pour les réinitialiser</span>
      <Button label={"Générer de nouveaux produits"} onClick={onReset} />
    </EmptyMenuStyled>
  )
}

const EmptyMenuStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  .description {
    text-align: center;
    font-family: "Pacifico", sans-serif;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
  }

  button {
    margin-top: 30px;
    font-size: ${theme.fonts.size.XS};
    width: auto;
  }
`
