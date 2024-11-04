import { useState } from "react";


function EcomList() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  let totalcost = 0;

  let allProducts = [
    {
      prodId: 1,
      prodName: "Laptop",
      prodCost: 75000,
      prodImage:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 2,
      prodName: "Watch",
      prodCost: 15000,
      prodImage:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 3,
      prodName: "Iphone",
      prodCost: 110000,
      prodImage:
        "https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 4,
      prodName: "Television",
      prodCost: 50000,
      prodImage:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 5,
      prodName: "Desktop",
      prodCost: 25000,
      prodImage:
        "https://plus.unsplash.com/premium_photo-1683326528070-4ebec9188ae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  function addToCart(prodId) {
    let fetchedProduct = allProducts.find(
      (eachProduct) => eachProduct.prodId == prodId
    );
    let newId=cart.length==0 ? 1 : cart[cart.length-1].cartId+1;
    setCart([...cart, {...fetchedProduct, cartId: newId}]);
  }
  function deleteCartItem(cartId) {
    let filteredCart = cart.filter(
      (eachCartItem) => eachCartItem.cartId != cartId
    );
    setCart(filteredCart);
  }
  function toggleWishlist(prodId) {
    const isInWishlist = wishlist.some((item) => item.prodId === prodId);
    if (isInWishlist) {
      setWishlist(wishlist.filter((item) => item.prodId !== prodId));
    } else {
      const fetchedProduct = allProducts.find((eachProduct) => eachProduct.prodId === prodId);
      setWishlist([...wishlist, fetchedProduct]);
    }
  }
  const mappedCart = cart.map((eachCartItem) => (
    <tr key={eachCartItem.cartId}>
        <td>{eachCartItem.cartId}</td>
      <td>{eachCartItem.prodId}</td>
      <td>{eachCartItem.prodName}</td>
      <td>{eachCartItem.prodCost}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteCartItem(eachCartItem.cartId)}
        >
          🗑️
        </button>
      </td>
    </tr>
  ));
  const mappedWishlist = wishlist.map((eachWishlistItem) => (
    <tr key={eachWishlistItem.prodId}>
      <td>{eachWishlistItem.prodId}</td>
      <td>{eachWishlistItem.prodName}</td>
      <td>₹{eachWishlistItem.prodCost}</td>
      <td>
        <button className="btn btn-danger" onClick={() => toggleWishlist(eachWishlistItem.prodId)}>
          🗑️
        </button>
      </td>
    </tr>
  ));
  let mappedAllProducts = allProducts.map((eachProduct) => (
      <div className="col-sm-12 col-md-6 col-lg-3" key={eachProduct.prodId}>
        <div className="card m-1">
          <img width="auto" height="150px" src={eachProduct.prodImage}></img>
          <div className="card-title">
            <h5>{eachProduct.prodName}</h5>
          </div>
          <div className="card-text">
            <p>Product ID: {eachProduct.prodId}</p>
          </div>
          <div className="card-text">
            <p>Product Price: {eachProduct.prodCost}</p>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-warning"
              onClick={() => addToCart(eachProduct.prodId)}
            >
              ➕
            </button>
            <button
              className={`btn ${wishlist.some(item => item.prodId === eachProduct.prodId) ? 'btn-success' : 'btn-warning'}`}
              onClick={() => toggleWishlist(eachProduct.prodId)}
              
            >
              ❤️
            </button>
          </div>
        </div>
      </div>
  ));

  return (
    <>
      <div className="container m-3">
        <div className="row">
          <div className="col-10">
            <h3>LIST OF GADGETS</h3>
            <div className="row">{mappedAllProducts}</div>
          </div>
          <div className="col-2 ">
            <div >
              <h6>CART ITEMS</h6>
              {cart.length == 0 ? (
                "CART IS EMPTY!"
              ) : (
                <div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>COST</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{mappedCart}</tbody>
                  </table>
                  <div>
                    <p>Total Items: {cart.length}</p>
                    <p>
                      Total Cost: ₹
                      {cart.reduce(
                        (sum, eachCartItem) => sum + eachCartItem.prodCost,
                        0
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="my-4">
              <h6 className="">WISHLIST ITEMS</h6>
              {wishlist.length === 0 ? (
                "WISHLIST IS EMPTY!"
              ) : (
                <div>
                  <table className="table table-striped ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>COST</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{mappedWishlist}</tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EcomList;
