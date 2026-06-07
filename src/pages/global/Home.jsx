import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar';

function Home() {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await fetch('https://dummyjson.com/products');
                if (!resp.ok) {
                    console.error(resp.status);
                }
                const result = await resp.json();
                setProducts(result)
                // console.log("setProducts: ", setProducts);
            } catch (error) {
                // console.error(error);
                console.error("products Not found: ", error)
            }
        }
        getData();
    }, []);

    return (
        <div>
            <h1 className='text-2xl text-center my-8'>Home Page</h1>
            <div className='flex flex-wrap justify-center gap-3'>
                {products ? (
                    products.products.map((prod) => (
                        <div key={prod?.id} className='w-58 h-[300px] border border-black'>
                            <div className='overflow-hidden flex'>
                                <img src={prod.images[0]} alt="" className='w-full h-full bg-contain' />
                            </div>
                            <div className='p-3'>
                                <p className='font-bold truncate'>{prod.title}</p>
                                <p className='text-green-600 font-bold'>{prod.availabilityStatus}</p>
                            </div>
                        </div>
                    ))
                ) : <div>Products Not found!</div>}
            </div>
        </div>
    )
}

export default Home