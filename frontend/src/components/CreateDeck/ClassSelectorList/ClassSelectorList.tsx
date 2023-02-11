import ClassSelector from "../ClassSelector/ClassSelector";
import * as Styles from "./ClassSelectorList.styles";
import * as Types from "./ClassSelectorList.types";
import { Grid } from "@mui/material";

const allClasses = [
  {
    isNotClassic: true,
    name: "deathknight",
    displayName: "Rycerz śmierci",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_deathknight-877876336b73f9f34a4fb35929614b77c8743310aed55a6981db2e02f0b4c48a595a5428f00036d1972cf955c70e8709b196a82fe8d3391e4fc99046f215db4f.png",
  },
  {
    isNotClassic: true,
    name: "demonhunter",
    displayName: "Łowca demonów",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_demonhunter-0c117e1eb40c92f3156352ef3b07de82321bb8dc4ea6629445beef3722aa4c623257a803b71f511bdf8e3734586abf4f68eb5975708b4d2e76f27cbed8b38f72.png",
  },
  {
    isNotClassic: false,
    name: "druid",
    displayName: "Druid",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_druid-617a7e9ddd3ccb801cc5de8e8896ac2243d16dfe0063ee735e86b093bd8cec4d123bd5945b0bfe3150c968904b3dd2b3e8ec9337dce59e937dabbaa6692e716c.png",
  },
  {
    isNotClassic: false,
    name: "hunter",
    displayName: "Łowca",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_hunter-704bdf9b2198c0ab867edd71df4cd5221c14d40199bac0ce43fdc90be9e0ed25178cecb2fbd795ff42478251db97903e63e365a6d446f3a9f12aea9093a6c575.png",
  },
  {
    isNotClassic: false,
    name: "mage",
    displayName: "Mag",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_mage-d1cbb187de507978f25cf95e54e357660819979baa01de215c0c1aa30964c2befa740cdff4ea812b29d81b1b5d89d8697c8e9ee3f47596671ba3f3e3e0f9e5dd.png",
  },
  {
    isNotClassic: false,
    name: "paladin",
    displayName: "Paladyn",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_paladin-f9de941bd0f39e204d4defeea0a0c1e626adfc3b4156324837adaa665d51cc45f1c97316aa654c165288d5facb624b341de9ca05e1ec5dd5b2cb17fa4de6cbee.png",
  },
  {
    isNotClassic: false,
    name: "priest",
    displayName: "Kapłan",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_priest-c7046e19996b87e2c6b6700b63565ee07c921ccce37fbe8b2e3b3913a95f04353e80a4118e9893dee29682e319b5ee893e07700476d7be5e16ed465dd8bca58d.png",
  },
  {
    isNotClassic: false,
    name: "rogue",
    displayName: "Łotr",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_rogue-3f3a2a2dea07c21da713c9ff70dbba65df408fc7cd8bae41892000be39710a1d16770c5b3aa4b44521f83191ac5ca3308c1ba312ffc568b1c7a7e7e8ad47a9c7.png",
  },
  {
    isNotClassic: false,
    name: "shaman",
    displayName: "Szaman",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_shaman-2b270028958eeb0dacc67ce4b4b8de9750391edb3fbe7fc33a11fb0c8a3cd70c0a0dcffc5b946f51cc63c1ba262efaa041893a01225591c75178579d13be16fb.png",
  },
  {
    isNotClassic: false,
    name: "warlock",
    displayName: "Czarnoksiężnik",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_warlock-3db872b8621aac7750ee4f6b9a27509e5548a52d7b87f7c477515ad615863e7977a44179367378b93fa907983ae053184eeeda019f3a658adb0f5428c545a611.png",
  },
  {
    isNotClassic: false,
    name: "warrior",
    displayName: "Wojownik",
    image:
      "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_big_warrior-e7f6b014158051c3b6f03af80448f5a312351594e0084d78c95f780eadbd897a9f7c7d828e278ea4bedaefe0addf1f99da43c2be4a63b4d659fd86427f61391f.png",
  },
];

const ClassSelectorList = ({ selectedFormat }: Types.Props) => {
  return (
    <Styles.Container
      container
      justifyContent="center"
      direction="row"
      spacing={2}
    >
      {allClasses.map((item) => (
        <Grid item key={item.name}>
          <ClassSelector classInfo={item} selectedFormat={selectedFormat} />
        </Grid>
      ))}
    </Styles.Container>
  );
};

export default ClassSelectorList;
