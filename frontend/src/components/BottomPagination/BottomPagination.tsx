import * as React from "react";
import * as Styles from "./BottomPagination.styles";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { changePage } from "../../features/filter/filterSlice";

const BottomPagination = () => {
  const { pagination } = useSelector((state: RootState) => state.filter);
  const { cards } = useSelector((state: RootState) => state.cards);
  const dispatch: AppDispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(changePage({ name: `Strona: ${value}`, value }));
  };

  return (
    <Styles.Container spacing={2}>
      <Styles.PageInfo>Strona: {+pagination.page.value}</Styles.PageInfo>
      <Styles.PaginationComponent
        variant="text"
        count={cards.pageCount}
        page={+pagination.page.value}
        onChange={handleChange}
      />
    </Styles.Container>
  );
};

export default BottomPagination;
