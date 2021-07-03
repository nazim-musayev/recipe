import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link'
import {useRouter} from 'next/router'
import TempDrawer from './Drawer'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root : {
    padding : theme.spacing(1)
  },
  tabItem : {
    fontWeight : "bold",
    padding : theme.spacing(2),
    "&:hover" : {
      background : "#49111C",
      color : "white"
    }
  }
}))



const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const router = useRouter()
  const classes = useStyles();
  
  const handleTabChange = (e, newValue) => {
    setSelectedTab(newValue)
  }

  return (
    <Grid container className={classes.root} spacing={1}>
      <AppBar position="sticky" color="transparent" elevation={0} >
       <Toolbar>
        <TempDrawer />
        <Grid item container justify="center">
          <Grid item xs={12} md={9} container justify="center">
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="secondary"
              centered 
            >    
              <Tab label="Əsas Səhİfə" className={classes.tabItem} 
                onClick={() => router.push("/")} />
              <Tab label="Haqqımızda" className={classes.tabItem}
                onClick={() => router.push("/about")} />
              <Tab label="Əlaqə" className={classes.tabItem} 
                onClick={() => router.push("/contact")}/>       
            </Tabs>
          </Grid>
          <Box
            component={Grid}
            item
            md={3}
            display={{ xs: "none", md: "block" }}
          >
          <Grid item container justify="flex-end" >
            <Grid item md={4} >
              <Link href="https://www.facebook.com">
                <Tooltip title="Bəyən" placement="bottom-end">
                  <IconButton>
                    <FacebookIcon fontSize="large" color="primary"/>
                  </IconButton>
                </Tooltip>
              </Link>
            </Grid>
            <Grid item md={4} >
              <Link href="https://www.youtube.com">
                <Tooltip title="Abunə ol">
                  <IconButton>
                    <YouTubeIcon fontSize="large" color="error"/>
                  </IconButton>
                </Tooltip>
              </Link>
            </Grid>
            <Grid item md={4}>
              <Link href="https://www.twitter.com">
                <Tooltip title="İzlə">
                  <IconButton>
                    <TwitterIcon fontSize="large" color="primary"/>
                  </IconButton>
                </Tooltip>
              </Link>
            </Grid>
          </Grid>
          </Box>
        </Grid>
       </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Navbar