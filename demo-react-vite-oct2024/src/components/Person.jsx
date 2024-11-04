function Person(){
    let onePerson ={
        personId:101,
        personFirstname: "John",
        personLastnamme: "Wick",
    };
    return (
        <>
        <h3>Person Component</h3>
        <h6>Person Id: {onePerson.personId}</h6>
        <h6>Person Firstname: {onePerson.personFirstname}</h6>
        <h6>Person Lastname: {onePerson.personLastnamme}</h6>
        </>
    );
}
export default Person;