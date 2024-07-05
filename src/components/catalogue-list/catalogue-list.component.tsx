import { ReactNode } from 'react';
import HorizontalScroller from '../horizontal-scroller/horizontal-scroller.component';

import styles from './catalogue-list.module.css';

interface Props {
  title: string;
  children: ReactNode;
}

const CatalogueList = ({ title, children }: Props) => {
  return (
    <div className={styles.listContainer}>
      <h3>{title}</h3>
      <HorizontalScroller>{children}</HorizontalScroller>
    </div>
  );
};

export default CatalogueList;
