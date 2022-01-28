import React, { useRef } from 'react'; //rafce
import "./InputField.css";


interface todoProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<todoProps> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <form className='input' onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}>
                <input
                    ref={inputRef}
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
