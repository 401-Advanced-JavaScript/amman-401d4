let initialState = [
    {name: 'Hidaya'},
    {name: 'Sondos'},
    {name: 'Waleed'}
];

export default (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'ADD':
            return [...state, {name: payload}];
        case 'REMOVE':
            return state.filter(person => person.name !== payload);
        default:
            return state;

    }
}

export const add = (name) => {
    return {
        type: 'ADD',
        payload: name
    }
}


export const remove = (name) => {
    return {
        type: 'REMOVE',
        payload: name
    }
}

export const get = () => {
    return {
        type: 'GET'
    }
}