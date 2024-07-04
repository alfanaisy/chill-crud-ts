import { ReactNode } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './horizontal-scroller.module.css';

const HorizontalScroller = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.scrollerContainer}>
      <div className={styles.listContainer}>{children}</div>
      <div className={styles.leftArrow}>
        <span>
          <FaArrowLeft />
        </span>
      </div>

      <div className={styles.rightArrow}>
        <span>
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default HorizontalScroller;
