import { ICatalogue } from '../../services/catalogue.service';
import Label from '../label/label.component';

import styles from './catalogue-item.module.css';

const CatalogueItem = ({ item }: { item: ICatalogue }) => {
  return (
    <div className={styles.itemContainer}>
      <img src={item.imageUrl} alt={item.title} />
      {item.isLabeled && <Label label={item.isLabeled} />}
    </div>
  );
};

export default CatalogueItem;
