import React from 'react';
import styles from './Two.module.css'

type Button = {}

const MicroTaskOne: React.FC<Button> = (props) => {
    const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (number: number) => {
        console.log(number)
    }
    return (
        <div>
            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>1</button>
        </div>
    );
};

export default MicroTaskOne;