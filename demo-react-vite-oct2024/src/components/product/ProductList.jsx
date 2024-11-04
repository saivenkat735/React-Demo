import ProductItem from "./ProductItem";

function ProductList(){
    let allProducts=[
        {
            prodId:1,
            prodName:"Laptop",
            prodCost: "75000₹",
            prodImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            prodId:2,
            prodName:"Watch",
            prodCost: "15000₹",
            prodImage: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            prodId:3,
            prodName:"Iphone",
            prodCost: "110000₹",
            prodImage: "https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            prodId:4,
            prodName:"Television",
            prodCost: "50000₹",
            prodImage: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            prodId: 5,
            prodName: "Desktop",
            prodCost: "25000₹",
            prodImage:
              "https://plus.unsplash.com/premium_photo-1683326528070-4ebec9188ae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D",
          }
        
    ];

    let mappedAllProducts=allProducts.map((product)=>(<ProductItem key={product.prodId} data={product}></ProductItem>));
    
    return (
        <>
            <div className="container">
                <h3>List of Products:</h3>
                <div className="row">{mappedAllProducts}</div>
            </div>

        </>
    )
}
export default ProductList;