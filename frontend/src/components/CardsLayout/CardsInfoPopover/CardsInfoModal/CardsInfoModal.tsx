import * as Styles from "./CardsInfoModal.styles";
import * as Types from "./CardsInfoModal.types";

const CardsInfoModal = ({ description, title }: Types.Props) => {
  return (
    <Styles.ModalContainer>
      <Styles.TopBorder />
      <Styles.TextWrapper>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>
      </Styles.TextWrapper>
      <Styles.BottomBorder />
    </Styles.ModalContainer>
  );
};

export default CardsInfoModal;
