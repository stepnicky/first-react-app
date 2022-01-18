import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';

const CardForm = (props) => {
    
    const [title, setTitle] = useState('');
    

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, id: props.columnId });
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