const AUTH = 'AUTH';
const ADD_NAME = 'ADD-NAME';
const ADD_EMAIL = 'ADD-EMAIL';
const ADD_PHONE = 'ADD-PHONE';
const VALID_NAME = 'VALID-NAME';
const VALID_EMAIL = 'VALID-EMAIL';
const INVALID_NAME = 'INVALID-NAME';
const INVALID_EMAIL = 'INVALID-EMAIL';

let initialState = {
    user : [
        {name: 'Alex', email: 'fafasdf', phone: '2314'}
    ],
    newName: '',
    newEmail: '',
    newPhone: '',
    isAuth: false,  
    nameValid: null, 
    emailValid: null
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case AUTH:
            let newUser = {
                name: state.newName,
                email: state.newEmail,
                phone: state.newPhone
            }
               return {
                    ...state,
                    user: [...state.user, newUser],
                    isAuth: true
                }
        case ADD_NAME:
            return {
                ...state,
                newName: action.newName,
                    }
        case ADD_EMAIL:
            return {
                ...state,
                newEmail: action.newEmail,
                    }
        case ADD_PHONE:
            return {
                ...state,
                newPhone: action.newPhone,
                     }
        case VALID_NAME:
            return{
                ...state,
                nameValid: true,
            }
        case VALID_EMAIL:
            return{
                ...state,
                emailValid: true,
            }
        case INVALID_NAME:
            return{
                ...state,
                nameValid: false,
            }
        case INVALID_EMAIL:
            return{
                ...state,
                emailValid: false,
            }
        default:
            return state;

    }
}

export const auth = () => {
    return {
        type: AUTH
    }
}
export const addName = (name) => {
    return {
        type: ADD_NAME,
        newName: name,
    }
}
export const addEmail = (email) => {
    return {
        type: ADD_EMAIL,
        newEmail: email,
    }
}

export const addPhone = (phone) => {
    return {
        type: ADD_PHONE,
        newPhone: phone
    }
}
export const validName = () => {
    return {
        type: VALID_NAME,
        nameValid: true
    }
}
export const validEmail = () => {
    return {
        type: VALID_EMAIL,
        nameValid: true
    }
}
export const inValidName = () => {
    return {
        type: INVALID_NAME,
        nameValid: false
    }
}
export const inValidEmail = () => {
    return {
        type: INVALID_EMAIL,
        nameValid: false
    }
}



export default authReducer;