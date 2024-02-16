import styles from './PageNotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const PageNotFound = () => {
  return (
    <div className={styles.pagenotfound}>
      <PageTitle>404 NOT FOUND</PageTitle>
    </div>
  );
}

export default PageNotFound;