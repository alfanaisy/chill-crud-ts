import { BiEdit, BiTrash } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { catalogueService } from '../../services/catalogue.service';
import useAuthStore from '../../stores/auth.store';
import styles from './my-list-data.module.css';

const MyListData = () => {
  const session = useAuthStore((state) => state.session);
  const { data } = catalogueService.hooks.useGetCatalogues(session!.user.id);

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h3>My List Data</h3>
        <button
          onClick={() => {
            navigate('/my-list-data/add');
          }}
        >
          Add Data
        </button>
      </div>
      {data?.length === 0 ? (
        <h6 className={styles.noData}>
          Belum ada data. Silakan tambahkan data
        </h6>
      ) : (
        <div>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHeader}>
                <th>No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, idx) => (
                <tr key={item.id}>
                  <td>{idx + 1}</td>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className={styles.tableImg}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.rating}</td>
                  <td>
                    <div className={styles.btnContainer}>
                      <button
                        className={`${styles.btn} ${styles.edit}`}
                        onClick={() => {
                          navigate(`/my-list-data/${item.id}`);
                        }}
                      >
                        <BiEdit />
                      </button>
                      <button
                        className={`${styles.btn} ${styles.delete}`}
                        // onClick={() => deleteItem(item.id)}
                      >
                        <BiTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListData;
