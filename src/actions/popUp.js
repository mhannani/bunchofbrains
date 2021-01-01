export const applyOpen = (state) => ({
    ...state,
    isOpen: true
})

export const applyClose = (state) => ({
    ...state,
    isOpen: false
})


export const applyIsLogIn = (state) => ({
    ...state,
    isLogIn: true
})

export const applyIsSignUp = (state) => ({
    ...state,
    isLogIn: false
})