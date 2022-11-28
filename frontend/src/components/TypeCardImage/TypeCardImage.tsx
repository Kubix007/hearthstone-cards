import { ReactComponent as StandardCardSet } from "../../img/TypeCardsImg/StandardCards.svg";
import { ReactComponent as WildCardSet } from "../../img/TypeCardsImg/WildCards.svg";
import { ReactComponent as AshesOfOutland } from "../../img/TypeCardsImg/AshesOfOutland.svg";
import { ReactComponent as BlackrockMountain } from "../../img/TypeCardsImg/BlackrockMountain.svg";
import { ReactComponent as GoblinsGnomes } from "../../img/TypeCardsImg/GoblinsGnomes.svg";
import { ReactComponent as ClassicCards } from "../../img/TypeCardsImg/ClassicCards.svg";
import { ReactComponent as CoreCards } from "../../img/TypeCardsImg/CoreCards.svg";
import { ReactComponent as CurrentArenaCards } from "../../img/TypeCardsImg/CurrentArenaCards.svg";
import { ReactComponent as CurrentDuelCards } from "../../img/TypeCardsImg/CurrentDuelCards.svg";
import { ReactComponent as CurseOfNaxxramas } from "../../img/TypeCardsImg/CurseOfNaxxramas.svg";
import { ReactComponent as DemonHunterInitiate } from "../../img/TypeCardsImg/DemonHunterInitiate.svg";
import { ReactComponent as DescentOfDragons } from "../../img/TypeCardsImg/DescentOfDragons.svg";
import { ReactComponent as ForgedInTheBarrens } from "../../img/TypeCardsImg/ForgedInTheBarrens.svg";
import { ReactComponent as FracturedInAlteracValley } from "../../img/TypeCardsImg/FracturedInAlteracValley.svg";
import { ReactComponent as GalakrondsAwakening } from "../../img/TypeCardsImg/GalakrondsAwakening.svg";
import { ReactComponent as GrandTournament } from "../../img/TypeCardsImg/GrandTournament.svg";
import { ReactComponent as JourneyToUngoro } from "../../img/TypeCardsImg/JourneyToUngoro.svg";
import { ReactComponent as KnightsOfTheFrozenThrone } from "../../img/TypeCardsImg/KnightsOfTheFrozenThrone.svg";
import { ReactComponent as KoboldsCatacombs } from "../../img/TypeCardsImg/KoboldsCatacombs.svg";
import { ReactComponent as LeagueOfExplorers } from "../../img/TypeCardsImg/LeagueOfExplorers.svg";
import { ReactComponent as LegacyCards } from "../../img/TypeCardsImg/LegacyCards.svg";
import { ReactComponent as MadnessAtTheDarkmoonFaire } from "../../img/TypeCardsImg/MadnessAtTheDarkmoonFaire.svg";
import { ReactComponent as MarchOfTheLichKing } from "../../img/TypeCardsImg/MarchOfTheLichKing.svg";
import { ReactComponent as MeanStreetsOfGadgetzan } from "../../img/TypeCardsImg/MeanStreetsOfGadgetzan.svg";
import { ReactComponent as MurderAtCastleNathria } from "../../img/TypeCardsImg/MurderAtCastleNathria.svg";
import { ReactComponent as OneNightInKarazhan } from "../../img/TypeCardsImg/OneNightInKarazhan.svg";
import { ReactComponent as PathOfArthas } from "../../img/TypeCardsImg/PathOfArthas.svg";
import { ReactComponent as RastakhanRumble } from "../../img/TypeCardsImg/RastakhanRumble.svg";
import { ReactComponent as RiseOfShadows } from "../../img/TypeCardsImg/RiseOfShadows.svg";
import { ReactComponent as SaviorOfUldum } from "../../img/TypeCardsImg/SaviorOfUldum.svg";
import { ReactComponent as SholomanceAcademy } from "../../img/TypeCardsImg/ScholomanceAcademy.svg";
import { ReactComponent as TheBoomsdayProject } from "../../img/TypeCardsImg/TheBoomsdayProject.svg";
import { ReactComponent as UnitedInStormwind } from "../../img/TypeCardsImg/UnitedInStormwind.svg";
import { ReactComponent as VoyageToTheSunkenCity } from "../../img/TypeCardsImg/VoyageToTheSunkenCity.svg";
import { ReactComponent as WhispersOfTheOldGods } from "../../img/TypeCardsImg/WhispersOfTheOldGods.svg";
import { ReactComponent as Witchwood } from "../../img/TypeCardsImg/Witchwood.svg";
import { Props } from "./TypeCardImage.types";

