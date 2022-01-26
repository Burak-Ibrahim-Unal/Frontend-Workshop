import React from 'react'; //rafce
import "./InputField.css";

const InputField = () => {
    return (
        <div>
            <form action="" className='input'>
                <input type="text" className='input__box' placeholder='Enter a Task' />
                <button type='submit' className='input__submit'> Submit</button>
            </form>

        </div>
    );
};

export default InputField;
