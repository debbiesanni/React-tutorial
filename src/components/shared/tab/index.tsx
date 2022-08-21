import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import useStyles from './style';

function TabPanel(props) {
    const { children, value, index, classes, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className={classes}
        >
            {value === index && (
                <Box p={3} style={{ padding: '1rem 0' }}>
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
    classes: PropTypes.object || PropTypes.string,
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
    tabStyle?: object;
    line?: boolean;
    tabPanelStyle?: object | string;
    appStyle?: object;
    parentTab?: object;
    tabIndicatorBorder?: string;
    content?: any;
    orientation?: 'horizontal' | 'vertical';
    ids?: string[];
    setId?: any;
    router?: any;
    singleTabStyle?: any;
    topTab?: any;
}

export default function SimpleTabs({
    tabs,
    tabPanel,
    appBar,
    appContainerClass, 
    defaultActive,
    tabClass,
    tabIndex,
    styles,
    tabStyle,
    tabPanelStyle,
    parentTab,
    line,
    appStyle,
    orientation,
    tabIndicatorBorder,
    ids,
    setId,
    router,
    singleTabStyle,
    content,
    topTab
}: Props): JSX.Element {
    const style = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (setId) {
            setId(ids[newValue]);
        }
        if (router) {
            router.push(
                `/public-exams?publicCategoryId=${ids[newValue]}&limit=50`
            );
        }
    };

    return (
        <div className={`${style.root} ${appContainerClass}`} style={parentTab}> 
            <AppBar
                position="static"
                className={`${appBar} ${style.tabContainer} ${
                    defaultActive ? style.noPadding : ''
                }`}
                style={appStyle} 
            >
                {topTab && <div>{topTab}</div>}
                <Tabs 
                    orientation={orientation}
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    variant="scrollable"
                    style={ tabStyle}
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
                                      border: tabIndicatorBorder ? tabIndicatorBorder : '2px solid #F57E27'
                                  },
                              }
                    }
                    className={tabClass} 
                >
                    {tabs.map((tab, index) => (
                        <Tab
                            style={singleTabStyle}
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
                                        line &&
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
                    {content && <main>{content}</main>}
                </Tabs>
            </AppBar>
            {tabPanel.map((panel, index) => (
                <TabPanel classes={tabPanelStyle} value={value} index={index} key={index}>
                    {panel}
                </TabPanel>
            ))}
        </div>
    );
}
