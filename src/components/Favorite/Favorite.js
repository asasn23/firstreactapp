import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import PageSubTitle from '../PageSubTitle/PageSubTitle';

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <PageSubTitle>Lorem Ipsum.</PageSubTitle>
    </div>
  );
}

export default Favorite;