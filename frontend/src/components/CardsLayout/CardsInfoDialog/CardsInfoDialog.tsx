import * as Types from "./CardsInfoDialog.types";
import * as Styles from "./CardsInfoDialog.styles";
import DialogCardPreview from "./DialogCardPreview";

const CardsInfoDialog = ({
  onClose,
  open,
  cards,
  isBrowseType,
}: Types.SimpleDialogProps) => {
  return (
    <Styles.DialogContainer fullScreen open={open}>
      <Styles.Title>
        {onClose ? (
          <Styles.CloseButton onClick={onClose}>X</Styles.CloseButton>
        ) : null}
      </Styles.Title>
      <Styles.Content>
        <DialogCardPreview isBrowseType={isBrowseType} card={cards} />
      </Styles.Content>
    </Styles.DialogContainer>
  );
};

export default CardsInfoDialog;
