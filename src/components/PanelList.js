import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import Divider from '@mui/material/Divider';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TableChartIcon from '@mui/icons-material/TableChart';

export function PanelList() {
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    const dropdownBox = {
      backgroundColor: 'white',
      color: 'black',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      alignContent: 'center',
      justifyContent: 'center',
    }
  
    return ( 
      <div className='panel-list'>
        <ListItemButton>
          <ListItemIcon>
          <SentimentVerySatisfiedIcon />
          </ListItemIcon>
          <ListItemText primary="SB ADMIN" />
        </ListItemButton>
  
        <Divider variant="fullWidth" />
  
        <ListItemButton>
          <ListItemIcon>
          <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
  
        <Divider variant="fullWidth" />
  
        <Typography style=
        {{marginLeft: '20px', marginTop: '20px', color: 'white', fontSize: '.65rem', fontWeight: '800'}}
          variant="caption" display="block" gutterBottom>
          INTERFACE
        </Typography>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
          <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Components" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List style={dropdownBox} component="div" disablePadding>
          <Typography style={{marginLeft: '60px', color: 'grey'}} variant="caption" display="block" gutterBottom>
          CUSTOM COMPONENTS:
        </Typography>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Buttons" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Cards" />
            </ListItemButton>
          </List>
        </Collapse>
  
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
          <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Utilities" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List style={dropdownBox} component="div" disablePadding>
          <Typography style={{marginLeft: '60px', color: 'grey'}} variant="caption" display="block" gutterBottom>
          CUSTOM UTILITIES:
        </Typography>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Colors" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Borders" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Animations" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Others" />
            </ListItemButton>
          </List>
        </Collapse>
  
        <Divider variant="fullWidth" />
  
        <Typography style=
        {{marginLeft: '20px', marginTop: '20px', color: 'white', fontSize: '.65rem', fontWeight: '800'}}
         variant="caption" display="block" gutterBottom>
          ADDSON
        </Typography>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
          <FolderOpenIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
  
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List style={dropdownBox} component="div" disablePadding>
          <Typography style={{marginLeft: '60px', color: 'grey'}} variant="caption" display="block" gutterBottom>
          LOGIN SCREENS:
        </Typography>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Forgot Password" />
            </ListItemButton>
            <Typography style={{marginLeft: '60px', color: 'grey'}} variant="caption" display="block" gutterBottom>
          OTHER PAGES
        </Typography>
        <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="404 Page" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Blank Page" />
            </ListItemButton>
          </List>
        </Collapse>
  
        <ListItemButton>
          <ListItemIcon>
          <InsertChartIcon />
          </ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItemButton>
  
        <ListItemButton>
          <ListItemIcon>
          <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItemButton>
  
        <Divider variant="fullWidth" />
      </div>
    );
  }