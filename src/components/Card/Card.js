import styles from './Card.module.scss';

const Card = props => {
    return (
        <li key={props.key} className={styles.card}>{props.children}</li>
    )
}

export default Card;