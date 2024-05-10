import styled from "styled-components"
import { theme } from "../../../../../../theme"

export default function EmptyMenuClient() {
  return (
    <EmptyMenuStyled>
      <span className="description">Victime de notre succès !</span>
      <span className="description">De nouvelles recettes sont en cours de préparation, revenez vite !</span>
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
`
