import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = props => {

    const dispatch = useDispatch();

    const handleAddFavorite = event => {
        event.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    }

    return (
        <li className={styles.card}>{props.title}
      <div>
        <button onClick={handleAddFavorite} className={styles.btn}><i className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i></button>
      </div>
    </li>
    )
};

export default Card;