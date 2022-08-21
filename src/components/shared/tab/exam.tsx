import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
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
                <Box p={3} style={{ padding: '3rem 0' }}>
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
    styles?: object;
}

export default function     SimpleTabs({
    tabs,
    tabPanel,
    appBar,
    appContainerClass,
    defaultActive,
    tabClass,
    tabIndex,
    styles,
}: Props): JSX.Element {
    const style = useStyles();
    const [currentTab, setCurrentTab] = React.useState();
    const [value, setValue] = React.useState(tabIndex ? tabIndex : 0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={`${style.root} ${appContainerClass}`}>
            <AppBar
                position="static"
                className={`${appBar} ${style.tabContainer} ${
                    defaultActive ? style.noPadding : ''
                }`}
            >   
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    variant="scrollable"
                    style={{}}
                    TabIndicatorProps={
                        !defaultActive
                            ? {
                                  style: {
                                      height: '0px',
                                  },
                              }
                            : {
                                  style: {
                                      height: '2px',
                                  },
                              }
                    }
                    className={tabClass} 
                >
                    {tabs?.map((tab, index) => (
                        <Tab
                            style={styles}
                            label={
                                <p>
                                    <span
                                        className={`${style.textTransform} ${
                                            !defaultActive && value === index
                                                ? style.active
                                                : ''
                                        } ${!defaultActive ? style.tab : ''}`}
                                    >
                                        {tab}
                                    </span>
                                    {index < tabs.length - 1 &&
                                        !defaultActive && (
                                            <span className={style.pipe}>
                                                |
                                            </span>
                                        )}
                                </p>
                            }
                            {...a11yProps(index)}
                            key={index}
                        />
                    ))}
                </Tabs>
            </AppBar>
            {tabPanel.map((panel, index) => (
                <TabPanel value={value} index={index} key={index}>
                    {panel}
                </TabPanel>
            ))}
        </div>
    );
}
