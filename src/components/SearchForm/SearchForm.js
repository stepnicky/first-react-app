import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findCard } from '../../redux/cardPickerReducer.js';

const SearchForm = () => {

    const cardPicker = useSelector(state => state.cardPicker);
    const [title, setTitle] = useState(cardPicker);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(findCard(title));
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={title} onChange={e => setTitle(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;