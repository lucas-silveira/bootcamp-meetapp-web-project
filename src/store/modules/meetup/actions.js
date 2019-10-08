export function createMeetup(data) {
  return {
    type: '@meetup/CREATE',
    payload: { data },
  };
}

export function updateMeetup(data) {
  return {
    type: '@meetup/UPDATE',
    payload: { data },
  };
}

export function MeetupFailure() {
  return {
    type: '@meetup/FAILURE',
  };
}
