export function updtaeProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updtaeProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updtaeProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
