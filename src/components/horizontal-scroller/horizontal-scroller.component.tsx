import { ReactNode, useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './horizontal-scroller.module.css';

const HorizontalScroller = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [childWidth, setChildWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current && scrollRef.current.firstChild) {
      const elementItem = scrollRef.current.firstElementChild as HTMLElement;

      setChildWidth(elementItem.offsetWidth + 16);
    }
  }, []);

  const scroll = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += amount;
    }
  };

  return (
    <div className={styles.scrollerContainer}>
      <div className={styles.listContainer} ref={scrollRef}>
        {children}
      </div>
      <div className={styles.leftArrow}>
        <span onClick={() => scroll(-childWidth)}>
          <FaArrowLeft />
        </span>
      </div>

      <div className={styles.rightArrow}>
        <span onClick={() => scroll(childWidth)}>
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default HorizontalScroller;
