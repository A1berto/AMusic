import * as React from 'react'
import {FC} from 'react'
import {Typography} from '@material-ui/core'
import InfoApp from './components/InfoApp'
import {AMUSIC_PALETTE_COLORS} from '../../AMusic_theme'

export const informazioni = [
    {
        title: 'Perchè AMusic?',
        subtitle: <>
            <span style={{fontWeight: 'bold'}}> A<span
                style={{color: AMUSIC_PALETTE_COLORS.PURPLE}}>M</span>usic </span>
            nasce per soddisfare la necessità, in particolare di molti giovani, di
            partecipare ad eventi serali come DjSet, Discoteche, Pub, Sale da Ballo e molto altro.
            Definito come social alternativo, permette di prenotare un evento e,
            nel contempo, di visionare chi parteciperà allo stesso.
            <br/>E' inoltre possibile tenere
            traccia degli eventi passati e visionare chi parteciperà agli eventi futuri.
        </>
    },
    {
        title: 'Gestione  profilo',
        subtitle: <>
            Per modificare l'immagine di profilo, clicca sull'icona in alto.
            <br/> <span style={{fontWeight: 'bold'}}>RICORDA:</span> la dimensione dell'immagine scelta non deve superare i <span style={{color:AMUSIC_PALETTE_COLORS.PURPLE}}>5Mb</span>.
            <br/> Per modificare la password dell'account clicca su modifica password, riceverai un email con le relative istruzioni.
        </>
    },
    {
        title: 'Eventi',
        subtitle:  <>
            Digita il luogo, la città o il nome del locale per trovare l'evento giusto per te.
            <br/>Tramite l'apposita <span style={{color:AMUSIC_PALETTE_COLORS.PURPLE}}>barra</span> potrai filtrare il raggio di ricerca degli eventi.
            <br/> Per poter partecipare all'evento clicca la relativa immmagine, potrai visualizzare i dettagli e procedere con il pagamento.
        </>
    },
    {
        title: 'Community',
        subtitle:  <>
            Entra nella lista degli amici per poterli visionare, aggiungere e cancellare.
            <br/>Tramite un fantastico algoritmo ti verranno consigliati gli amici <span style={{color:AMUSIC_PALETTE_COLORS.PURPLE}}>suggeriti</span> ai quali non puoi dire di no!
            <br/> Se la lista degli amici non soddisfa le tue esigenze, sfrutta il campo di ricerca e clicca su <span style={{fontWeight:'bold'}}>CERCA UTENTE</span>
        </>
    },
    {
        title: 'Cronologia eventi',
        subtitle:  <>
            Qui potrai prender visione di tutti gli eventi ai quali hai partecipato.
            <br/>Puoi inoltre vedere l'importo, il codice di transazione, con quale <span style={{color:AMUSIC_PALETTE_COLORS.PURPLE}}>carta</span> hai pagato e la data dell'evento stesso.
            <br/>Se hai bevuto troppo e non ricordi chi era con te, potrai vederlo direttamente da qui!
        </>
    },
    {
        title: 'Curiosità',
        subtitle: <>
            L'applicazione è stata creata da due sviluppatori, Andrea Messina ( back-end ) e Alberto Manuguerra (
            front-end ).
            <br/>Due studenti-lavoratori che hanno intrapreso questa scelta per poter mettere in pratica fin da subito
            tutte le nozioni imparate a lezione.
            <br/>
            <br/>L'hai notato anche tu? Le iniziali dei loro nomi e cognomi sono le stesse, da qui nasce il nome
            <span style={{fontWeight: 'bold'}}> A<span
                style={{color: AMUSIC_PALETTE_COLORS.PURPLE}}>M</span>usic </span>
            che unisce la firma al mood dell'app.
        </>
    }
]

interface IInformazioniApplicazione {
}

const InfosContainer: FC<IInformazioniApplicazione> = () => {
    //React State used to open accordion one at time
    const [expanded, setExpanded] = React.useState<string | false>(false)

    return (
        <div style={{width: '80%'}}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <Typography variant={'h3'} color="primary">Informazioni</Typography>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <Typography variant={'h4'} color="secondary">
                        In questa sezione troverai le risposte a tutte le tue domande
                    </Typography>
                </div>
            </div>

            <div className="row mt-5">
                {
                    informazioni.map((informazione, index) =>
                        <InfoApp key={index}
                                 title={informazione.title}
                                 subtitle={informazione.subtitle}
                                 setExpanded={setExpanded}
                                 expanded={expanded}/>
                    )
                }
            </div>
        </div>
    )
}
export default InfosContainer


