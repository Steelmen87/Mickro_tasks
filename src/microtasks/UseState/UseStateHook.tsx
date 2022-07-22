import React, {useState} from 'react';

const UseStateHook = () => {
    let[a,setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
    }
    return (
        <div>
            {a}
            <button onClick={onClickHandler}>DD +++</button>
        </div>
    );
};

export default UseStateHook;