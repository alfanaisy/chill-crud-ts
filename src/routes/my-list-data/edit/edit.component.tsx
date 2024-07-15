import { useNavigate, useParams } from 'react-router-dom';
import { useMyListStore } from '../../../stores/my-list.store';
import { ICatalogue2 } from '../../../utils/data/watch-list.data';
import MyListForm from '../../../components/my-list-form/my-list-form.component';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const myList = useMyListStore((state) => state.myList);
  const updateItem = useMyListStore((state) => state.updateItem);

  const foundList = myList.find((item) => item.id === Number(id));

  const onSubmit = (values: ICatalogue2) => {
    updateItem(values);
    navigate('/my-list-data');
  };

  return (
    <div style={{ backgroundColor: 'var(--header-bg)' }}>
      <MyListForm item={foundList} onSubmitHandler={onSubmit} />
    </div>
  );
};

export default Edit;
