import React from 'react'
import Typography from '@material-ui/core/Typography';

const Header = ({ countryName }) => {
    console.log(`countryName = ${countryName}`)
    return (
        <Typography variant="h4" component="h4" align="center" gutterBottom style={{ marginTop: '20px' }}>
            {
                countryName ?
                    `${countryName}'s Statistics`
                    :
                    "🌎 World's Statistics"
            }
        </Typography>
    )
}

export default Header
