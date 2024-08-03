import CatalogueItem from '../../components/catalogue-item/catalogue-item.component';
import CatalogueList from '../../components/catalogue-list/catalogue-list.component';
import Hero from '../../components/hero/hero.component';
import WatchList from '../../components/watch-list/watch-list.component';
import { homeService } from '../../services/home.service';

const Home = () => {
  const { data: todaysTop } = homeService.hooks.useGetTodaysTop();
  const { data: trending } = homeService.hooks.useGetTrendingFilm();
  const { data: newRelease } = homeService.hooks.useGetNewRelease();

  return (
    <>
      <Hero />
      <WatchList />
      <CatalogueList title="Top Rating Film dan Series Hari ini">
        {todaysTop?.map((item) => (
          <CatalogueItem key={item.id} item={item} />
        ))}
      </CatalogueList>
      <CatalogueList title="Film Trending">
        {trending?.map((item) => (
          <CatalogueItem key={item.id} item={item} />
        ))}
      </CatalogueList>
      <CatalogueList title="Rilis Baru">
        {newRelease?.map((item) => (
          <CatalogueItem key={item.id} item={item} />
        ))}
      </CatalogueList>
    </>
  );
};

export default Home;
