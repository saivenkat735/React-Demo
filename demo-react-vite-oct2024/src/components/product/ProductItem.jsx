import MovieProps from "../MovieProps"

function ProductItem(props){
    return (
      <>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card m-3">
            <img width= "auto" height= "150px" src={props.data.prodImage}></img>
            <div className="card-title">
              <h5>{props.data.prodName}</h5>
            </div>
            <div className="card-text">
              <p>Product ID: {props.data.prodId}</p>
            </div>
            <div className="card-text">
              <p>Product Price: {props.data.prodCost}</p>
            </div>
            
          </div>
        </div>
      </>
    );
}
export default ProductItem