import * as Styles from "./FormatSelector.styles";

const FormatSelector = () => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //let manaCost = (event.target as HTMLButtonElement).value;
    let button = document.getElementById(
      (event.target as HTMLButtonElement).id
    );
    console.log(button);
    if (button?.getAttribute("id") === "standard-format-svg") {
      button = document.getElementById("standard-format");
    }
    if (button?.getAttribute("class")?.includes("selected-format")) {
      button?.setAttribute(
        "class",
        `${button?.getAttribute("class")!}`
          .replace("selected-format", "")
          .trimEnd()
      );
      //dispatch(reduceManaCost(manaCost));
    } else {
      button?.setAttribute(
        "class",
        `${button?.getAttribute("class")!} selected-format`
      );
      //dispatch(addManaCost(manaCost));
    }
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
          id="standard-format"
        />
        <Styles.FormatName>Standard</Styles.FormatName>
      </Styles.GridItem>
      <Styles.GridItem item>
        <Styles.ClassicFormatButton onClick={handleClick} id="classic-format" />
        <Styles.FormatName>Klasyczne</Styles.FormatName>
      </Styles.GridItem>
      <Styles.GridItem item>
        <Styles.WildFormatButton onClick={handleClick} id="wild-format" />
        <Styles.FormatName>Dzicz</Styles.FormatName>
      </Styles.GridItem>
    </Styles.FormatSelectorContainer>
  );
};

export default FormatSelector;
