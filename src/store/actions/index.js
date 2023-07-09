import { getProductsRepo } from '../repositories'
import { getProductsFailure, getProductsSuccess } from '../slices'

export const getProducts = () => {
    return (dispatch) => {
        getProductsRepo()
            .then((res) => {
                dispatch(getProductsSuccess(res.data))
            })
            .catch((err) => {
                dispatch(getProductsFailure(err))
            })
    }
}