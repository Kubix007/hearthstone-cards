import DeckList from "../DeckList/DeckList";
import * as Styles from "./DeckListDrawer.styles";
import * as Types from "./DeckListDrawer.types";

const DeckListDrawer = ({ $isShowed: isShowed, setIsShowed }: Types.IProps) => {
  const toggleDrawer = () => {
    setIsShowed(!isShowed);
  };
  return (
    <Styles.Drawer
      anchor="right"
      open={isShowed}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <DeckList />
    </Styles.Drawer>
  );
};

export default DeckListDrawer;
