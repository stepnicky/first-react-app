import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';


const Column = (props) => {

    const cards = useSelector(state => getFilteredCards(state, props.id))

    return (
        <article className={styles.column}>
            <h4 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h4>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} cardId={card.id}>{card.title}</Card>)}
            </ul>
            <CardForm columnId={props.id}/>
        </article>
    );
};

export default Column;