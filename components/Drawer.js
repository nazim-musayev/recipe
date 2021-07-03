import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton  from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {useState} from 'react'


const useStyles = makeStyles((theme) => ({ 
  drawer: {
    width: 200,
    [theme.breakpoints.up('sm')]: {
      width: 240
    },
    [theme.breakpoints.up('md')]: {
      width : 275
    },
    display : 'flex',
    margin : theme.spacing(3),
  },
  menuButton: {
    marginTop : theme.spacing(1),
    marginBottom : theme.spacing(1)
  },
  drawerHeader : {
    alignSelf : "center"
  },
  drawerAvatar : {
      flexGrow : 1
  },
  justHover : {
    "&:hover" :  {
      background : "#49111C",
      color : "white"
    }
  },
  hoverOverActive : {
   background : "#49111C",
   color : "white",
   "&:hover" : {
      background : "black"
    }
  },
  itemText : {
    marginLeft : theme.spacing(8)
  } 
}));

const TempDrawer = () => {
  const [drawer, setDrawer] = useState(false)
  const router = useRouter()
  const {route} = useRouter()
  const classes = useStyles();

  const menuItems = [
    {
      text : "Yeməklər",
      path : "/yeməklər", 
    },
    {
      text : "Salatlar",
      path : "/salatlar", 
    },
    {
      text : "Şirniyyat",
      path : "/şirniyyatlar", 
    }
   ]
  const handleDrawer = () => {
      setDrawer(!drawer)
  }
  return (
    <>
        <Tooltip title="Menyunu aç">
        <IconButton edge="start" className={classes.menuButton} 
          color="inherit" onClick={handleDrawer}>
           <MenuIcon />
        </IconButton>
        </Tooltip>
        <Drawer open={drawer} onClose={handleDrawer} variant="temporary">
            <div className={classes.drawer}>
              <Image src="/cookAvatar.png" width={110} height={75} 
              alt="An Avatar of Chief" 
              className={classes.drawerAvatar}/>
              <Typography variant="h5" className={classes.drawerHeader}>
                RESEPTLƏR
              </Typography>
            </div>
            <List>
            {menuItems.map(({text, path}) => (
                <ListItem key={text} button divider
                  onClick={() => {
                   setDrawer(!drawer)
                   router.push(path)
                  }}
                  className={route == path ? classes.hoverOverActive : classes.justHover}>
                  <ListItemText primary={text} className={classes.itemText}/>
                </ListItem> 
            ))}
            </List>
        </Drawer>
    </>
  );
}

export default TempDrawer;