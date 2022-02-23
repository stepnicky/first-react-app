import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavourite } from '../../redux/cardsReducer.js';
import { removeCard } from '../../redux/cardsReducer.js';

const Card = props => {

    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

    const handleFavourite = () => {
        if (!isActive) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
        dispatch(toggleCardFavourite(props.cardId));
    };

    return (
        <li key={props.cardId} className={styles.card}>
            {props.children}
            <div>
                <button onClick={handleFavourite} className={clsx('fa fa-star-o', styles.favouriteIcon, isActive === true && styles.isActive)} />
                <button onClick={() => dispatch(removeCard(props.cardId))} className={clsx('fa fa-trash', styles.removeIcon)}></button>
            </div>
        </li>
    )
}

export default Card;