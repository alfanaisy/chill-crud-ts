import { useWatchListStore } from '../../stores/watch-list-store';
import { ICatalogue2 } from '../../utils/data/watch-list.data';
import HorizontalScroller from '../horizontal-scroller/horizontal-scroller.component';
import WatchListItem from '../watch-list-item/watch-list-item.component';

import styles from './watch-list.module.css';

const WatchList = () => {
  const watchList: ICatalogue2[] = useWatchListStore(
    (state) => state.watchlist
  );

  return (
    <div className={styles.watchListContainer}>
      <h3>Melanjutkan Tonton Film</h3>
      <HorizontalScroller>
        {watchList.map((item) => (
          <WatchListItem key={item.id} item={item} />
        ))}
      </HorizontalScroller>
    </div>
  );
};

export default WatchList;
