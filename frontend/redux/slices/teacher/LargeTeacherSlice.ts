import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ITeacherLarge } from '../../types/teacherType'
import teacherInfoSeed from './seeds/teachersInfoSeed'



const initialState: ITeacherLarge[] = teacherInfoSeed

export const teacherLarge = createSlice({
    name: 'teacherLarge',
    initialState,
    reducers: {
        // getOneTeacher:(state, PayloadAction) => {
        //     state = state.filter((el)=>{
        //         if(el.id == PayloadAction)
        //     })
        // }
    },
})


export default teacherLarge.reducer
