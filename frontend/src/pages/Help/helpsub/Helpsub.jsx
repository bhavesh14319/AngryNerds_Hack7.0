import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Helpsub.css'

export default function Helpsub({ topic, helplist }) {
    return (
        <div className="farmeasy__helpsub">
            <div className="farmeasy__helpsub-topic">
                <p>{topic}</p>
            </div>

            <div className="helpsub__wrapper">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>
                            <p className="helpsub__heading">{helplist[0].heading}</p>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p className="helpsub__desc">
                                {helplist[0].content}
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className="helpsub__wrapper">

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>
                            <p className="helpsub__heading">{helplist[1].heading}</p>

                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p className="helpsub__desc">
                                {helplist[1].content}
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="helpsub__wrapper">

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>
                            <p className="helpsub__heading">{helplist[2].heading}</p>

                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p className="helpsub__desc">
                                {helplist[2].content}
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}