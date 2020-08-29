import React from 'react';
import CountUp from 'react-countup';
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import amber from '@material-ui/core/colors/amber';

const CountUpText = (props) => {
    const getColor = () => {
        if (props.fontSize === 'h4') {
            switch (props.title) {
                case 'Total Infections':
                    return { color: blue[500] }

                case 'Active Infections':
                    return { color: amber[500] }

                case 'Recovered':
                    return { color: green['A400'] }

                case 'Deaths':
                    return { color: red[500] }

                default:
                    break;
            }
        }
        else {
            return undefined;
        }
    }
    return (
        <CountUp
            start={0}
            delay={0}
            end={Number.parseInt(props.number)}
            duration={2.75}
            separator=","
            decimals={0}
            decimal="."
            suffix={props.fontSize === 'body1' ? ' today' : ''}
        >
            {({ countUpRef }) => (
                <Typography
                    align="right"
                    variant={props.fontSize}
                    style={getColor()}
                >
                    <span ref={countUpRef} />
                </Typography>
            )}
        </CountUp>
    )
}

export default CountUpText;