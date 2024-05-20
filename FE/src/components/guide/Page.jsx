import { Link } from 'react-router-dom';
import styles from '../../styles/guide/Page.module.css';

const Page = ({ item, style }) => {
    return (
        <Link to={{ pathname: '/guideDetail', search: `?id=${item.id}` }}>
            <div className={styles.pageItem} style={style}>
                <img src={item.thumbnail_img_url} className={styles.image} />
            </div>
        </Link>
    );
}

export default Page;
