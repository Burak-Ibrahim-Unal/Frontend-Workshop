import React from 'react'; //rafce
import "./InputField.css";


interface todoProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<todoProps> = ({ todo, setTodo, handleAdd }) => {
    return (
        <div>
            <form className='input' onSubmit={handleAdd}>
                <input
                    type="text"
                    className='input__box'
                    placeholder='Enter a Task'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type='submit' className='input__submit'> Submit</button>
            </form>

        </div>
    );
};

export default InputField;
