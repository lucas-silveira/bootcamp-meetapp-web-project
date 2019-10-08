import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdCreate, MdDeleteForever, MdEvent, MdRoom } from 'react-icons/md';
import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';

import { Container } from './styles';

export default function Details({ match }) {
  const [details, setDetails] = useState({});

  useEffect(() => {
    async function loadDetails() {
      const response = await api.get(`organizing/${match.params.id}`);
      const { url } = response.data.banner;

      setDetails({
        ...response.data,
        dateFormatted: format(
          parseISO(response.data.date),
          "d 'de' MMMM, 'às' HH'h'",
          {
            locale: pt,
          }
        ),
        url,
      });
    }

    loadDetails();
  }, []); // eslint-disable-line

  async function handleDeleteMeetup() {
    await api.delete(`meetups/${match.params.id}`);
    toast.success('O meetup foi deletado');
    history.push('/dashboard');
  }

  return (
    <Container>
      <header>
        <h2>{details.title}</h2>
        <aside>
          <Link to={`/edit/${details.id}`}>
            <MdCreate size={14} />
            Editar
          </Link>
          <button type="button" onClick={handleDeleteMeetup}>
            <MdDeleteForever size={14} />
            Cancelar
          </button>
        </aside>
      </header>

      <main>
        <img src={details.url} alt={details.title} />

        <article>{details.description}</article>
      </main>

      <footer>
        <span>
          <MdEvent size={14} />
          {details.dateFormatted}
        </span>
        <address>
          <MdRoom size={14} />
          {details.location}
        </address>
      </footer>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
