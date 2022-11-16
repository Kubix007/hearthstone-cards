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
    case "Karty standardowe": {
      return <StandardCardSet width={width} height={height} />;
    }
    case "Dzikie karty": {
      return <WildCardSet width={width} height={height} />;
    }
    case "Popioły Rubieży": {
      return <AshesOfOutland width={width} height={height} />;
    }
    case "Czarna Góra": {
      return <BlackrockMountain width={width} height={height} />;
    }
    case "Gobliny vs Gnomy": {
      return <GoblinsGnomes width={width} height={height} />;
    }
    case "Karty klasyczne": {
      return <ClassicCards width={width} height={height} />;
    }
    case "Karty bazowe": {
      return <CoreCards width={width} height={height} />;
    }
    case "Bieżące karty na Arenie": {
      return <CurrentArenaCards width={width} height={height} />;
    }
    case "Bieżące karty w Starciach": {
      return <CurrentDuelCards width={width} height={height} />;
    }
    case "Klątwa Naxxramas": {
      return <CurseOfNaxxramas width={width} height={height} />;
    }
    case "Początkujący łowca demonów": {
      return <DemonHunterInitiate width={width} height={height} />;
    }
    case "Wejście smoków": {
      return <DescentOfDragons width={width} height={height} />;
    }
    case "Zahartowani przez pustkowia": {
      return <ForgedInTheBarrens width={width} height={height} />;
    }
    case "Rozbici w Dolinie Alterak": {
      return <FracturedInAlteracValley width={width} height={height} />;
    }
    case "Przebudzenie Galakronda": {
      return <GalakrondsAwakening width={width} height={height} />;
    }
    case "Podróż do wnętrza Un'Goro": {
      return <JourneyToUngoro width={width} height={height} />;
    }
    case "Rycerze Mroźnego Tronu": {
      return <KnightsOfTheFrozenThrone width={width} height={height} />;
    }
    case "Koboldy i katakumby": {
      return <KoboldsCatacombs width={width} height={height} />;
    }
    case "Liga odkrywców": {
      return <LeagueOfExplorers width={width} height={height} />;
    }
    case "Karty historyczne": {
      return <LegacyCards width={width} height={height} />;
    }
    case "Wielki Turniej": {
      return <GrandTournament width={width} height={height} />;
    }
    case "Obłędny Festyn Lunomroku": {
      return <MadnessAtTheDarkmoonFaire width={width} height={height} />;
    }
    case "Pochód Króla Lisza": {
      return <MarchOfTheLichKing width={width} height={height} />;
    }
    case "Ciemne zaułki Gadżetonu": {
      return <MeanStreetsOfGadgetzan width={width} height={height} />;
    }
    case "Morderstwo w twierdzy Nathria": {
      return <MurderAtCastleNathria width={width} height={height} />;
    }
    case "Pewnej nocy w Karazhanie": {
      return <OneNightInKarazhan width={width} height={height} />;
    }
    case "Szlak Arthasa": {
      return <PathOfArthas width={width} height={height} />;
    }
    case "Rozróba Rastakana": {
      return <RastakhanRumble width={width} height={height} />;
    }
    case "Wyjście z cienia": {
      return <RiseOfShadows width={width} height={height} />;
    }
    case "Wybawcy Uldum": {
      return <SaviorOfUldum width={width} height={height} />;
    }
    case "Scholomancjum": {
      return <SholomanceAcademy width={width} height={height} />;
    }
    case "Projekt Hukatomba": {
      return <TheBoomsdayProject width={width} height={height} />;
    }
    case "Zjednoczeni w Wichrogrodzie": {
      return <UnitedInStormwind width={width} height={height} />;
    }
    case "Wyprawa do Zatopionego Miasta": {
      return <VoyageToTheSunkenCity width={width} height={height} />;
    }
    case "Przedwieczni Bogowie": {
      return <WhispersOfTheOldGods width={width} height={height} />;
    }
    case "Wiedźmi Las": {
      return <Witchwood width={width} height={height} />;
    }
    default: {
      return <StandardCardSet width={width} height={height} />;
    }
  }
};

export default TypeCardImage;
