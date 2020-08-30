import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Pie } from 'react-chartjs-2';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '50.5vh',
    },
    loadingBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: '50vh',
    }
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
                        className={classes.loadingBox}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CircularProgress color="secondary" />
                    </Box>
                    :
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Pie data={dataSet} />
                    </Box>
            }
        </Paper>
    )
}

export default PieChart
