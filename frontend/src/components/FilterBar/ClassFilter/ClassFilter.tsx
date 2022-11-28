import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import * as Styles from "./ClassFilter.style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { changeClass } from "../../../features/filter/filterSlice";

const classes = [
  {
    name: "Wszystkie klasy",
    value: "Wszystkie klasy",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_all-6964ad24bb858e15c61243fc19943c1ba8cc7d348f9bf36232587f1f5e089277e24e303a1c198e02e8adb751a86d44890ab62a1a189b9cbea3b4f17d7da3eba7.png",
  },
  {
    name: "Rycerz smierci",
    value: "deathknight",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_deathknight-854049b0f1dcdbd6f25dc4737e405ef55af29c11fdabd86c5a7d788846800510b79ccf4adac0fd0d73ef5bc3025715b04b89443ae9265cc7cc405e4dcaad0798.png",
  },
  {
    name: "Łowca demonów",
    value: "demonhunter",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_demonhunter-46494e0acadb6d525efa129b357a08308f198a758c0dd3ef0d2e7cbcbafb698b3a16b28e757b85af334679d42af7fa686987003dbc38bbc5e05d88967e513b65.png",
  },
  {
    name: "Druid",
    value: "druid",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_druid-ecb441c29d0acfcdf249d0937093ef7591c47fd5edde8378e077d6910476765be5b7a69baf96c2e46593ccea335833d642fe025d314c9094b3156450c1d6cfc8.png",
  },
  {
    name: "Łowca",
    value: "hunter",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_hunter-ef27ec5fd8d6780fed15337a45ec524b68f2de7100b210eecd4e40b36572d2c85f98fa29fe9da278ae326e4b18d157e3b5d2addc66a7ce79ae62800001dd45b6.png",
  },
  {
    name: "Mag",
    value: "mage",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_mage-1225102ed2cd41c8ce5d4eb05aae3e9a828e5c79770e1dbc380a6e37b784969506aaedb0f2a832bd9a4218b4e8c0e5ac3e148b263627f5f2c69bf5d18230109e.png",
  },
  {
    name: "Paladyn",
    value: "paladin",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_paladin-b9092f38f4a1421c5899932f765a80cf45ac73ecccb8c9bbcf67ec1d85ac8ae0f849a24b60d4fd19e8db64e2f991ba0123d210484f2ec8beb93a4a4a4a72b690.png",
  },
  {
    name: "Kapłan",
    value: "priest",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_priest-93bbc19811732f7c4d3804371c0023a1ce57497a34c68e2f5ac020c3987fb310ae2eb5c60520cfd6070b47f4d9503a67d0947cd47bcb63584b4f126c50337785.png",
  },
  {
    name: "Łotr",
    value: "rogue",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_rogue-4a04957d59d4191f9efbe5e1daaf45eb82dc5b035d2c8ce3cb47a31b145e1250c319111a27f69b066199d17f7a915777a8d1af5e0a87bab4451185cfda20fe20.png",
  },
];

const ClassFilter = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();
  const [className, setClassName] = useState({
    name: filters.class.name,
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_all-6964ad24bb858e15c61243fc19943c1ba8cc7d348f9bf36232587f1f5e089277e24e303a1c198e02e8adb751a86d44890ab62a1a189b9cbea3b4f17d7da3eba7.png",
  });

  useEffect(() => {
    setClassName({
      name: classes.filter((x) => x.name === filters.class.name)[0].value,
      image: classes.filter((x) => x.name === filters.class.name)[0].image,
    });
  }, [filters]);

  const handleChange = (event: SelectChangeEvent) => {
    const targetName = classes.filter((x) => x.value === event.target.value);
    setClassName({
      name: event.target.value,
      image: classes.filter((x) => x.value === event.target.value)[0].image,
    });
    if (event.target.value === "Wszystkie klasy") {
      event.target.value = "";
    }
    dispatch(
      changeClass({ name: targetName[0].name, value: event.target.value })
    );
  };
  return (
    <Styles.ClassFilterContainer>
      <Styles.LeftListLayout>
        <Styles.LeftListLogo
          src={className.image}
          alt="LeftListLogo"
          width="35px"
          height="35px"
        />
      </Styles.LeftListLayout>
      <Styles.SelectClass
        value={className.name}
        onChange={handleChange}
        name="class"
        input={<Styles.SelectInput />}
        MenuProps={{
          MenuListProps: {
            style: {
              background:
                "url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_middle.a5d2539fa7fc8c29fcc0a304710f97e9.png)",
            },
          },
        }}
      >
        {classes.map((item) => (
          <Styles.SelectMenuItem key={item.name} value={item.value}>
            <Styles.ClassName>{item.name}</Styles.ClassName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.ClassFilterContainer>
  );
};

export default ClassFilter;
