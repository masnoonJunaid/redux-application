const reducer = (state = 0, action) => {
    switch(action.type){
        case "deposit":
            return state + action.payload;
        case "withdraw":
            if(state == (-5000)){
                return -5000
            }else{
                return state - action.payload
            }
        case "reset":
            return 0;
        default:
            return state
    }
}

export default reducer