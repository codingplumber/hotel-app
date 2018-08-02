const initialState = {
    customers: [],
    firstName: '',
    lastName: '',
    toRes: '',
    fromRes: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CUSTOMERS':
        console.log(action.customers)
            return {
                ...state,
                customers: action.customers[0]
            }

        case 'CHANGE_INFO':
            console.log(action.payload.name)
            console.log(action.payload.value)
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        // case 'ADD_CUSTOMER':
        //     const newCustomer = state.customers.map(c => {
        //         c.firstName = state.firstName;
        //         c.lastName = state.lastName;
        //         c.toRes = state.toRes;
        //         c.fromRes = state.fromRes;
        //     })
        //     return {
        //         ...state,
        //         customers: newCustomer
        //     }
        
        default:
            return state;
    }
};

export default reducer;