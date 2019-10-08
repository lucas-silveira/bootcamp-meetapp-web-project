import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { MeetupFailure } from './actions';

export function* createMeetup({ payload }) {
  try {
    const { title, description, location, date, banner_id } = payload.data;

    yield call(api.post, 'meetups', {
      title,
      description,
      location,
      date,
      image: Number(banner_id),
    });

    history.push('/dashboard');
    toast.success('O meetup foi criado com sucesso!');
  } catch (err) {
    toast.error('Houve algum erro. Verifique os dados');

    yield put(MeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { id, title, description, location, date, banner_id } = payload.data;

    yield call(api.put, `meetups/${id}`, {
      title,
      description,
      location,
      date,
      image: Number(banner_id),
    });

    history.push(`/meetup/${id}`);
    toast.success('O meetup foi atualizado com sucesso!');
  } catch (err) {
    toast.error('Houve algum erro. Verifique os dados');

    yield put(MeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE', createMeetup),
  takeLatest('@meetup/UPDATE', updateMeetup),
]);
