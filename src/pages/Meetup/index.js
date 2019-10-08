import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container } from './styles';

import { createMeetup, updateMeetup } from '~/store/modules/meetup/actions';

import BannerInput from './components/BannerInput';
import DatePicker from './components/DateInput';

const schema = Yup.object().shape({
  banner_id: Yup.string(),
  title: Yup.string().required('Você precisar adicionar um título.'),
  description: Yup.string().required('Você precisar adicionar uma descrição.'),
  date: Yup.date().required('Você precisar adicionar uma data.'),
  location: Yup.string().required('Você precisar adicionar uma localização.'),
});

export default function Meetup({ match }) {
  const dispatch = useDispatch();
  const [details, setDetails] = useState(false);

  useEffect(() => {
    async function loadDetails() {
      const response = await api.get(`organizing/${match.params.id}`);
      setDetails(response.data);
    }

    loadDetails();
  }, []); //eslint-disable-line

  function handleSubmitCreate(data) {
    dispatch(createMeetup(data));
  }

  function handleSubmitUpdate(data) {
    dispatch(
      updateMeetup({
        id: match.params.id,
        ...data,
      })
    );
  }

  return (
    <Container>
      <Form
        schema={schema}
        initialData={details}
        onSubmit={details ? handleSubmitUpdate : handleSubmitCreate}
      >
        <BannerInput name="banner_id" />

        <Input name="title" placeholder="Título do meetup" />
        <Input
          multiline
          rows={6}
          name="description"
          placeholder="Descrição completa"
          value={details.description}
        />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={14} /> Salvar meetup
        </button>
      </Form>
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

Meetup.defaultProps = {
  match: null,
};
