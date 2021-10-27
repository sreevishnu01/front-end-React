
const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFething: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFething: false,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFething: false,
                error: true,
            };
        case "LOGOUT":
            return {
                user: null,
                isFething: false,
                error: false,
            };
        default:
            return state;
    }
};

export default Reducer