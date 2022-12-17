import { SelectChangeEvent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { changePage } from "../../features/filter/filterSlice";
import * as Styles from "./Pagination.styles";

const Pagination = () => {
  const { cards } = useSelector((state: RootState) => state.cards);
  const { pagination } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();

  let pageNumber: { name: string; value: string }[] = [];
  for (let i = 1; i <= cards.pageCount; i++) {
    pageNumber.push({
      name: `Strona: ${i}`,
      value: `${i}`,
    });
  }

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value;
    const targetName = pageNumber.filter((x: any) => x.value === `${value}`);
    dispatch(changePage({ name: targetName[0].name, value: value }));
  };

  if (pageNumber.length > 0) {
    return (
      <Styles.Container container justifyContent="flex-end">
        <Styles.InfoLabel>Strona:</Styles.InfoLabel>
        <Styles.LeftListLayout />
        <Styles.SelectClass
          value={pagination.page.value}
          onChange={handleChange}
          input={<Styles.SelectInput />}
          MenuProps={{
            MenuListProps: {
              style: {
                maxWidth: 300,
                maxHeight: 200,
                background:
                  "url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_middle.a5d2539fa7fc8c29fcc0a304710f97e9.png)",
              },
            },
          }}
        >
          {pageNumber.map((item: any) => (
            <Styles.SelectMenuItem key={item.name} value={item.value}>
              <Styles.SelectName>{item.name}</Styles.SelectName>
            </Styles.SelectMenuItem>
          ))}
        </Styles.SelectClass>
        <Styles.RightListLayout />
      </Styles.Container>
    );
  } else {
    return null;
  }
};

export default Pagination;
