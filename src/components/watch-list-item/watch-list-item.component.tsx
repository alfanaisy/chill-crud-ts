import { IWatchList } from '../../utils/data/watch-list.data';

import { IoStar } from 'react-icons/io5';
import styles from './watch-list-item.module.css';
import Label from '../label/label.component';

const WatchListItem = ({ item }: { item: IWatchList }) => {
  console.log(item);
  return (
    <div className={styles.itemContainer}>
      <img src={item.imageUrl} alt={item.title} width={'302px'} />
      <div className={styles.itemMeta}>
        <p className={styles.title}>{item.title}</p>

        <p className={styles.rating}>
          <IoStar />
          &nbsp;
          {item.rating}/10
        </p>
      </div>
      {item.isLabeled && <Label label={item.isLabeled} />}
    </div>
  );
};

export default WatchListItem;
