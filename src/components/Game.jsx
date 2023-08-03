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
                setCurrentWord(word[0])
            } catch (error) {
                console.log(error)
            }

        }
        newWord()
    }, []);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        
        //console.log(currentWord)
        //console.log(letter)
        let check = currentWord.includes(letter)
        console.log(check)
        alert(check ? "Correct!" : "Wrong!")
    }
   
    return (
        <>
            <div>
                <h1>Game Component</h1>
                <GuessForm 
                formSubmitHandler={formSubmitHandler}
                letter={letter} setLetter={setLetter} />
                <WordDisplay currentWord={currentWord} />
                <Graveyard />
            </div>

        </>
    )
};

export default Game