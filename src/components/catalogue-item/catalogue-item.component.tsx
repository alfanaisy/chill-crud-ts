import { ICatalogue } from '../../utils/data/watch-list.data';

import styles from './catalogue-item.module.css';

const CatalogueItem = ({ item }: { item: ICatalogue }) => {
  return (
    <div className={styles.itemContainer}>
      <img src={item.imageUrl} alt={item.title} />
    </div>
  );
};

export default CatalogueItem;
