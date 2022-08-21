import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useAppSelector } from '@redux/hooks';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Auth } from '@utils/index';
import useStyle from './style'; 
interface Props {
    header: any;
    body?: any;
    headerClass?: string;
    children?: JSX.Element | string;
    isActive?: boolean;
    onChange?: Function;
    index?: number;
    accordionClass?: string;
    disable?: boolean;
    iconPlus?: boolean
    options?: [];
    content?: any
} 

export default function ControlledAccordions({
    header,
    body,
    children,
    headerClass,
    isActive,
    onChange,
    accordionClass,
    iconPlus,
    index = null,
    disable,
    options,
    content
}: Props) {
    
    const style = useStyle();
    const user = useAppSelector(({ user }) => user);
    // const isManager = Auth(user).isManager(content?.centreId);
    
    return (
        <div className={style.root}>  
            <Accordion
                expanded={isActive}
                style={{ borderRadius: 0 }}
                className={accordionClass}
                onChange={() => onChange && onChange()}
                disabled={disable}
            >
                <AccordionSummary
                    expandIcon={
                        iconPlus 
                        ? isActive === true ? <RemoveIcon color="primary" /> : <AddIcon color="primary" />
                        : <ExpandMoreIcon />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={headerClass}
                >
                    {header}
                </AccordionSummary>
                <AccordionDetails>{body || children}</AccordionDetails>
            </Accordion>
        </div>
    );
}
