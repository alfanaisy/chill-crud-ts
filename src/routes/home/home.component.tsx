import CatalogueItem from '../../components/catalogue-item/catalogue-item.component';
import CatalogueList from '../../components/catalogue-list/catalogue-list.component';
import Hero from '../../components/hero/hero.component';
import WatchList from '../../components/watch-list/watch-list.component';
import { useWatchListStore } from '../../stores/watch-list-store';

const Home = () => {
  const todaysTop = useWatchListStore((state) => state.todaysTop);

  return (
    <>
      <Hero />
      <WatchList />
      <CatalogueList title="Top Rating Film dan Series Hari ini">
        {todaysTop.map((item) => (
          <CatalogueItem key={item.id} item={item} />
        ))}
      </CatalogueList>
      <CatalogueList title="Film Trending">
        {todaysTop.map((item) => (
          <CatalogueItem key={item.id} item={item} />
        ))}
      </CatalogueList>
      <CatalogueList title="Rilis Baru">
        {todaysTop.map((item) => (
          <CatalogueItem key={item.id} item={item} />
        ))}
      </CatalogueList>
    </>
  );
};

export default Home;
