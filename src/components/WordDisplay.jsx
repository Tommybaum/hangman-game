const WordDisplay = (props) => {

    return (
       
        <>
            <h1>WordDisplay</h1>
            <h2>{!props.displayArray ? "Loading..." : props.displayArray.map((char) => char + ' ')}</h2>
            

        </>
    )
}

export default WordDisplay