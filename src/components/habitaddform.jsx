import React, { memo } from 'react';

const Habitaddform = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name)
        formRef.current.reset();
    }
    return (
        <form
            ref={formRef} 
            onSubmit={onSubmit}>
            <input ref={inputRef} type="text"></input>
            <button className="add">Add</button>
        </form>
    );
})

export default Habitaddform;
