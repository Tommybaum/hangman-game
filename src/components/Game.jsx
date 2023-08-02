import Graveyard from "./Graveyard";
import GuessForm from "./GuessForm";
import WordDisplay from "./WordDisplay";
import { useState } from "react";
import { useEffect } from "react";
const wordAPI = `https://random-word-api.herokuapp.com/word?lang=en`
const Game = () => {


    const [currentWord, setCurrentWord] = useState(null);
    useEffect(() => {
        const newWord = async () => {
            const response = await fetch(wordAPI);
            const word = await response.json();
            setCurrentWord(word)
        }
        newWord()
    }, []);
    return (
        <>
            <div>
                <h1>Game Component</h1>
                <GuessForm />
                <WordDisplay currentWord={currentWord} />
                <Graveyard />
            </div>

        </>
    )
};

export default Game