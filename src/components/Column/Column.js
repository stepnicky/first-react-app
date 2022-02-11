import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = (props) => {
    
    const cards = useSelector(state => state.cards).filter(card => card.columnId === props.id);

    return (
        <article className={styles.column}>
            <h4 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h4>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id}>{card.title}</Card>)}
            </ul>
            <CardForm columnId={props.id}/>
        </article>
    );
};

export default Column;