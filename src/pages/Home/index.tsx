import React, { useState, useEffect, FormEvent } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import api from '../../services/api';

import Character from '../../models/Character';

import CharacterCard from '../../components/character-card';

import loadingGif from '../../assets/loading-gif.gif';

import { ContainerForm, Form, ContainerCards } from './styles';

interface ReturnApi {
  count: number;
  next: string;
  previous: string;
  results: Array<Character>;
}

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Character[]>([]);
  const [existNextPage, setExistNextPage] = useState(false);
  const [page, setPage] = useState(1);
  const [nameSearch, setNameSearch] = useState(false);

  const baseUrl = 'http://swapi.dev/api/';

  useEffect(() => {
    GetData();
  }, []);

  async function GetData() {
    setLoading(true);

    const response = await api.get<ReturnApi>(`${baseUrl}people/`);

    setData(response.data.results);
    setExistNextPage(response.data.next.length > 0);
    setLoading(false);
    setNameSearch(false);
    setPage(1);
  }

  async function handleSeachCharacter(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    setLoading(true);

    event.preventDefault();

    const response = await api.get<ReturnApi>(
      `${baseUrl}people/?search=${searchText}`,
    );

    setData(response.data.results);
    setLoading(false);

    if (searchText !== '') setNameSearch(true);
    else setNameSearch(false);

    setPage(1);
  }

  async function handleGetMoreData() {
    if (nameSearch) return;

    setLoading(true);

    const response = await api.get<ReturnApi>(
      `${baseUrl}people/?page=${page + 1}`,
    );

    setData([...data, ...response.data.results]);
    setExistNextPage(response.data.next?.length > 0);
    setLoading(false);
    setPage(page + 1);
  }

  return (
    <>
      <ContainerForm>
        <Form onSubmit={handleSeachCharacter}>
          <input
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder="Enter a name"
          />
          <button type="submit">
            {loading ? <img src={loadingGif} alt="loading" /> : 'search'}
          </button>
        </Form>
      </ContainerForm>
      <ContainerCards>
        <InfiniteScroll
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
          dataLength={data?.length || 0} // This is important field to render the next data
          next={handleGetMoreData}
          hasMore={existNextPage}
          loader={loadingGif}
          refreshFunction={GetData}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={<h3>teste</h3>}
          releaseToRefreshContent=""
        >
          {data?.map(character => (
            <CharacterCard
              key={character.url}
              birth_year={character.birth_year}
              eye_color={character.eye_color}
              gender={character.gender}
              hair_color={character.hair_color}
              height={character.height}
              mass={character.mass}
              name={character.name}
              skin_color={character.skin_color}
              starships={character.starships}
              url={character.url}
            />
          ))}
        </InfiniteScroll>
      </ContainerCards>
    </>
  );
};

export default Home;
