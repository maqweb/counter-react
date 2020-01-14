
const intitialState  = {
    value: 0,
    startValue: 0,
    startText: 'enter values and press \'set\' ',
    errorText: 'Incorrect value!',
    maxValue: '',
    buttons: [
        {title: 'inc', disabled: true},
        {title: 'reset', disabled: true},
        {title: 'set', disabled: false}
    ]
};

const reducer = (state = intitialState, action) => {
    return state;
};

export default reducer;