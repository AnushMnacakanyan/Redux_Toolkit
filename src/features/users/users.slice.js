import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [
        {
            id: 1,
            name: "Tiko",
            gender: "male",
            salary: 150000
        },
        {
            id: 2,
            name: "Anna",
            gender: "female",
            salary: 145000
        },
        {
            id: 3,
            name: "Anahit",
            gender: "female",
            salary: 340000
        },
        {
            id: 4,
            name: "Karen",
            gender: "male",
            salary: 450000
        },
    ]
}

export const UserSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        salaryUp(state, action) {
            const person = state.items.find(user => user.id == action.payload);
            if (person) {
                person.salary += 50000;
            }
        },
        salaryDown(state, action) {
            const person = state.items.find(user => user.id == action.payload);
            if (person) {
                person.salary = Math.max(0, person.salary - 50000);
            }
        },
        delUser(state, action) {
            state.items = state.items.filter(user => user.id != action.payload);
        },
        swipeUp(state, action) {
            const index = state.items.findIndex(user => user.id == action.payload);
            if (index > 0) {
                [state.items[index], state.items[index - 1]] = [state.items[index - 1], state.items[index]];

                // const person = state.items[index]
                // state.items[index] = state.items[index - 1]
                // state.items[index - 1] = person
            }
        },
        swipeDown(state, action) {
            const index = state.items.findIndex(user => user.id == action.payload);
            if (index < state.items.length - 1) {
                [state.items[index], state.items[index + 1]] = [state.items[index + 1], state.items[index]];
            }
        }
    }
})

export const reducer = UserSlice.reducer
export const { salaryUp, salaryDown, delUser, swipeUp, swipeDown } = UserSlice.actions