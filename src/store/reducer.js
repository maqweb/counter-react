const SET_START_VALUE = 'SET_START_VALUE';
const SET_MAX_VALUE = 'SET_MAX_VALUE';
const SET_VALUES = 'SET_VALUES';
const DISABLE_BUTTONS = 'DISABLE_BUTTONS';

const intitialState = {
    value: 0,
    startValue: 0,
    startText: 'enter values and press \'set\' ',
    errorText: 'Incorrect value!',
    maxValue: '',
    buttons: [
        {title: 'inc', disabled: true, id: 1},
        {title: 'reset', disabled: true, id: 2},
        {title: 'set', disabled: false, id: 3}
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

export const disableButtonsAC = (buttonId) => {
    return {type: DISABLE_BUTTONS, buttonId}
}

export default reducer;