import React from 'react'

function Home() {
    return (
        <div>
            <header>
                <h1>E-commerce Website</h1>
            </header>

            <main>
                {Array.from(Array(100).keys())?.map((num) => (
                    <div className="product" key={num}>
                        <div className="details">
                            <h2>Product {num}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>$19.99</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}

export default Home