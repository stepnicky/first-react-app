import styles from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';
import { useSelector } from 'react-redux';
import { getFavouritedCards } from '../../redux/cardsReducer.js';
import Card from '../Card/Card.js';

const Favourite = () => {

    const cards = useSelector(getFavouritedCards);

    return (
        <div>
            <PageTitle>Favourite</PageTitle>
            <div className={styles.flexWrapper}>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} cardId={card.id}>{card.title}</Card>)}
                </ul>
            </article>
            </div>
        </div>
    );
};

export default Favourite;