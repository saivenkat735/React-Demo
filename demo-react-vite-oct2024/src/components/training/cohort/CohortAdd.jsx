import { useState } from "react";
export default function CohortAdd() {
  const [allCohorts, setAllCohorts] = useState([
    {
      cohortId: 0,
      cohortSize: 0,
      cohortVenueId: 0,
      cohortStack: "",
      cohortStartDate: "",
      cohortDurationWeeks: 0,
      cohortSPOC: "",
      cohortInstructor: "",
    },
  ]);
  function handleChange(e){
      setAllCohorts({...allCohorts,[e.target.name]:e.target.value})
  }
 
  function onSubmit(e){
      e.preventDefault();
      console.log(allCohorts);
  }
  return (
    <>
      <div className="container">
        <div className="card">
          <form onSubmit={()=>onSubmit(e)}>
            <div className="card-header bg-success text-light">
              <h3>ADD A COHORT DETAILS</h3>
            </div>
            <div className="card-body">
              <div className="form-control-group">
                <label htmlFor="cohortId" className="form -label my-2">
                  cohortId
                </label>
                <input
                  type="text"
                  placeholder="Enter CohortId"
                  className="form-control"
                  id="cohortId"
                  name="cohortId"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="form-control-group">
                <label htmlFor="cohortSize" className="form -label my-2">
                  cohortSize
                </label>
                <input
                  type="text"
                  placeholder="Enter CohorSize"
                  className="form-control"
                  id="cohortSize"
                  name="cohortSize"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="form-control-group">
                <label htmlFor="cohortVenueId" className="form -label my-2">
                  cohortVenueId
                </label>
                <input
                  type="text"
                  placeholder="Enter CohorotVenueId"
                  className="form-control"
                  id="cohortVenueId"
                  name="cohortVenueId"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="form-control-group">
                <label htmlFor="cohortStack" className="form -label my-2">
                  cohortStack
                </label>
                <input
                  type="text"
                  placeholder="Enter cohortStack"
                  className="form-control"
                  id="cohortStack"
                  name="cohortStack"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="form-control-group">
                <label htmlFor="cohortStartDate" className="form -label my-2">
                  cohortStartDate
                </label>
                <input
                  type="Date"
                  placeholder="Enter cohortStartDate"
                  className="form-control"
                  id="cohortStartDate"
                  name="cohortStartDate"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="form-control-group">
                <label
                  htmlFor="cohortDurationWeeks"
                  className="form -label my-2"
                >
                  cohortDurationWeeks
                </label>
                <input
                  type="text"
                  placeholder="Enter cohortDurationWeeks"
                  className="form-control"
                  id="cohortDurationWeeks"
                  name="cohortDurationWeeks"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="form-control-group">
                <label htmlFor="cohortSPOC" className="form -label my-2">
                  cohortSPOC
                </label>
                <input
                  type="text"
                  placeholder="Enter cohortSPOC"
                  className="form-control"
                  id="cohortSPOC"
                  name="cohortSPOC"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div className="form-control-group">
                <label htmlFor="cohortInstructor" className="form -label my-2">
                  cohortInstructor
                </label>
                <input
                  type="text"
                  placeholder="Enter cohortInstructor"
                  className="form-control"
                  id="cohortInstructor"
                  name="cohortInstructor"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
            </div>
            <div className="card-footer bg-success text-light">
              <button type="submit" className="btn btn-light text-success">
                submit
              </button>
              <button type="reset" className="btn btn-light text-success mx-2">
                clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}