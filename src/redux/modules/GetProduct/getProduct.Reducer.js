
const defaultState={
    loading:false,
    error:false,
    success:false,
    data:[]
}

export const getProductReducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'GET_PRODUCT_PENDING':
        return{
            loading:true,
            error:false,
            success:false,
            data:[]
        }
        case 'GET_PRODUCT_FULFILLED':
        return{
            loading:false,
            error:false,
            succes:true,
            data:action.payload.data
        }
        case 'GET_PRODUCT_REJECTED':
        return{
            loading:false,
            error:true,
            success:false,
            data:[]
        }
        default:
            return state
    }
}