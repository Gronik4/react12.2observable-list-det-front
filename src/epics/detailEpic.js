import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs';
import { detChoice, detRequest, detResult, detError } from '../reduxes/sliseDetails';

export const detChoiceEpic = actions$ => actions$.pipe(
  ofType(detChoice),
  map(o => o.payload),
  map(o => detRequest(o))
);

export const detRequestEpic = actions$ => actions$.pipe(
  ofType(detRequest),
  map(o => o.payload),
  switchMap(o => ajax.getJSON(process.env.REACT_APP_MAIN_URL+o).pipe(
    map(o => detResult(o)),
    catchError(e => of(detError(e)))
  ))
)
