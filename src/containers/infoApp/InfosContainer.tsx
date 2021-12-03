import * as React from 'react'
import {FC} from 'react'
import {Typography} from '@material-ui/core'
import InfoApp from './components/InfoApp'
import {AMUSIC_PALETTE_COLORS} from '../../AMusic_theme'

export const informazioni = [
    {
        title: 'Perchè AMusic?',
        subtitle: <>
            <span style={{fontWeight:'bold'}}> A<span style={{color: AMUSIC_PALETTE_COLORS.PURPLE}}>M</span>usic </span>
            nasce per soddisfare la necessità, in particolare di molti giovani, di
            partecipare ad eventi serali come DjSet, Discoteche, Pub, Sale da Ballo e molto altro.
            Definito come social alternativo, permette di prenotare un evento e,
            nel contempo, di visionare chi parteciperà allo stesso. E' inoltre possibile tenere
            traccia degli eventi passati e visionare chi parteciperà agli eventi futuri.
        </>
    },
    {
        title: 'Seconda Domanda?',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
            '                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
            '                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n' +
            '                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
            '                            cupidatat non proident, sunt'
    },
    {
        title: 'Terza Domanda?',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
            '                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
            '                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n' +
            '                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
            '                            cupidatat non proident, sunt'
    },
    {
        title: 'Quarta Domanda?',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
            '                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
            '                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n' +
            '                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
            '                            cupidatat non proident, sunt'
    },
    {
        title: 'Quinta Domanda?',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
            '                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
            '                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n' +
            '                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n' +
            '                            cupidatat non proident, sunt'
    },
    {
        title: 'Curiosità',
        subtitle: <>
            L'applicazione è stata creata da due sviluppatori, Andrea Messina ( back-end ) e Alberto Manuguerra ( front-end ).
            <br/>Due studenti-lavoratori che hanno intrapreso questa scelta per poter mettere in pratica fin da subito
            tutte le nozioni imparate a lezione.
            <br/>
            <br/>L'hai notato anche tu? Le iniziali dei loro nomi e cognomi sono le stesse, da qui nasce il nome
            <span style={{fontWeight:'bold'}}> A<span style={{color: AMUSIC_PALETTE_COLORS.PURPLE}}>M</span>usic </span>
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
                    informazioni.map((informazione,index) =>
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


