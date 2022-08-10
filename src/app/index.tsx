import { Container, Grid } from '@mui/material';
import React from 'react'

import Header from './header/Header';
import MainBodyLayout from './main/mainBody/Layout';
import RightUserLayout from './main/rightUserBar/Layout';
import SidebarLayout from './main/sidebar/Layout';

function Layout() {
  return (
    <>
        {/* <Container> */}
            <Grid>
                <Grid container xs={12} md={12} lg={12} >
                    <Header />
                </Grid>
            </Grid>
            
            <Grid container xs={12}>
                <Grid xs={2}>
                    <SidebarLayout />
                </Grid>
                <Grid xs={7}>
                    <MainBodyLayout />
                </Grid>
                <Grid xs={3}>
                    <RightUserLayout />
                </Grid>
            </Grid>
            
        {/* </Container> */}
        
    </>
  )
}

export default Layout
