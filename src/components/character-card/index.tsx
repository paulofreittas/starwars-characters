import React, { useState } from 'react';

import Modal from 'react-modal';

import Starship from '../starships/index';

import Character from '../../models/Character';

import { Card, StarshipsButton } from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#f0f0f5',
  },
};

const CharacterCard: React.FC<Character> = ({
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  mass,
  name,
  skin_color,
  starships,
  url,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${url
            .slice(0, -1)
            .split('/')
            .pop()}.jpg`}
          alt="Luke Skywalker"
        />
        <h2>{name}</h2>
        <strong>Height: </strong>
        {height}
        <br />
        <strong>Mass: </strong>
        {mass}
        <br />
        <strong>Hair color: </strong>
        {hair_color}
        <br />
        <strong>Skin color: </strong>
        {skin_color}
        <br />
        <strong>Eye color: </strong>
        {eye_color}
        <br />
        <strong>Birth year: </strong>
        {birth_year}
        <br />
        <strong>Gender: </strong>
        {gender}
        <br />
        {starships.length > 0 && (
          <StarshipsButton
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            Starships
          </StarshipsButton>
        )}
      </Card>
      {openModal && (
        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Starship urls={starships} />
        </Modal>
      )}
    </>
  );
};

export default CharacterCard;
