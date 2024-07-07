import { FormEvent, useEffect, useState } from 'react';
import { ICatalogue } from '../../utils/data/watch-list.data';

import styles from './my-list-form.module.css';

interface Props {
  item?: ICatalogue;
  onSubmitHandler: (values: ICatalogue) => void;
}

const defaultFormValue = {
  title: '',
  imageUrl: '',
  rating: '',
  type: '',
};

const MyListForm = ({ item, onSubmitHandler }: Props) => {
  const [formValues, setFormValues] = useState(defaultFormValue);
  const { title, imageUrl, rating, type } = formValues;

  useEffect(() => {
    if (item) {
      setFormValues({
        title: item.title,
        imageUrl: item.imageUrl,
        rating: item.rating.toLocaleString(),
        type: item.type,
      });
    }
  }, [item]);

  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const itemToSubmit: ICatalogue = {
      id: Math.random(),
      title,
      imageUrl,
      rating: Number(rating),
      type: 'series',
    };

    if (item) {
      itemToSubmit.id = item.id;
    }

    // console.log('Form Component:', itemToSubmit);

    onSubmitHandler(itemToSubmit);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={onSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={title}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            id="rating"
            name="rating"
            placeholder="Rating"
            value={rating}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="type">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            placeholder="series | film"
            value={type}
            onChange={onChangeHandler}
          />
        </div>

        <button type="submit">{item ? 'Edit' : 'Tambah'}</button>
      </form>
    </div>
  );
};

export default MyListForm;
