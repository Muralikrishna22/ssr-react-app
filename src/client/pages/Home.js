import React from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../store/actions'
import { useSelector } from 'react-redux'

function Home() {
    const products = useSelector((state) => state?.products)
    return (
        <div>
            <header>
                <h1>E-commerce Website</h1>
                <Link to={'/'}><button>Back</button></Link>
            </header>

            <main>
                {products?.map((obj) => (
                    <div className="product" key={obj.id}>
                        <div className="details">
                            <h2> {obj.title}</h2>
                            <p>{obj.description}</p>
                            <p>${obj.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}

export const homeServerSideData = async (req, res, store) => {
    await store.dispatch(getProducts())
    return {
        status: 200
    }
}

export default Home