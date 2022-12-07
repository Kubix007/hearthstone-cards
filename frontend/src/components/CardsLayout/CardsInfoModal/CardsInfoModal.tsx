import { Popover, Typography } from "@mui/material";
import React from "react";
import * as Types from "./CardsInfoModal.types";

const CardsInfoModal = ({
  anchorEl,
  setAnchorEl,
  handlePopoverClose,
  handlePopoverOpen,
  text,
}: Types.Props) => {
  const open = Boolean(anchorEl);

  return (
    <div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{text}</Typography>
      </Popover>
    </div>
  );
};

export default CardsInfoModal;
