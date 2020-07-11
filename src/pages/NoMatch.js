import React from 'react';

// MUI
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

// React Router
import { Link as RouterLink } from 'react-router-dom';

const NoMatch = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Typography color="textPrimary" gutterBottom>
                404 Page Not Found
            </Typography>
            <Box mb={3}>
                <Link component={RouterLink} to="/">
                    Go Back
                </Link>
            </Box>
        </Box>
    );
};

export default NoMatch;
