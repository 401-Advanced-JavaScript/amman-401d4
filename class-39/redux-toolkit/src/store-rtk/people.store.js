import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
    name: 'people',
    initialState: [
        {name: 'rtk-Hidaya'},
        {name: 'rtk-Sondos'},
        {name: 'rtk-Waleed'}
    ],
    reducers: {
        add(state, action) {
            console.log("in add state!! ");
            state.push({name: action.payload});
        },
        remove(state, action) {
            return state.filter(person => person.name !== action.payload);
        }
    }
});

console.log("peopleSlice >>>> ",peopleSlice)

export const { add, remove } = peopleSlice.actions;

export default peopleSlice.reducer;


