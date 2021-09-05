import axios from 'axios'

//Redux Thunk allow us to writte the function this way: = () => async () => {}
//We receive id and quantity from the url
export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: 'CART_ADD_ITEM',
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            quantity
        }
    })



    sessionStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch(
        {
            type: 'CART_REMOVE_ITEM',
            payload: id,
        }
    )
    sessionStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}