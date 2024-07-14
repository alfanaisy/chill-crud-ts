import { Link } from 'react-router-dom';
import CatalogueItem from '../../components/catalogue-item/catalogue-item.component';

import styles from './my-list.module.css';
import useMyList from '../../hooks/useMyList';
import useUserStore from '../../stores/user.store';

const MyList = () => {
  const user = useUserStore((state) => state.currentUser);

  const { data } = useMyList(user!.uid);

  console.log(data?.map((item) => item.title));

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h3>Daftar Saya</h3>
        <Link to={'/my-list-data'}>
          <h6>Ubah Data</h6>
        </Link>
      </div>
      {data?.length === 0 && (
        <h5 className={styles.noData}>
          Belum ada yang kamu tambahkan ke Daftar
        </h5>
      )}
      <div className={styles.myListContainer}>
        {data?.map((item) => (
          <CatalogueItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
