import React, { useEffect, useContext } from 'react'
import { Line } from 'react-chartjs-2'
import { GlobalContext } from '../context/GlobalState';
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


const LineChart = ({ countryName }) => {
    const { isLoading, lineChartData, setLineChartData } = useContext(GlobalContext);
    const classes = useStyles();

    const fetchData = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://api.covid19api.com/total/dayone/country/${countryName}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setLineChartData(result)

            })
            .catch(error => console.log('error', error));
    }

    useEffect(fetchData, [countryName]);


    return (

        <div>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h6" component="h6" align="left" color="textPrimary">Infection Trend</Typography>
                {
                    isLoading ?
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            // minHeight="100vh"
                        >
                            <Skeleton variant="circle" height="400px" width="400px" />
                        </Box>
                        :
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            // minHeight="96vh"
                        >
                            <Line data={lineChartData} />
                        </Box>
                }
            </Paper>
        </div>
    )
}

export default LineChart
