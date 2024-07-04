import { IWatchList } from '../../utils/data/watch-list.data';

import styles from './watch-list-item.module.css';

const WatchListItem = ({ item }: { item: IWatchList }) => {
  return (
    <div className={styles.itemContainer}>
      <img src={item.imageUrl} alt={item.title} width={'302px'} />
      <p>{item.title}</p>
    </div>
  );
};

export default WatchListItem;
