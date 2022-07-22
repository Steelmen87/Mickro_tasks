import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
}

const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default Button;