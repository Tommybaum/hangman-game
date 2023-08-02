import Graveyard from "./Graveyard";
import GuessForm from "./GuessForm";
import WordDisplay from "./WordDisplay";

const Game = () => {
    return (
        <>
            <h1>Game Component</h1>
            <GuessForm />
            <WordDisplay />
            <Graveyard />
        </>
    )
};

export default Game