import React, { useState } from 'react';

// MUI
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

// React Router
import { useHistory } from 'react-router-dom';

const Search = () => {
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermHasError, setSearchTermHasError] = useState(false);

    /**
     * Will manage the movie title textfield
     * @param event - Input Event
     */
    const handleMovieTitleChange = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
        // Reset the error
        if (searchTermHasError && event.target.value) {
            setSearchTermHasError(false);
        }
    };

    /**
     * Submits and pushes to the next page
     */
    const handleSearchBtn = () => {
        if (!searchTerm) {
            setSearchTermHasError(true);
        } else {
            history.push(`/results?searchTerm=${searchTerm}`);
        }
    };

    return (
        <>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Search TV Shows
            </Typography>
            <form onSubmit={handleSearchBtn}>
                <Box display="flex" alignItems="center" justifyContent="center" width={1} flexDirection="column">
                    <Box mb={3} width={1}>
                        <TextField
                            label="TV Show Title"
                            placeholder="TV Show Title"
                            variant="outlined"
                            autoFocus={true}
                            fullWidth={true}
                            value={searchTerm}
                            onChange={handleMovieTitleChange}
                            error={searchTermHasError}
                        />
                    </Box>
                    <Button
                        mt={3}
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                        endIcon={<SearchIcon />}
                        type="submit"
                        data-testid="submit-search-btn"
                    >
                        Search
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default Search;
