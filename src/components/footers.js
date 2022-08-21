import React from 'react';
import { Grid } from '@material-ui/core';
import logo from '../images/logoo.png';

function Index() {
    return (
        <div>
            <div style={{ backgroundColor: '#212121' }}>
                <Grid container style={{ paddingTop: 50 }}>
                    <Grid
                        item
                        xs={12}
                        style={{
                            paddingBottom: 50,
                            textAlign: 'center',
                            marginLeft: '10%',
                            marginRight: '10%',
                        }}
                    >
                        <p
                            style={{
                                color: '#f5f5f5',
                                fontSize: 12,
                                fontFamily: 'arial',
                            }}
                        >
                            &copy; Contentionary 2021
                        </p>
                        <p
                            style={{
                                color: '#f5f5f5',
                                fontSize: 12,
                                fontFamily: 'arial',
                            }}
                        >
                            For more inquiry - inquiry@contentionary.com | Chat
                            via whatsapp: +234 803 753 7762
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Index;