const TypeCardImage = ({ svgImageName, width, height }: Props) => {
  switch (svgImageName) {
    case "standard": {
      return <StandardCardSet width={width} height={height} />;
    }
    case "wild": {
      return <WildCardSet width={width} height={height} />;
    }
    case "ashes-of-outland": {
      return <AshesOfOutland width={width} height={height} />;
    }
    case "blackrock-mountain": {
      return <BlackrockMountain width={width} height={height} />;
    }
    case "goblins-vs-gnomes": {
      return <GoblinsGnomes width={width} height={height} />;
    }
    case "classic-cards": {
      return <ClassicCards width={width} height={height} />;
    }
    case "core": {
      return <CoreCards width={width} height={height} />;
    }
    case "arena": {
      return <CurrentArenaCards width={width} height={height} />;
    }
    case "duels": {
      return <CurrentDuelCards width={width} height={height} />;
    }
    case "naxxramas": {
      return <CurseOfNaxxramas width={width} height={height} />;
    }
    case "demonhunter-initiate": {
      return <DemonHunterInitiate width={width} height={height} />;
    }
    case "descent-of-dragons": {
      return <DescentOfDragons width={width} height={height} />;
    }
    case "forged-in-the-barrens": {
      return <ForgedInTheBarrens width={width} height={height} />;
    }
    case "fractured-in-alterac-valley": {
      return <FracturedInAlteracValley width={width} height={height} />;
    }
    case "galakronds-awakening": {
      return <GalakrondsAwakening width={width} height={height} />;
    }
    case "journey-to-ungoro": {
      return <JourneyToUngoro width={width} height={height} />;
    }
    case "knights-of-the-frozen-throne": {
      return <KnightsOfTheFrozenThrone width={width} height={height} />;
    }
    case "kobolds-and-catacombs": {
      return <KoboldsCatacombs width={width} height={height} />;
    }
    case "league-of-explorers": {
      return <LeagueOfExplorers width={width} height={height} />;
    }
    case "legacy": {
      return <LegacyCards width={width} height={height} />;
    }
    case "the-grand-tournament": {
      return <GrandTournament width={width} height={height} />;
    }
    case "madness-at-the-darkmoon-faire": {
      return <MadnessAtTheDarkmoonFaire width={width} height={height} />;
    }
    case "march-of-the-lich-king": {
      return <MarchOfTheLichKing width={width} height={height} />;
    }
    case "mean-streets-of-gadgetzan": {
      return <MeanStreetsOfGadgetzan width={width} height={height} />;
    }
    case "murder-at-castle-nathria": {
      return <MurderAtCastleNathria width={width} height={height} />;
    }
    case "one-night-in-karazhan": {
      return <OneNightInKarazhan width={width} height={height} />;
    }
    case "path-of-arthas": {
      return <PathOfArthas width={width} height={height} />;
    }
    case "rastakhans-rumble": {
      return <RastakhanRumble width={width} height={height} />;
    }
    case "rise-of-shadows": {
      return <RiseOfShadows width={width} height={height} />;
    }
    case "saviors-of-uldum": {
      return <SaviorOfUldum width={width} height={height} />;
    }
    case "scholomance-academy": {
      return <SholomanceAcademy width={width} height={height} />;
    }
    case "the-boomsday-project": {
      return <TheBoomsdayProject width={width} height={height} />;
    }
    case "united-in-stormwind": {
      return <UnitedInStormwind width={width} height={height} />;
    }
    case "voyage-to-the-sunken-city": {
      return <VoyageToTheSunkenCity width={width} height={height} />;
    }
    case "whispers-of-the-old-gods": {
      return <WhispersOfTheOldGods width={width} height={height} />;
    }
    case "the-witchwood": {
      return <Witchwood width={width} height={height} />;
    }
    default: {
      return <StandardCardSet width={width} height={height} />;
    }
  }
};

export default TypeCardImage;
