import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import { Divider, Paper } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Layout() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex', padding:'10px' }}>
      <StyledPaper elevation={3} style={{width:'100%'}} >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', height:'86.8vh', borderRadius:'5px' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
          </ListItemButton>
          <ListItemButton >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
          </ListItemButton>
          <ListItemButton >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
          </ListItemButton>
        </List>
      </StyledPaper>
    </Box>
    </ThemeProvider>
  );
}

