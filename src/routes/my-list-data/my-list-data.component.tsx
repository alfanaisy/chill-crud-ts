import { useNavigate } from 'react-router-dom';
import { useMyListStore } from '../../stores/my-list.store';
import styles from './my-list-data.module.css';

const MyListData = () => {
  const myList = useMyListStore((state) => state.myList);
  const deleteItem = useMyListStore((state) => state.deleteItem);

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
      {myList.length === 0 ? (
        <h6>Tidak ada data</h6>
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
              {myList.map((item, idx) => (
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
                    <button
                      onClick={() => {
                        navigate(`/my-list-data/${item.id}`);
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
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
