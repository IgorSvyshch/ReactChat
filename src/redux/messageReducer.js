const UPD_MESSAGE = 'UPD-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    message: [
        {message: 'Hello, me name is Ekaterina, and I will answer any of your questions', userId:1, id:1},
        {message: 'Hello, I want to ask one question.', userId:2, id:2},
        {message: 'Thank you for your patience, a technician will respond in approximately 60 seconds.', userId:1, id:3},
        {message: 'Hello, me name is Ekaterina, and I will answer any of your questions', userId:1, id:4},
        {message: 'Hello, I want to ask one question.', userId:2, id:5},
        {message: 'Thank you for your patience, a technician will respond in approximately 60 seconds.', userId:1, id:6},
        {message: 'Hello, me name is Ekaterina, and I will answer any of your questions', userId:1, id:7},
        {message: 'Hello, I want to ask one question.', userId:2, id:8},
        {message: 'Thank you for your patience, a technician will respond in approximately 60 seconds.', userId:1, id:9},
    ],   
    newMessageText: '',
}

const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                userId: 2,
                id: 100
            };
                return {
                    ...state,
                    message: [...state.message,newMessage],
                    newMessageText: '',
                };
        case UPD_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage,
            };
        default:
            return state;

    }
}

export const addMessage = () => {
    return {
         type : ADD_MESSAGE
    }
}
export const updateMessage = (text) => {
    return {
         type : UPD_MESSAGE, newMessage: text
    }
}

export default messageReducer;