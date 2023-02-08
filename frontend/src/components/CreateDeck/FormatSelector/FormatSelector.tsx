import * as Styles from "./FormatSelector.styles";

const FormatSelector = () => {
  return (
    <Styles.FormatSelectorContainer
      container
      justifyContent="center"
      spacing={8}
      direction="row"
    >
      <Styles.GridItem item>
        <Styles.StandardFormatButton>
          <Styles.StandardFormatSVG />
        </Styles.StandardFormatButton>
        <Styles.FormatName>Standard</Styles.FormatName>
      </Styles.GridItem>
      <Styles.GridItem item>
        <Styles.ClassicFormatButton />
        <Styles.FormatName>Klasyczne</Styles.FormatName>
      </Styles.GridItem>
      <Styles.GridItem item>
        <Styles.WildFormatButton />
        <Styles.FormatName>Dzicz</Styles.FormatName>
      </Styles.GridItem>
    </Styles.FormatSelectorContainer>
  );
};

export default FormatSelector;
