import React, { useEffect, useContext } from 'react';
import StatCardItem from './StatCardItem'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '16px'
    },
}));


const StatCardList = ({ resource }) => {

    useEffect(() => {
        setData(resource.fetchSummary.read().Global);
    }, [resource.fetchSummary.read().Global])

    const { cardData, setData } = useContext(GlobalContext);

    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2} justify="center">
            {
                cardData.map((item, index) =>
                    (
                        <Grid item xs={12} md={3} key={index}>
                            <StatCardItem title={item.title} totalCount={item.totalCount} newCount={item.newCount} trendPercentage={item.trendPercentage} />
                        </Grid>
                    ))
            }
        </Grid>
    );
}

export default StatCardList;
