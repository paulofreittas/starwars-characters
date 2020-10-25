import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import StarshipModel from '../../models/Starship';

import loadingGif from '../../assets/loading-gif.gif';

import { StarshipCard } from './styles';

interface StarshipsUrls {
  urls: string[];
}

const Starship: React.FC<StarshipsUrls> = ({ urls }) => {
  const [urlsStarships, setUrlsStarships] = useState<string[]>([]);
  const [data, setData] = useState<StarshipModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUrlsStarships([...urlsStarships, ...urls]);

    getStarship(urls);

    setLoading(false);
  }, [urls]);

  const getStarship = async (urlsApi: string[]) => {
    urlsApi.map(async url => {
      const response = await api.get<StarshipModel>(url);
      setData(oldData => [...oldData, response.data]);
    });
  };

  return (
    <>
      {loading ? (
        <img src={loadingGif} alt="loading" width="200" height="200" />
      ) : (
        data.map(starship => (
          <>
            <StarshipCard>
              <h2>{starship.name}</h2>
              <strong>Model: </strong>
              {starship.model}
              <br />
              <strong>Manufacturer: </strong>
              {starship.manufacturer}
              <br />
              <strong>Cost in credits: </strong>
              {starship.cost_in_credits}
              <br />
              <strong>Length: </strong>
              {starship.length}
              <br />
              <strong>Max atmosphering speed: </strong>
              {starship.max_atmosphering_speed}
              <br />
              <strong>Crew: </strong>
              {starship.crew}
              <br />
              <strong>Passengers: </strong>
              {starship.passengers}
              <br />
              <strong>Cargo capacity: </strong>
              {starship.cargo_capacity}
              <br />
              <strong>Consumables: </strong>
              {starship.consumables}
              <br />
              <strong>Hyperdrive rating: </strong>
              {starship.hyperdrive_rating}
              <br />
              <strong>MGLT: </strong>
              {starship.mglt}
              <br />
              <strong>Starship class: </strong>
              {starship.starship_class}
              <br />
              <p />
            </StarshipCard>
          </>
        ))
      )}
    </>
  );
};

export default Starship;
