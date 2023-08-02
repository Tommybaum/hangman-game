import { useState } from "react";


const GuessForm = (props) => {

    const handleInput = (e) => {
        e.preventDefault();
        alert(props.letter)
    }
    return (
        <>
            <h1>Guess Form </h1>
            <form onSubmit={handleInput}>
                <label>Enter a single letter:
                    <input
                        type="text"
                        value={props.letter}
                        onChange={(e) => props.setLetter(e.target.value)}
                        maxLength="1"
                        pattern="[A-Za-z]{1}"
                        placeholder="a..."
                        id="letter"
                        size="4"
                        title="Please enter a single letter"
                        required
                    >

                    </input>
                </label>
                <button type="submit">submit letter</button>
            </form>
        </>
    )
}

export default GuessForm