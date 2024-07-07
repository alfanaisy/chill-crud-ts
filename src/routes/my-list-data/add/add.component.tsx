import { useNavigate } from 'react-router-dom';
import MyListForm from '../../../components/my-list-form/my-list-form.component';
import { useMyListStore } from '../../../stores/my-list.store';
import { ICatalogue } from '../../../utils/data/watch-list.data';

const Add = () => {
  const navigate = useNavigate();

  const addToList = useMyListStore((state) => state.addToList);

  const onSubmit = (values: ICatalogue) => {
    addToList(values);
    navigate('/my-list-data');
  };

  return (
    <div style={{ backgroundColor: 'var(--header-bg)' }}>
      <MyListForm onSubmitHandler={onSubmit} />
    </div>
  );
};

export default Add;
