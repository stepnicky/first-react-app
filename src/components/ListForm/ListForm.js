import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from './ListForm.module.scss';
import { addList } from "../../redux/listsReducer.js";
import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";



const ListForm = (props) => {
    
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch( addList({ title: title, description: description }) );
        setTitle('');
        setDescription('');
    }
   
	return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <span>Title: </span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span> Description: </span><TextInput value={description} onChange={e => setDescription(e.target.value)}/>
            <Button>
                <span>Add list</span>
            </Button>
        </form>
	);
};

export default ListForm;