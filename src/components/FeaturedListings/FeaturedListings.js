import React from 'react';
import {Box, Container, Grid, makeStyles, useMediaQuery, useTheme} from "@material-ui/core";
import TextWithDivider from "../Common/TextWithDivider";

import FeaturedListingItem from "./FeaturedListingItem";

const useStyles = makeStyles(theme => ({
    featuredListings: {
        marginBottom: '4.5rem',
    },
    featuredListingsGrid: {
        marginTop: '2.5rem',
        width: '100%'
    },
}))

const FeaturedListings = () => {

    const featuredListItems = [
        {
            heading: '980 Riddler Park, San Jose',
            subHeading: '$20,000,000 &nbsp; &nbsp; 16,593 sq Ft.',
            imageSrc: '/images/featuredListings/1.jpeg'
        }, {
            heading: '114 Ringwood Ct, San Jose',
            subHeading: '$29,000,000 &nbsp; &nbsp; 46,593 sq Ft.',
            imageSrc: '/images/featuredListings/2.jpeg'
        }, {
            heading: '28 Westfield Rd, Sans Francisco',
            subHeading: '$39,000,000 &nbsp; &nbsp; 120,993 sq Ft.',
            imageSrc: '/images/featuredListings/3.jpeg'
        }, {
            heading: '920 West Garden St, San Jose',
            subHeading: '$19,000,000 &nbsp; &nbsp; 26,593 sq Ft.',
            imageSrc: '/images/featuredListings/4.png'
        },
    ]

    const theme = useTheme();
    const smallerThanMd = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();

    return (
        <Box className={classes.featuredListings}>
            <Container maxWidth={'lg'}>

                <Box>
                    <TextWithDivider>
                        Featured Listings
                    </TextWithDivider>
                </Box>

                <Grid justify={'center'} alignItems={'center'}
                      spacing={smallerThanMd ? 0 : 8}
                      container
                      className={classes.featuredListingsGrid}
                >
                    {
                        featuredListItems.map(({heading, subHeading, imageSrc}) => (
                            <Grid key={heading} md={6} item style={{width: '100%'}}>
                                <FeaturedListingItem
                                    heading={heading}
                                    subheading={subHeading}
                                    imgSrc={imageSrc}
                                />
                            </Grid>
                        ))
                    }

                </Grid>

            </Container>
        </Box>
    );
};

export default FeaturedListings;