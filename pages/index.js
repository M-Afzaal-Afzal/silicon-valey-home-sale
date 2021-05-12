import React from 'react';
import {Box} from "@material-ui/core";
import Hero from "../src/components/Hero/Hero";
import MeetSvRealty from "../src/components/MeetSvRealty/MeetSvRealty";
import FeaturedListings from "../src/components/FeaturedListings/FeaturedListings";

export default function Index() {
  return (
    <Box>
       <Hero/>
        <MeetSvRealty/>
        <FeaturedListings/>
    </Box>
  );
}
