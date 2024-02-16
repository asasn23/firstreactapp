import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsReducer';



const Column = props => {

    const filteredCards = useSelector(state => getFilteredCards(state, props.id));


    return(
        <article className={styles.column}>
            <h2 className={styles.title}>
                <span className= {styles.icon + ' fa fa-'+ props.icon}/>
                {props.title}
            </h2>
            <ul className={styles.cards}>
                {filteredCards.map(card => <Card key={card.id} id={card.id} card={card} columnId={props.id} isFavorite={card.isFavorite} cards={props.cards} title={card.title}/>)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    );
}

export default Column;