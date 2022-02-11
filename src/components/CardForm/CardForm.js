import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';


const CardForm = (props) => {
    
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_CARD', newCard: {title: title, columnId: props.columnId}});
        setTitle('');
        
    }
   
	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>
                <span>Add new card</span>
            </Button>
        </form>
	);
};

export default CardForm;