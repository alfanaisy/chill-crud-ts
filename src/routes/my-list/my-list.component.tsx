import { Link } from 'react-router-dom';
import CatalogueItem from '../../components/catalogue-item/catalogue-item.component';

import { catalogueService } from '../../services/catalogue.service';
import useAuthStore from '../../stores/auth.store';
import styles from './my-list.module.css';

const MyList = () => {
  const session = useAuthStore((state) => state.session);

  const { data, error } = catalogueService.hooks.useGetCatalogues(
    session!.user.id
  );

  if (error) console.log(error);

  console.log(data);

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
