import Graveyard from "./Graveyard";
import GuessForm from "./GuessForm";
import WordDisplay from "./WordDisplay";
import { useState } from "react";
import { useEffect } from "react";


const wordAPI = `https://random-word-api.vercel.app/api?words=1`

const Game = () => {
    const [letter, setLetter] = useState('');
    const [currentWord, setCurrentWord] = useState(null);
    useEffect(() => {
        const newWord = async () => {
            try {
                const response = await fetch(wordAPI);
                const word = await response.json();
                setCurrentWord(word)
            } catch (error) {
                console.log(error)
            }

        }
        newWord()
    }, []);
    return (
        <>
            <div>
                <h1>Game Component</h1>
                <GuessForm letter={letter} setLetter={setLetter} />
                <WordDisplay currentWord={currentWord} />
                <Graveyard />
            </div>

        </>
    )
};

export default Game