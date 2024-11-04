import ActorItem from "./ActorItem";

function ActorList(){
    let allActors=[
        {
            actorId:101,
            actorFirstname:"Tarak",
            actorLastname:"Rama Rao"
        },
        {
            actorId:102,
            actorFirstname:"Mahesh",
            actorLastname:"Babu"
        },
        {
            actorId:103,
            actorFirstname:"Allu",
            actorLastname:"Arjun"
        },
        {
            actorId:104,
            actorFirstname:"Ram",
            actorLastname:"Charan"
        }
    ];
    let mappedAllActors=allActors.map((actor)=>(<ActorItem data={actor} key={actor.actorId}></ActorItem>));
    return (
        <>
        <h3>List of Actors</h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                </tr>
            </thead>
            <tbody>
                {mappedAllActors}
            </tbody>
        </table>
        </>


    )
}
export default ActorList;