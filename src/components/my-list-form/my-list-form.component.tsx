import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { catalogueService, ICatalogue } from '../../services/catalogue.service';
import useAuthStore from '../../stores/auth.store';
import styles from './my-list-form.module.css';

const MyListForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const isAddMode = !id;

  const session = useAuthStore((state) => state.session);
  const { data } = catalogueService.hooks.useFindCatalogue(
    session!.user.id,
    Number(id)
  );

  const { register, handleSubmit, reset } = useForm<Partial<ICatalogue>>({
    defaultValues: {
      title: data?.[0].title,
      imageUrl: data?.[0].imageUrl,
      rating: data?.[0].rating,
      type: data?.[0].type,
    },
  });

  useEffect(() => {
    if (data) {
      reset({
        title: data?.[0].title,
        imageUrl: data?.[0].imageUrl,
        rating: data?.[0].rating,
        type: data?.[0].type,
      });
    }
  }, [data, reset]);

  const { mutateAsync: addItem, isPending } =
    catalogueService.hooks.useCreateCatalogue();

  const { mutateAsync: updateItem } = catalogueService.hooks.useEditCatalogue();

  const onSubmit: SubmitHandler<Partial<ICatalogue>> = async (data) => {
    if (isAddMode) {
      await addItem({ ...data, userId: session?.user.id });
      navigate('/my-list-data');
    } else {
      const valuesToUpdate = {
        id: Number(id),
        newItem: {
          ...data,
          userId: session?.user.id,
        },
      };
      await updateItem(valuesToUpdate);
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
          {isAddMode ? 'Tambah' : 'Edit'}
        </button>
      </form>
    </div>
  );
};

export default MyListForm;
