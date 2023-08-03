import Graveyard from "./Graveyard";
import GuessForm from "./GuessForm";
import WordDisplay from "./WordDisplay";
import { useState } from "react";
import { useEffect } from "react";


const wordAPI = `https://random-word-api.vercel.app/api?words=1`

const Game = () => {
    const [letter, setLetter] = useState('');
    const [currentWord, setCurrentWord] = useState(null);
    const [displayArray, setDisplayArray] = useState(null)
    useEffect(() => {
        const newWord = async () => {
            try {
                const response = await fetch(wordAPI);
                const body = await response.json();
                const word = body[0]
                setCurrentWord(word)
                console.log(word)
                const wordArray = [...word];
                //console.log(wordArray)
                setDisplayArray(wordArray.map((char) => "_"))
                //console.log(displayArray)
            } catch (error) {
                console.log(error)
            }

        }
        newWord()
    }, []);

    const formSubmitHandler = (event) => {
        event.preventDefault();


        let check = currentWord.includes(letter)
        const copyOfDisplayArray = [...displayArray]
        if (check) {
            // If the guessed letter is correct, update the display array.

            for (let i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === letter) {
                    copyOfDisplayArray[i] = letter;
                }else{
                    
                }
            }
        }

        console.log(displayArray)
        alert(check ? "Correct!" : "Wrong!")
        setDisplayArray(copyOfDisplayArray)

    }


    return (
        <>
            <div>
                <h1>Hello!</h1>
                <GuessForm
                    formSubmitHandler={formSubmitHandler}
                    letter={letter} setLetter={setLetter} />
                <WordDisplay displayArray={displayArray} />
                <Graveyard />
            </div>

        </>
    )
};

export default Game