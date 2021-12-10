import axios from 'axios';

export const START_SMURF = 'START_SMURF';
export const SUCCESS_SMURF = 'SUCCESS_SMURF';
export const ERROR_SMURF = 'ERROR_SMURF';
export const NEW_SMURF = 'NEW_SMURF';
export const FAIL_SMURF = 'FAIL_SMURF';

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch(startSmurf());
    axios.get('http://localhost:3333/smurfs')
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const startSmurf = () => {
  return ({ type: START_SMURF });
};

export const successSmurf = (smurfs) => {
  return ({ type: SUCCESS_SMURF, payload: smurfs });
};

export const errorSmurf = (errMsg) => {
  return ({ type: ERROR_SMURF, payload: errMsg });
};

export const newSmurf = (addSmurf) => {
  return ({ type: NEW_SMURF, payload: addSmurf });
};

export const failSmurf = (err) => {
  return ({ type: FAIL_SMURF, payload: err });
};;


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.