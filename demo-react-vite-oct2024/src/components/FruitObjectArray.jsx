function FruitObjectArray(){
    let allFruits= [
        {
            fruitId: 201,
            fruitName: "Apple",
            fruitEmoji: "🍎"
        },
        {
            fruitId: 202,
            fruitName: "Orange",
            fruitEmoji: "🍊"
        },
        {
            fruitId: 203,
            fruitName: "Banana",
            fruitEmoji: "🍌"
        },

    ]
    let mappedAllFruits= allFruits.map((fruit)=><li>{fruit.fruitEmoji}, {fruit.fruitId}, {fruit.fruitName}</li>)
    return (
        <>
            <h3>List of Fruits:</h3>
            <ul>
                {mappedAllFruits}
            </ul>
        </>
    )
}
export default FruitObjectArray;