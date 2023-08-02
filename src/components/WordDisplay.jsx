const WordDisplay = (props) => {
   // console.log(props.currentWord)
    return (
       
        <>
            <h1>WordDisplay</h1>
            <p>{props.currentWord ? props.currentWord : "Loading..."}</p>

        </>
    )
}

export default WordDisplay