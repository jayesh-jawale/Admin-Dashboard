import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import Divider from '@mui/material/Divider';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TableChartIcon from '@mui/icons-material/TableChart';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

export function PanelList() {  
    const dropdownBox = {
      backgroundColor: 'white',
      color: 'black',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
    }
  
    return ( 
      <div className='panel-list'>       
      <List style={{backgroundColor: "rgb(93, 130, 209)"}}>

        <ListItem className='panel-list-icons'>
        <SentimentVerySatisfiedIcon />
          <span style={{fontWeight: '700', letterSpacing: '.05rem', marginBottom: '20px'}}>
             SB ADMIN
          </span>
        </ListItem>
     
        <Divider variant="fullWidth" />

      <ListItem className='panel-list-icons'>
        <DashboardIcon />
          {/* <span><Link to="/dashboard">Dashboard</Link></span> */}
          <Link to="/dashboard">
            <span>Dashboard</span>
          </Link>
      </ListItem>
  
        <Divider variant="fullWidth" />
  
        <Typography style=
        {{marginLeft: '20px', marginTop: '20px', color: 'white', fontSize: '.65rem', fontWeight: '800'}}
          variant="caption" display="block" gutterBottom>
          INTERFACE
        </Typography>

        <Accordion style={{backgroundColor: "rgb(93, 130, 209)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className='panel-list-icons'>
          <SettingsIcon />
           <span>Components</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List style={dropdownBox}>
							<ListItemButton>Buttons</ListItemButton>
							<ListItemButton>Cards</ListItemButton>
				</List>
        </AccordionDetails>
      </Accordion>
  
      <Accordion style={{backgroundColor: "rgb(93, 130, 209)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className='panel-list-icons'>
          <BuildIcon />
            <span>Custom Utilities</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List style={dropdownBox}>
							<ListItemButton>Color</ListItemButton>
							<ListItemButton>Borders</ListItemButton>
              <ListItemButton>Animations</ListItemButton>
							<ListItemButton>Other</ListItemButton>
						</List>
        </AccordionDetails>
      </Accordion>
  
        <Divider variant="fullWidth" />
  
        <Typography style=
        {{marginLeft: '20px', marginTop: '20px', color: 'white', fontSize: '.65rem', fontWeight: '800'}}
         variant="caption" display="block" gutterBottom>
          ADDSON
        </Typography>

        <Accordion style={{backgroundColor: "rgb(93, 130, 209)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className='panel-list-icons'>
          <FolderOpenIcon />
            <span>Pages</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List style={dropdownBox}>
							<ListItemButton>Login</ListItemButton>
							<ListItemButton>Register</ListItemButton>
              <ListItemButton>Forgot Password</ListItemButton>
						</List>
        </AccordionDetails>
      </Accordion>

      <ListItem className='panel-list-icons'>
        <InsertChartIcon />
          {/* <span>Charts</span> */}
          <Link to="/charts">
            <span>Charts</span>
          </Link>
      </ListItem>

      <ListItem className='panel-list-icons'>
        <TableChartIcon />
          {/* <span> Tables</span> */}
          <Link to="/tables">
            <span>Tables</span>
          </Link>
      </ListItem>
  
      <Divider variant="fullWidth" />
        </List>
      </div>
    );
  }