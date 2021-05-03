const OPEN_CHAT = 'OPEN-CHAT';
const CLOSE_CHAT = 'CLOSE-CHAT';

let initialState = {
    isChatOpen: false,  
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_CHAT:
            
               return {
                    ...state,
                    isChatOpen: true
                }
        case CLOSE_CHAT:
                return {
                    ...state,
                    isChatOpen: false
                }
        default:
            return state;

    }
}

export const openChat = () => {
    return {
        type: OPEN_CHAT, isChatOpen: true
    }
}
export const closeChat = () => {
    return {
        type: CLOSE_CHAT, isChatOpen: false
    }
}

export default appReducer;