import * as Types from "./CardsInfoPopover.types";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import CardsInfoModal from "../CardsInfoModal";
import * as Styles from "./CardsInfoPopover.styles";

const CardsInfoPopover = ({
  anchorEl,
  setAnchorEl,
  handlePopoverClose,
  handlePopoverOpen,
  keywordsIds,
}: Types.Props) => {
  const open = Boolean(anchorEl);
  const { metadata } = useSelector((state: RootState) => state.metadata);
  let results = null;

  (() => {
    if (keywordsIds) {
      results = metadata.keywords.filter((keyword) =>
        keywordsIds.includes(keyword.id)
      );
    }
  })();
  return (
    <div>
      <Styles.PopoverContainer
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
      >
        {results
          ? results.map((result) => (
              <CardsInfoModal
                key={result.id}
                description={result.text}
                title={result.name}
              />
            ))
          : null}
      </Styles.PopoverContainer>
    </div>
  );
};

export default CardsInfoPopover;
