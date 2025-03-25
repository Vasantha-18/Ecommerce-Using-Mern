import React, { useState, useEffect } from 'react';

export default function Product({ addToCart }) {  // ✅ Receive addToCart as prop
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    async function fetchData() {
        try {
            let response = await fetch('https://fakestoreapi.com/products');
            let data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ 
            backgroundColor:"rgba(255, 203, 157, 0.39)"}}>
            <h2>Products</h2>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "10px",
            }}>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && products.map((product) => (
                    <div key={product.id}
                        style={{
                            backgroundColor: "white",
                            padding: "10px",
                            textAlign: "center",
                            borderRadius: "10px",
                            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
                        }}>
                        <img src={product.image} alt={product.title}
                            style={{ width: "120px", height: "150px", marginTop: "20px" }} />
                        <h4 style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                            fontFamily: "Arial",
                            fontWeight: "normal",
                        }}>
                            {product.title.length > 20 ? product.title.slice(0, 15) + "..." : product.title}
                        </h4>
                        <p style={{ marginTop: "10px", marginBottom: "10px", fontFamily: "Arial" }}>
                            {"$" + product.price}
                        </p>
                        <button onClick={() => addToCart(product)}  // ✅ Call addToCart from props
                            style={{
                                padding: "5px 5px",
                                backgroundColor: "blue",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                boxShadow: "0 0 2px black",
                            }}>
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}