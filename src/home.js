import React from 'react';
import { Container, Grid } from '@material-ui/core';
import SimpleCard from './card';




const Home = () => {

    return (
        <Container maxWidth={false}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <SimpleCard name="Architecture"/>
                </Grid>
                <Grid item xs={4}>
                    <SimpleCard name="Authentication"/>
                </Grid>
                <Grid item xs={4}>
                    <SimpleCard name="Communications"/>
                </Grid>
                
            </Grid>
      </Container>
    )
};

export default Home;