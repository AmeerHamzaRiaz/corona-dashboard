import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CountUpText from './CountUpText';
import ChipComponent from './ChipComponent';


const useStyles = makeStyles({
    root: {
        minWidth: 100,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const StatCardItem = (props) => {
    const { isLoading } = useContext(GlobalContext);

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>{
                isLoading ?
                    (<>
                        <Typography variant="h6" component="h6">
                            <Skeleton />
                        </Typography>
                        <Skeleton width="40px" />
                        <Typography variant="h4" component="h4" align="right">
                            <Skeleton />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary" align="right">
                            <Skeleton />
                        </Typography>
                    </>) : (
                        <>
                            <Typography variant="h6" component="h6">
                                {props.title}
                            </Typography>
                            <ChipComponent title={props.title} trendPercentage={props.trendPercentage} />
                            <CountUpText number={props.totalCount} fontSize="h4" title={props.title} />
                            <CountUpText className={classes.pos} number={props.newCount} fontSize="body1" />
                        </>)
            }


                {/* <Typography variant="body2" component="p">
                    well meaning and kindly.
                </Typography> */}
            </CardContent>
        </Card >
    );
}

export default StatCardItem;