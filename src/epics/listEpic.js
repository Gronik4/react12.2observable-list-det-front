import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs';
import { listRequest, listResult, listError } from '../reduxes/sliseList';

export const listRequestEpic = actions$ => actions$.pipe(
  ofType(listRequest),
  switchMap(() => ajax.getJSON(process.env.REACT_APP_MAIN_URL).pipe(
    map(o => listResult(o)),
    catchError(e => of(listError(e))),
  )),
);
