import {ORDER_CREATE_FAIL,
     ORDER_CREATE_REQUEST,
     ORDER_CREATE_SUCCESS,
     ORDER_DETAILS_REQUEST,
     ORDER_DETAILS_SUCCESS,
     ORDER_DETAILS_FAIL,
     ORDER_PAY_REQUEST,
     ORDER_PAY_SUCCESS,
     ORDER_PAY_FAIL,
     ORDER_PAY_RESET,
     ORDER_LIST_MY_REQUEST,
     ORDER_LIST_MY_SUCCESS,
     ORDER_LIST_MY_FAIL,
     ORDER_LIST_MY_RESET,
     ORDER_LIST_REQUEST,
     ORDER_LIST_SUCCESS,
     ORDER_LIST_FAIL,
     ORDER_DELIVER_REQUEST,
     ORDER_DELIVER_SUCCESS,
     ORDER_DELIVER_FAIL,
     ORDER_DELIVER_RESET} from "../constants/orderConstants"

//create order
    export const orderCreateReducer= (state={},action)=>{
        switch(action.type) {
            case ORDER_CREATE_REQUEST:
                return {
                    loading:true
                }
                case ORDER_CREATE_SUCCESS:
                return {
                    loading:false,
                    success:true,
                    order:action.payload
                }
                case ORDER_CREATE_FAIL:
                return {
                    loading:false,
                    error:action.payload
                }

                default: 
                return state
        }
    }


//order details set loading to true cuz issues loading
    export const orderDetailsReducer= (state={loading:true, orderItems:[],shippingAddress:{}},
        action)=>{
        switch(action.type) {
            //spread operator keep us from gettig errors when it loads
            case ORDER_DETAILS_REQUEST:
                return {...state,
                    loading:true
                }
                case ORDER_DETAILS_SUCCESS:
                return {
                    loading:false,
                    order:action.payload
                }
                case ORDER_DETAILS_FAIL:
                return {
                    loading:false,
                    error:action.payload
                }

                default: 
                return state
        }
    }



// order pay reducer
    export const orderPayReducer= (state={},
        action)=>{
        switch(action.type) {
            //to get order state!!
            case ORDER_PAY_REQUEST:
                return {...state,
                    loading:true
                }
                case ORDER_PAY_SUCCESS:
                return {
                    loading:false,
                    success:true
                }
                case ORDER_PAY_FAIL:
                return {
                    loading:false,
                    error:action.payload
                }
                case ORDER_PAY_RESET:
                return {}

                default: 
                return {...state} 
        }
    }




// order deliver reducer
export const orderDeliverReducer= (state={},
    action)=>{
    switch(action.type) {
        //to get order state!!
        case ORDER_DELIVER_REQUEST:
            return {...state,
                loading:true
            }
            case ORDER_DELIVER_SUCCESS:
            return {
                loading:false,
                success:true
            }
            case ORDER_DELIVER_FAIL:
            return {
                loading:false,
                error:action.payload
            }
            case ORDER_DELIVER_RESET:
            return {}

            default: 
            return {...state} 
    }
} 







    // order my list reducer
    export const orderListMyReducer= (state={orders:[]},action)=>{
        switch(action.type) {
            case ORDER_LIST_MY_REQUEST:
                return {...state,
                    loading:true
                }
                case ORDER_LIST_MY_SUCCESS:
                return {
                    loading:false,
                    orders:action.payload
                }
                case ORDER_LIST_MY_FAIL:
                return {
                    loading:false,
                    error:action.payload
                } 
                case ORDER_LIST_MY_RESET:
                return { orders:[] } 
                

                default: 
                return {...state}
        }
    }

//orders list reducer


    export const orderListReducer = (state={orders:[]},action)=>{
        switch (action.type) {
            
            case ORDER_LIST_REQUEST: 
             return{...state,
                 Loading:true, orders: []
             }
            
             case ORDER_LIST_SUCCESS: 
             return{
                Loading:false ,orders:action.payload
            }
            
            case ORDER_LIST_FAIL: 
             return{
                Loading:false ,error:action.payload
            }
        
            default:
                return state
        }
    
    }