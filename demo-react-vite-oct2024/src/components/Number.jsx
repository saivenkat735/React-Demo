function Number(){
    let evenNum=[2,4,6,8,10];
    let OddNum=[1,3,5,7,9];
    let allNum=[...evenNum,...OddNum]
    return (
        <>
            <h3>Even Numbers:</h3>
           <ul>
            {
            evenNum.map((num) => (<li>{num}</li>))
            }
            </ul> 
            <h3>Odd Numbers:</h3>
            <ul>
            {
            OddNum.map((num) => (<li>{num}</li>))
            }
            </ul>
            <h3>All Numbers</h3>
            <ul>
            {
            allNum.map((num) => (<li>{num}</li>))
            }
            </ul>
        
        </>

    )
}
export default Number;