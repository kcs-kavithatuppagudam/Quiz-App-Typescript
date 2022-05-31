import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface quizState {
  score:number
}

// Define the initial state using that type
const initialState: quizState = {
  score: 0,
}

export const quizSlice = createSlice({
  name: 'quiz',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setScore: (state) => {
      state.score += 1
    }
  },
})

export const {setScore} = quizSlice.actions


export default quizSlice.reducer