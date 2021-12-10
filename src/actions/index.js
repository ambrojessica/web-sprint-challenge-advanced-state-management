import axios from 'axios';

export const START_SMURF = 'START_SMURF';
export const SUCCESS_SMURF = 'SUCCESS_SMURF';
export const ERROR_SMURF = 'ERROR_SMURF';
export const NEW_SMURF = 'NEW_SMURF';
export const FAIL_SMURF = 'FAIL_SMURF';

export const fetchSmurfs = () => dispatch => {
  dispatch(startSmurf());
  axios.get(`http://localhost:3333/smurfs`)
    .then(resp => {
      const smurfs = resp.data;
      dispatch(successSmurf(smurfs));
    })
    .catch(err => {
      dispatch(errorSmurf(err));
    });
};

export const newSmurf = (addSmurf) => {
  axios.post(`http://localhost:3333/smurfs`, addSmurf)
    .then(resp => {
      console.log('post:', resp);
    })
    .catch(resp => {
      console.log('error:', resp);
    });
};

export const startSmurf = () => {
  return ({ type: START_SMURF });
};

export const successSmurf = (smurfs) => {
  return ({ type: SUCCESS_SMURF, payload: smurfs });
};

export const errorSmurf = (errorMessage) => {
  return ({ type: ERROR_SMURF, payload: errorMessage });
};

// export const newSmurf = (addSmurf) => {
//   return ({ type: NEW_SMURF, payload: addSmurf });
// };

export const failSmurf = (error) => {
  return ({ type: FAIL_SMURF, payload: error });
};;


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.