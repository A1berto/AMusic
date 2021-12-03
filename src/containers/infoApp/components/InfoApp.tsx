import * as React from 'react'
import {FC} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'




interface IInfoApplicazione {
    title: string
    subtitle: any
    expanded: string | false
    setExpanded: React.Dispatch<React.SetStateAction<string | false>>
}

const InfoApp: FC<IInfoApplicazione> = (props) => {

    const {title, subtitle, expanded, setExpanded} = props


    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Accordion expanded={expanded === title} onChange={handleChange(title)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant="h5">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{subtitle}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}
export default InfoApp