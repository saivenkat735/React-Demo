    
function Color(){
    let allColors=["RED", "BLUE", "GREEN"]
    let mappedAllColors=allColors.map((eachColor)=><li>{eachColor}</li>);
    return (
        <>
            <h3>This is color component!</h3>
            <h5>{allColors}</h5>
            <ul>
            {
            allColors.map((eachColor) => (<li>{eachColor}</li>))
            }
            </ul>
            <h5>New Way</h5>
            <ol>{mappedAllColors}</ol>
        </>
    )
}
export default Color;