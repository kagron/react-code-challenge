import React from 'react';
import PropTypes from 'prop-types';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8, 0, 6),
        height: '100%',
        width: '100%'
    }
}));

const MainLayout = (props) => {
    const classes = useStyles();
    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">{props.children}</Container>
            </div>
        </main>
    );
};

MainLayout.propTypes = {
    children: PropTypes.any
};

export default MainLayout;
