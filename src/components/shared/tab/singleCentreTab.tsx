import React, {useEffect, useState} from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Dropdown from '@components/shared/dropdown/menu'; 
import PropTypes from 'prop-types';
import {HideSmDown, HideMdUp} from '../../hide';
import MenuIcon from '@material-ui/icons/Menu';
import useGblobalStyle from '../../../styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Button from '../../button';
import useStyles from './style';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} style={{ padding: '2rem 0' }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
interface Props {
    tabs: string[] | any | JSX.Element;
    tabPanel: JSX.Element[] | any;
    appBar?: string;
    appContainerClass?: string;
    defaultActive?: boolean;
    tabClass?: string;
    tabIndex?: number;
    centre?: any;
    entityCounters?: any;
}

export default function SimpleTabs({
    tabs,
    tabPanel,
    appBar,
    appContainerClass,
    defaultActive,
    tabClass,
    tabIndex,
    centre,
    entityCounters
}: Props): JSX.Element {
    const style = useStyles();
    const globalStyle = useGblobalStyle();
    const [value, setValue] = React.useState(0); 
    const [currentWidth, setCurrentWidth] = useState<number>()

    useEffect(() => {
        setCurrentWidth(window.innerWidth)
    },[])
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const sideMenu = [
        {
            name: 'Subscribers',
            content: entityCounters.subscribers,
        },
        {
            name: 'Exams',
            content: entityCounters.exams,
        },
        {
            name: 'Online Courses',
            content: entityCounters.courses,
        },
        {
            name: 'Publications',
            content: entityCounters.publications,
        },
        {
            name: 'Leagues',
            content: entityCounters.leagues,
        },
        {
            name: 'Questions',
            content: entityCounters.questions,
        },
    ];

    function MenuFunc(menus, className) {
        return menus.map((menu, index) => (
            <p key={index} className={`${globalStyle.paddingLR1rem} ${globalStyle.displayFlex}  ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw}  ${globalStyle.bottom1rem}`} style={{backgroundColor: 'white',}}>
                <span className={className} >{menu.name}</span>
                <span className={style.contentCount} >{menu.content}</span>
            </p>
        ));
    }
  
    return (
        <div className={`${style.root} ${appContainerClass}`}>
            <AppBar 
                position="static"
                className={`${appBar} ${style.tabCentreContainer} ${
                    defaultActive ? style.noPadding : ''
                }`}
            >  
                <div className={style.tabFlexContainer}>
                    <div className={style.centreNameButton}>
                        <p
                            onClick={() => {}}
                            className={style.centreNameButtonParagraph}
                        >
                            {centre.name}
                        </p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                    <Tabs
                        value={value}
                        onChange={handleChange} 
                        aria-label="simple tabs example"
                        variant="scrollable"
                        TabIndicatorProps={{
                            style: {
                                display: "none", 
                            },
                        }}
                        className={`${tabClass} ${style.tabsClass}`}
                    >  
                        {tabs.map((tab, index) => (
                            <Tab
                            className={style.tabClass}
                                label={
                                    <p> 
                                        <span
                                            className={`${style.textTransform} ${
                                                defaultActive && value === index
                                                    ? style.activeRed
                                                    : ''
                                            } ${!defaultActive ? style.tab : ''}`}
                                            
                                        >
                                            {tab}
                                        </span>
                                    </p>
                                }
                                {...a11yProps(index)}
                                key={index}
                            />
                        ))} 
                    </Tabs> 
                    
                    </div>
                </div>
            </AppBar>
            {tabPanel.map((panel, index) => (
                <TabPanel value={value} index={index} key={index}>
                    {panel}
                </TabPanel>
            ))}
        </div>
    );
}
