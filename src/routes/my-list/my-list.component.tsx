import CatalogueItem from '../../components/catalogue-item/catalogue-item.component';
import { useMyListStore } from '../../stores/my-list.store';

import styles from './my-list.module.css';

const MyList = () => {
  const myList = useMyListStore((state) => state.myList);

  return (
    <div className={styles.container}>
      <h3>Daftar Saya</h3>
      <div className={styles.myListContainer}>
        {myList.map((item) => (
          <CatalogueItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
