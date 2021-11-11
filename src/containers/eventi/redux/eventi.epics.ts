/**
 *   Ricarico il preventivo a partire dall'idPreve come queryParams
 *   i dati del preventivo sono salvati direttamente sui reducer, al netto di dati CAP la cui azione e' collegata a diversi EPICS
 */
import {Observable} from 'rxjs'
import {ISuccessFetchAction} from 'fetch-with-redux-observable'
import {ofType} from 'redux-observable'
import {fetchPaymentAction} from './eventi.actions'
import {map} from 'rxjs/operators'

/*
export const paymentIntentEpic = (action$: Observable<ISuccessFetchAction>) =>
    action$.pipe(
        ofType(fetchPaymentAction.successActionType),
        map((action: any) => {


            }
        ))
*/
