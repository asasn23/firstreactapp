import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import PageSubTitle from '../PageSubTitle/PageSubTitle';

const About = () => {
    return (
        <div className={styles.about}>
            <PageTitle>About</PageTitle>
            <PageSubTitle>Lorem Ipsum.</PageSubTitle>
        </div>
    );
}

export default About;