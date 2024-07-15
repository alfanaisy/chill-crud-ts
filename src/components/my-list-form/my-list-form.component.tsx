import { SubmitHandler, useForm } from 'react-hook-form';
import { catalogueService, ICatalogue } from '../../services/catalogue.service';
import styles from './my-list-form.module.css';
import useAuthStore from '../../stores/auth.store';
import { useNavigate } from 'react-router-dom';

const MyListForm = ({ item }: { item?: ICatalogue }) => {
  const { register, handleSubmit } = useForm<Partial<ICatalogue>>({
    defaultValues: {
      title: item?.title,
      imageUrl: item?.imageUrl,
      rating: Number(item?.rating) | 0,
      type: item?.type,
    },
  });

  const navigate = useNavigate();

  const { mutateAsync: addItem, isPending } =
    catalogueService.hooks.useCreateCatalogue();

  const session = useAuthStore((state) => state.session);

  const onSubmit: SubmitHandler<Partial<ICatalogue>> = async (data) => {
    if (!item) {
      await addItem({ ...data, userId: session?.user.id });
      navigate('/my-list-data');
    }
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

        <button type="submit" disabled={isPending}>
          {item ? 'Edit' : 'Tambah'}
        </button>
      </form>
    </div>
  );
};

export default MyListForm;
