import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavourite } from '../../redux/store';

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
            <button onClick={handleFavourite} className={clsx('fa fa-star-o', styles.icon, isActive === true && styles.isActive)} />
        </li>
    )
}

export default Card;