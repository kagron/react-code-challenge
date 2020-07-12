import React from 'react';
import PropTypes from 'prop-types';

// MUI
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

// Components
import ShowCard from './ShowCard';

// React Router
import { Link as RouterLink } from 'react-router-dom';

/**
 * Part 2: Using the provide React starter app, display the data returned from the previous question.
 */
const ResultsList = (props) => {
    const { searchTerm, isLoading = false, currentShows = [] } = props;
    return isLoading ? (
        <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress />
        </Box>
    ) : currentShows.length === 0 ? (
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Typography color="textPrimary" gutterBottom>
                There doesn't seem to be any results here...
            </Typography>
            <Box mb={3}>
                <Link component={RouterLink} to="/">
                    Go Back
                </Link>
            </Box>
        </Box>
    ) : (
        <div>
            <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                Showing results for <i>"{searchTerm}"</i>
            </Typography>
            <Box mb={3}>
                <Link component={RouterLink} to="/">
                    Go Back
                </Link>
            </Box>
            {currentShows.map((showObj, i) => (
                <React.Fragment key={i}>
                    <ShowCard {...{ showObj }} />
                    <hr />
                </React.Fragment>
            ))}
        </div>
    );
};

ResultsList.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    currentShows: PropTypes.arrayOf(
        PropTypes.shape({
            show: PropTypes.shape({
                name: PropTypes.string.isRequired,
                image: PropTypes.shape({
                    medium: PropTypes.string.isRequired
                })
            })
        })
    )
};

export default ResultsList;
