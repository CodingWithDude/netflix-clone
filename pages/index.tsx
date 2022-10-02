import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Row from '../components/Row';
import { Movie } from '../typings';
import requests from '../utils/requests';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  adventureMovies: Movie[];
  animationMovies: Movie[];
  comedyMovies: Movie[];
  crimeMovies: Movie[];
  documentaries: Movie[];
  dramaMovies: Movie[];
  familyMovies: Movie[];
  fantasyMovies: Movie[];
  historyMovies: Movie[];
  horrorMovies: Movie[];
  musicMovies: Movie[];
  mysteryMovies: Movie[];
  romanceMovies: Movie[];
  sciFiMovies: Movie[];
  tvMovies: Movie[];
  thrillerMovies: Movie[];
  warMovies: Movie[];
  westernMovies: Movie[];
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  adventureMovies,
  animationMovies,
  comedyMovies,
  crimeMovies,
  documentaries,
  dramaMovies,
  familyMovies,
  fantasyMovies,
  historyMovies,
  horrorMovies,
  musicMovies,
  mysteryMovies,
  romanceMovies,
  sciFiMovies,
  tvMovies,
  thrillerMovies,
  warMovies,
  westernMovies,
}: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to=[#010511] lg:h-[140vh] ">
      <Head>
        <title>Home - Netflix</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-4">
          <Row
            title="Trending Now"
            movies={trendingNow}
          />
          <Row
            title="Top Rated"
            movies={topRated}
          />
          <Row
            title="Action"
            movies={actionMovies}
          />
          {/* My List */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}
          <Row
            title="Adventure"
            movies={adventureMovies}
          />
          <Row
            title="Animation"
            movies={animationMovies}
          />
          <Row
            title="Comedy"
            movies={comedyMovies}
          />
          <Row
            title="Crime"
            movies={crimeMovies}
          />
          <Row
            title="Documentaries"
            movies={documentaries}
          />
          <Row
            title="Drama"
            movies={dramaMovies}
          />
          <Row
            title="Family"
            movies={familyMovies}
          />
          <Row
            title="Fantasy"
            movies={fantasyMovies}
          />
          <Row
            title="History"
            movies={historyMovies}
          />
          <Row
            title="Scary Movies"
            movies={horrorMovies}
          />
          <Row
            title="Music"
            movies={musicMovies}
          />
          <Row
            title="Mystery"
            movies={mysteryMovies}
          />
          <Row
            title="Romance"
            movies={romanceMovies}
          />
          <Row
            title="Sci-Fi"
            movies={sciFiMovies}
          />
          <Row
            title="TV Movies"
            movies={tvMovies}
          />
          <Row
            title="Thrillers"
            movies={thrillerMovies}
          />
          <Row
            title="War"
            movies={warMovies}
          />
          <Row
            title="Western"
            movies={westernMovies}
          />
        </section>
      </main>
      {/* Modal */}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    adventureMovies,
    animationMovies,
    comedyMovies,
    crimeMovies,
    documentaries,
    dramaMovies,
    familyMovies,
    fantasyMovies,
    historyMovies,
    horrorMovies,
    musicMovies,
    mysteryMovies,
    romanceMovies,
    sciFiMovies,
    tvMovies,
    thrillerMovies,
    warMovies,
    westernMovies,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchAdventureMovies).then((res) => res.json()),
    fetch(requests.fetchAnimationMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchCrimeMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    fetch(requests.fetchDramaMovies).then((res) => res.json()),
    fetch(requests.fetchFamilyMovies).then((res) => res.json()),
    fetch(requests.fetchFantasyMovies).then((res) => res.json()),
    fetch(requests.fetchHistoryMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchMusicMovies).then((res) => res.json()),
    fetch(requests.fetchMysteryMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchSciFiMovies).then((res) => res.json()),
    fetch(requests.fetchTvMovies).then((res) => res.json()),
    fetch(requests.fetchThrillerMovies).then((res) => res.json()),
    fetch(requests.fetchWarMovies).then((res) => res.json()),
    fetch(requests.fetchWesternMovies).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      adventureMovies: adventureMovies.results,
      animationMovies: animationMovies.results,
      comedyMovies: comedyMovies.results,
      crimeMovies: crimeMovies.results,
      documentaries: documentaries.results,
      dramaMovies: dramaMovies.results,
      familyMovies: familyMovies.results,
      fantasyMovies: fantasyMovies.results,
      historyMovies: historyMovies.results,
      horrorMovies: horrorMovies.results,
      musicMovies: musicMovies.results,
      mysteryMovies: mysteryMovies.results,
      romanceMovies: romanceMovies.results,
      sciFiMovies: sciFiMovies.results,
      tvMovies: tvMovies.results,
      thrillerMovies: thrillerMovies.results,
      warMovies: warMovies.results,
      westernMovies: westernMovies.results,
    },
  };
};
