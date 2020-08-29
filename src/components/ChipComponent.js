import React from 'react'
import Chip from '@material-ui/core/Chip';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import amber from '@material-ui/core/colors/amber';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const ChipComponent = (props) => {
    const getColor = () => {
        switch (props.title) {
            case 'Total Infections':
                return { backgroundColor: blue[500] }

            case 'Active Infections':
                return { backgroundColor: amber[500] }

            case 'Recovered':
                return { backgroundColor: green['A400']}

            case 'Deaths':
                return { backgroundColor: red[500]}

            default:
                break;
        }
    }


    return (
        <Chip color="primary" style={getColor()} size="small" icon={<TrendingUpIcon />} label={`${props.trendPercentage} %`} />
    )
}

export default ChipComponent
