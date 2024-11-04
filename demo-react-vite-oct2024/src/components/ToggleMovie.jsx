import { useState } from "react";

function ToggleMovie(){
    const [togglemovie,settogglemovie]=useState(false);
    const movie={
        name:"Tagore",
        img: "https://m.media-amazon.com/images/M/MV5BMDU3YzAxNDUtMWE5Zi00NzExLTlhYTgtMzAyNWY2MTEyZTQ3XkEyXkFqcGc@._V1_.jpg"
    };
    const toggleVisibility = () => {
        settogglemovie(!togglemovie);
      };
    return (
        <>
        <div>
            <button onClick={toggleVisibility}>
                {togglemovie?"Hide Movie": "Show Movie"}
            </button>
            {togglemovie && (
                <div>
                    <h2>{movie.name}</h2>
                    <img src={movie.img} alt ={movie.name} style={{width:'200px'}}/>
                </div>
            )}

        </div>

        </>
    )
}
export default ToggleMovie;