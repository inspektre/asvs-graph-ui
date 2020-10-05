import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from './card';


const useStyles = makeStyles({
    root: {
        minWidth: 75,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Home = () => {
    const classes = useStyles();

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