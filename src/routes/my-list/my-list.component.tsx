import CatalogueItem from '../../components/catalogue-item/catalogue-item.component';
import { useWatchListStore } from '../../stores/watch-list-store';

import styles from './my-list.module.css';

const MyList = () => {
  const todaysTop = useWatchListStore((state) => state.todaysTop);
  return (
    <div className={styles.container}>
      <h3>Daftar Saya</h3>
      <div className={styles.myListContainer}>
        {todaysTop.map((item) => (
          <CatalogueItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
