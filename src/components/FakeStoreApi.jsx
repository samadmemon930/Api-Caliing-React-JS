import { useEffect, useState } from "react"
import axios from "axios"
const ApiStore = () => {

    let [category, setCategory] = useState([])
    let [product, setProduct] = useState([])


    useEffect(() => {
        getApiCategory()
    }, [])

    const getApiCategory = () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://fakestoreapi.com/products/categories',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data);
                setCategory(response.data)
                getCategoryProduct(response.data[0])
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const getCategoryProduct = (name) => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://fakestoreapi.com/products/category/${name}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setProduct(response.data)
            })
            .catch((error) => {
                console.log(error);
            });


    }

    return (
        <>
        <div class="heading">
            <h1>STORE APIS</h1>
            {
                category.map((v, i) => {
                    return (
                        <button key={i} onClick={() => getCategoryProduct(v)}>{v}</button>
                    )
                })
            }
            </div>

            <div>
                {
                    product.map((v, i) => {
                        console.log(v)
                        return (
                            <>
                            <div class = " API ">
                                <img key={i} src={v.image} alt="Api" style={{width: "300px",height: "200px"}} />
                                <h1>{v.title}</h1>
                                <h3>Price: ${v.price}</h3>
                                <button style={{backgroundColor:"GREEN" , color:"white"}}>Order Now</button>
                                <hr/>
                                </div>



                            </>

                        )
                    })
                }
            </div>

        </>

    )


}

export default ApiStore