import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';

const messages = [
  {
    id: 1,
    primary: 'Sedrah S',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat xx",
    person: '/components/Images/1.jpg',
  },
  {
    id: 2,
    primary: 'Brian Torres',
    secondary: `Do you have a suggestion for a good present for Justen on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/components/Images/1.jpg',
  },
  {
    id: 3,
    primary: 'Vikk Alwawi',
    secondary: 'I am going to try out this new BBQ recipe today, I think this might just be fantastic.',
    person: '/components/Images/1.jpg',
  },
  {
    id: 4,
    primary: 'Hassan Ahmed',
    secondary: 'I got 7 tickets for the concert next week! .',
    person: '/components/Images/1.jpg',
  },
  {
    id: 5,
    primary: "Jules Nyx",
    secondary: 'Me and Darth will be coming over on Saturday, if that is alright with you guys?',
    person: '/components/Images/1.jpg',
  },
  {
    id: 6,
    primary: 'Deen Azizi',
    secondary: `Tuffy got hurt so I will be taking him to the vet later this evening.`,
    person: '/components/Images/1.jpg',
  },
  {
    id: 7,
    primary: 'Abady Abood',
    secondary: `Backyard party at my place tonight, you in?`,
    person: '/components/Images/1.jpg',
  },
];

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function Appbar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
        
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}
              {id === 6 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Week Ago
                </ListSubheader>
              )}

              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
        
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
        
          </IconButton>
          <IconButton color="inherit">
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}