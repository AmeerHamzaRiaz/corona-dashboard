import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Pie } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton'
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '50.5vh'
    },
}));

const PieChart = ({ dataSet }) => {
    const classes = useStyles();
    const { isLoading } = useContext(GlobalContext);

    return (

        <Paper className={classes.paper} elevation={3}>
        <Typography variant="h6" component="h6" align="left" color="textPrimary">Infection Summary</Typography>
            {
                isLoading ?
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        // minHeight="50vh"
                    >
                        Loading
                        {/* <Skeleton variant="circle" height="400px" width="400px" /> */}
                    </Box>
                    :
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        // maxHeight="500px"
                    >
                        <Pie data={dataSet} /> 
                    </Box>
            }
        </Paper>
    )
}

export default PieChart
