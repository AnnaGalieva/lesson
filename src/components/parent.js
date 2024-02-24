import { useState } from "react";
import Button from '@mui/material/Button';

function ParentCounter() {
    const [count, setCount] = useState(0);
    console.log('Parent');

    const upCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h2>Родитель</h2>
            <ChildCount count={count} />
            <Button onClick={upCount} variant="contained">Плюс 1</Button>
            {/* <button >Плюс 1</button> */}
        </div>
    );
}
function ChildCount({ count }) {
    console.log('click');
    return (
        <div>
            <p>Счетчик внутри</p>
            <p>Значение счетчика{count}</p>
        </div>
    );
}


export default ParentCounter;