const initialState = {

};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: action.payload,
            };
        case 'MYPROFILE':
            return {
                ...state,
                myProfile: action.payload,
            };
        default:
            return state;
    }
};

export default Reducer;