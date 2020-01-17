const SET_START_VALUE = 'SET_START_VALUE';
const SET_MAX_VALUE = 'SET_MAX_VALUE';
const SET_VALUES = 'SET_VALUES';
const DISABLE_SET_BUTTON = 'DISABLE_SET_BUTTON';
const DISABLE_INC_BUTTON = 'DISABLE_INC_BUTTON';
const DISABLE_RES_BUTTON = 'DISABLE_RES_BUTTON';
const INC_VALUE = 'INC_VALUE';
const RESET_INC_VALUE = 'RESET_INC_VALUE';

const intitialState = {
    value: 0,
    startValue: 0,
    startText: 'enter values and press \'set\' ',
    errorText: 'Incorrect value!',
    maxValue: 0,
    buttons: [
        {title: 'inc', disabled: true, id: 1},
        {title: 'reset', disabled: true, id: 2},
        {title: 'set', disabled: true, id: 3}
    ]
};

const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case SET_START_VALUE:
            return {
                ...state,
                startValue: action.startValue
            };
        case SET_MAX_VALUE:
            return  {
                ...state,
                maxValue: action.maxValue
            };
        case SET_VALUES:
            return {
                ...state,
                value: action.value
            };
        case DISABLE_SET_BUTTON:
            return {
                ...state,
                buttons: state.buttons.map(b => {
                    if (+(action.value) === 1 && b.id === 3) {
                        return  {...b, disabled: false}
                    } else {
                        return b;
                    }
                })
            };
        case DISABLE_INC_BUTTON:
            debugger
            return {
                ...state,
                buttons: state.buttons.map(b => {
                    if (b.id === 1) {
                        if (+(state.maxValue) === action.value) {
                            return {...b, disabled: true}
                        } else {
                            return {...b, disabled: false}
                        }
                    } else {
                        return b;
                    }
                })
            };
        case DISABLE_RES_BUTTON:
            return {
                ...state,
                buttons: state.buttons.map(b => {
                    if (b.id === 2) {
                        return {...b, disabled: false}
                    } else {
                        return b;
                    }
                })
            };
        case INC_VALUE:
            return {
                ...state,
                value: action.value
            };
        case RESET_INC_VALUE:
            return  {
                ...state,
                value: action.value
            };
        default:
            return state;
    }
};

export const setValuesAC = (value) => {
    return {type: SET_VALUES, value}
};

export const setStartValueAC = (startValue) => {
    return {type: SET_START_VALUE, startValue}
};

export const setMaxValueAC = (maxValue) => {
    return {type: SET_MAX_VALUE, maxValue}
};

export const disableSetButtonAC = (value) => {
    return {type: DISABLE_SET_BUTTON, value}
};

export const disableIncButtonAC = (value) => {
    return {type: DISABLE_INC_BUTTON, value}
};

export const disableResButtonAC = (value) => {
    return {type: DISABLE_RES_BUTTON, value}
};

export const incValueAC = (value) => {
    return {type: INC_VALUE, value}
};

export const resetIncValueAC = (value) => {
    return {type: RESET_INC_VALUE, value }
};

export default reducer;

window.state = intitialState;