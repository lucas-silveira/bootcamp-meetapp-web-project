import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const meetups = response.data.map(meet => {
        meet.date = format(parseISO(meet.date), "d 'de' MMMM, 'às' HH'h'", {
          locale: pt,
        });
        return {
          id: meet.id,
          title: meet.title,
          date: meet.date,
        };
      });

      setMeetup(meetups);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <Link to="/new">
          <MdAddCircleOutline size={14} />
          Novo meetup
        </Link>
      </header>

      <ul>
        {meetup.map(meet => (
          <Meetup key={meet.id} to={`/meetup/${meet.id}`}>
            <strong>{meet.title}</strong>
            <aside>
              <span>{meet.date}</span>
              <MdChevronRight size={20} />
            </aside>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
