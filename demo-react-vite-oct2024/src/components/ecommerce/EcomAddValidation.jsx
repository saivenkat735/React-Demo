import { useState } from "react"

export default function EcomAddValidation() {
    const [gadgetData,setGadgetData]=useState(
        {
            prodId: 0,
            prodName: "",
            prodCost: 0,
            prodImage:
              "",
          }
    )
    function handleFormSubmit(event){
        event.preventDefault();
        console.log(gadgetData)
    }

    
    function handleFormChange(e){
        console.log(e);
        // setGadgetData({...gadgetData,prodName:e.target.value})
        // setGadgetData({...gadgetData,prodCost:e.target.value})
        // setGadgetData({...gadgetData,prodImage:e.target.value})
    //    setGadgetErrorData({...gadgetErrorData,[e.target.name]:e.target.validity.valid})
        setGadgetData({...gadgetData,[e.target.name]:e.target.value})
    }
    return (
        <>
        <div className="container">
            <div className="card">
                <form onSubmit={(e)=>handleFormSubmit(e)}>
                    <div className="card-header bg-success text-light">
                        <h3>ADD A NEW GADGET</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-control-group m-1">
                            <label htmlFor="gName"className="form-label">Gadget Name:</label>
                            <input type="text" id="gName" placeholder="Enter Gadget Name" className="form-control" required minLength={3} name="prodName" onChange={(e)=>handleFormChange(e)}></input>
                            <div className="text-danger small">{gadgetData.prodName?"":"Gadget name is required"} </div>
                            <div className="text-danger small">{gadgetData.prodName?"":"Gadget name is required"}
                            {gadgetData.prodName.length>3?"":"Gadget name minlength should be 3"}
                             </div>
                        </div>
                        <div className="form-control-group">
                            <label htmlFor="gCost"className="form-label">Gadget Cost:</label>
                            <input type="text" id="gCost" placeholder="Enter Gadget Cost" className="form-control" required name="prodCost" onChange={(e)=>handleFormChange(e)}></input>
                            <div className="text-danger small">{gadgetData.prodCost?"":"Gadget cost is required"} </div>
                        </div>
                        <div className="form-control-group">
                            <label htmlFor="gImage"className="form-label">Gadget Image Url:</label>
                            <input type="text" id="gImage" placeholder="Enter Gadget Image Url" className="form-control" name="prodImage" onChange={(e)=>handleFormChange(e)}></input>
                        </div>

                    </div>
                    <div className="card-footer bg-success text-light">
                        <button type="submit" className="btn btn-light text-success" >ADD</button>
                        <button type="reset" className="btn btn-light text-success mx-5">CLEAR</button>
                    </div>
                </form>
            </div>
        </div>
        </>

    )
}
