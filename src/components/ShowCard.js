import React from 'react';
import PropTypes from 'prop-types';

// MUI
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    }
}));

const ShowCard = (props) => {
    const { showObj } = props;
    const classes = useStyles();
    return (
        <Card>
            <CardHeader title={showObj.show.name} />
            <CardMedia className={classes.media} image={showObj.show.image.medium} title={showObj.show.name} />
        </Card>
    );
};

ShowCard.propTypes = {
    showObj: PropTypes.shape({
        show: PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.shape({
                medium: PropTypes.string.isRequired
            })
        })
    })
};

export default ShowCard;
