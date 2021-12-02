import * as React from 'react'
import {FC} from 'react'
import {Typography} from '@material-ui/core'
import InfoApp from './components/InfoApp'
import {informazioni} from './info.constants'


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


