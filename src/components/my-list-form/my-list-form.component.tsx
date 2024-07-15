import { SubmitHandler, useForm } from 'react-hook-form';
import { ICatalogue2 } from '../../utils/data/watch-list.data';
import styles from './my-list-form.module.css';

interface Props {
  item?: ICatalogue2;
  onSubmitHandler: (values: ICatalogue2) => void;
}

const MyListForm = ({ item, onSubmitHandler }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { defaultValues },
  } = useForm<Partial<ICatalogue2>>({
    defaultValues: {
      title: item?.title,
      imageUrl: item?.imageUrl,
      rating: item?.rating,
      type: item?.type,
    },
  });

  console.log(defaultValues);

  const onSubmit: SubmitHandler<Partial<ICatalogue2>> = (data) => {
    const newItem: ICatalogue2 = {
      id: Math.random(),
      title: data.title!,
      imageUrl: data.imageUrl!,
      rating: data.rating!,
      type: data.type!,
    };

    if (item) {
      newItem.id = item.id;
    }
    console.log('onSubmit data', data);
    console.log('onSubmit', newItem);

    onSubmitHandler(newItem);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label htmlFor="title">Title</label>
          <input {...register('title', { required: true })} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="imageUrl">Image URL</label>
          <input {...register('imageUrl', { required: true })} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="rating">Rating</label>
          <input {...register('rating', { required: true })} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="type">Type</label>
          <select {...register('type', { required: true })}>
            <option value="series">Series</option>
            <option value="film">Film</option>
          </select>
        </div>

        <button type="submit">{item ? 'Edit' : 'Tambah'}</button>
      </form>
    </div>
  );
};

export default MyListForm;
