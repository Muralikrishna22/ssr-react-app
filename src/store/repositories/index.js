import axios from "axios";

export const getProductsRepo = () => {
    return axios({
        method: 'GET',
        url: '/products'
    })
}