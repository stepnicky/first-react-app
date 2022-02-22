import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';


const CardForm = (props) => {
    
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({title: title, columnId: props.columnId, isFavourite: false}));
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