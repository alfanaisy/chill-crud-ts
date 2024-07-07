import { Link } from 'react-router-dom';
import CatalogueItem from '../../components/catalogue-item/catalogue-item.component';
import { useMyListStore } from '../../stores/my-list.store';

import styles from './my-list.module.css';

const MyList = () => {
  const myList = useMyListStore((state) => state.myList);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h3>Daftar Saya</h3>
        <Link to={'/my-list-data'}>
          <h6>Ubah Data</h6>
        </Link>
      </div>
      <div className={styles.myListContainer}>
        {myList.length === 0 && (
          <h5>Belum ada yang kamu tambahkan ke Daftar</h5>
        )}
        {myList.map((item) => (
          <CatalogueItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
