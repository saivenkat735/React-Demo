function DisplayProps({name, greeting, emoji}){ //instead of destructuring 

    // let {name, greeting, emoji} = props; //object destructuring
    return (
        <>
            <h3>This is DisplayProps Component</h3>
            <h4>{greeting} {name} {emoji}</h4>
        </>
    );
}

export default DisplayProps;