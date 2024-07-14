import { useNavigate } from 'react-router-dom';
import { useMyListStore } from '../../stores/my-list.store';
import styles from './my-list-data.module.css';
import { BiEdit, BiTrash } from 'react-icons/bi';
import useMyList from '../../hooks/useMyList';
import useUserStore from '../../stores/user.store';

const MyListData = () => {
  // const myList = useMyListStore((state) => state.myList);
  // const deleteItem = useMyListStore((state) => state.deleteItem);

  const user = useUserStore((state) => state.currentUser);
  const { data } = useMyList(user!.uid);

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
