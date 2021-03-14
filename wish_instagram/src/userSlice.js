import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: "brunoa94",
        name: "Bruno Afonso",
        photo_url: "https://cdn.record.pt/images/2019-11/img_920x518$2019_11_24_03_02_56_1630651.jpg",
        modalVisible: false
    },
    reducers: {
        setUser: (state, action) => {
            console.log(action)
            state.username = action.payload.username;
            state.name = action.payload.name;
            state.photo_url = action.payload.photo_url;
            state.modalVisible = false;
        },
        setModalVisible: (state) => {
            state.modalVisible = true
        },
        setModalInvisible: (state) => {
            state.modalVisible = false
        }
    }
})

export const { setUser, setModalVisible, setModalInvisible } = userSlice.actions;

export default userSlice.reducer;