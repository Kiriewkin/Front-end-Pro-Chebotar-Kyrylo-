import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';

import { increment, decrement, incrementByAmount, decrementByAmount } from "../../store/slices/counterSlice";

const Counter = () => {

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
            <Button variant="contained" onClick={() => dispatch(incrementByAmount(5))}>Increment: 5</Button>
            <Button variant="contained" onClick={() => dispatch(increment())}>Increment: 1</Button>
            <span>Count: {count}</span>
            <Button variant="contained" onClick={() => dispatch(decrement())}>Decrement: 1</Button>
            <Button variant="contained" onClick={() => dispatch(decrementByAmount(5))}>Decrement: 5</Button>
        </div>
    )
}

export default Counter;