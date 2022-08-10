import { Grid } from '@mui/material'
import React from 'react'
import Feed from './feed/Feed'
import UserUploadBar from './userUploadBar/UserUploadBar'

function Layout() {
  return (
    <div style={{padding:'10px 0px'}}>
      {/* <h1>This is main Body</h1> */}
      <Grid direction="column">
        <UserUploadBar />
        <Feed />
      </Grid>
    </div>
  )
}

export default Layout
