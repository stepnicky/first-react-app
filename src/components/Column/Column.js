import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm';
const Column = (props) => {
    return (
        <article className={styles.column}>
            <h4 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h4>
            <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id}>{card.title}</Card>)}
            </ul>
            <CardForm action={props.cardAction} columnId={props.id}/>
        </article>
    );
};

export default Column;