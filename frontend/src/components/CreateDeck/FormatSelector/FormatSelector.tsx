import * as Styles from "./FormatSelector.styles";
import * as Types from "./FormatSelector.types";

const FormatSelector = ({ setSelectedFormat }: Types.Props) => {
  const handleClick = (event: any) => {
    switch (event.target.name) {
      case "standard":
        setSelectedFormat({ standard: true, classic: false, wild: false });
        break;
      case "classic":
        setSelectedFormat({
          standard: false,
          classic: true,
          wild: false,
        });
        break;
      case "wild":
        setSelectedFormat({
          standard: false,
          classic: false,
          wild: true,
        });
        break;
      default:
        setSelectedFormat({
          standard: true,
          classic: false,
          wild: false,
        });
        break;
    }
    //Get all format selectors
    const formatSelectors = [
      Array.from(document.getElementsByClassName("formatSelector")),
    ];
    //Remove class 'selected-format' in all format selectors
    formatSelectors[0].forEach((item) =>
      item.setAttribute(
        "class",
        `${item?.getAttribute("class")!}`
          .replace("selected-format", "")
          .trimEnd()
      )
    );
    //Get selected format
    const selectedFormat = formatSelectors[0].filter(
      (item) => item.getAttribute("name") === event.target.name
    );
    //Update class for selected format
    selectedFormat[0].setAttribute(
      "class",
      `${selectedFormat[0].getAttribute("class")!} selected-format`
    );
  };

  return (
    <Styles.FormatSelectorContainer
      container
      justifyContent="center"
      spacing={8}
      direction="row"
    >
      <Styles.GridItem item>
        <Styles.StandardFormatButton
          onClick={handleClick}
          className="formatSelector selected-format"
          name="standard"
          id="standard-format"
        />
        <Styles.FormatName>Standard</Styles.FormatName>
      </Styles.GridItem>
      <Styles.GridItem item>
        <Styles.ClassicFormatButton
          onClick={handleClick}
          className="formatSelector"
          name="classic"
          id="classic-format"
        />
        <Styles.FormatName>Klasyczne</Styles.FormatName>
      </Styles.GridItem>
      <Styles.GridItem item>
        <Styles.WildFormatButton
          onClick={handleClick}
          className="formatSelector"
          name="wild"
          id="wild-format"
        />
        <Styles.FormatName>Dzicz</Styles.FormatName>
      </Styles.GridItem>
    </Styles.FormatSelectorContainer>
  );
};

export default FormatSelector;
