import { makeStyles } from '@material-ui/core/styles';
import Typography  from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider"
import Grid from '@material-ui/core/Grid'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Box from "@material-ui/core/Box"
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root : {
        height : theme.spacing(45),
        background : 'black',
        [theme.breakpoints.up('lg')]: {
          height : theme.spacing(30)
        },
    },
    header : {
        marginTop : theme.spacing(3),
        marginLeft : theme.spacing(2),
        color : 'white'
    },
    subFooter : {
        padding : "25px 0 0 25px"
    },
    chipItem : {
      margin : theme.spacing(2),
      cursor : "auto"
    },
    chipGrid : {
      marginTop : theme.spacing(2)
    }
    
}))

const Footer = () => {
    const classes = useStyles()

    const chipLabels = ["reseptlər", "yeməklər", "salatlar", "şirniyyat", "mətbəx", "aşbaz"]

    return (
        <footer className={classes.root}>
          <Divider />
          <Grid container className={classes.header} justify="center" alignItems="center">
            <Grid item container xs={12} lg={6} >
            <Typography variant="h5" >
               Bizi sosial şəbəkələrdə izləyə bilərsiniz : 
            </Typography>
            </Grid>
            <Grid item container xs={12} lg={6} alignItems="center">
              <Box
                component={Grid}
                item
                sm={1}
                md={2}
                display={{ xs: "none", sm: "block", lg : "none" }}
              ></Box>
              <Grid item xs={4} sm={3} md={3} lg={4}>
                <Link href="https://www.facebook.com">
                  <Tooltip title="Bəyən" placement="right">
                <IconButton>
                   <FacebookIcon fontSize="large" color="primary"/>
                </IconButton>
                </Tooltip>
                </Link>
              </Grid>
              <Grid item xs={4} md={3} lg={4}>
                <Link href="https://www.youtube.com">
                <Tooltip title="Abunə ol" placement="right">
                <IconButton>
                   <YouTubeIcon fontSize="large" color="error"/>
                </IconButton>
                </Tooltip>
                </Link>
              </Grid>
              <Grid item xs={4} md={3} lg={4}>
                <Link href="https://www.twitter.com">
                <Tooltip title="İzlə" placement="right">
                <IconButton>
                   <TwitterIcon fontSize="large" color="primary"/>
                </IconButton>
                </Tooltip>
                </Link>
              </Grid>
            </Grid>
            <Grid item container xs={12} justify="center" className={classes.chipGrid}>
            {chipLabels.map(label => (
              <Grid item xs={4} md={3} lg={1} key={label}>
              <Chip  label={label} variant="outlined" color="primary" className={classes.chipItem}/>
              </Grid>
            ))}
            </Grid>
            <Grid item container xs={12} className={classes.subFooter} justify="center" >
            <Typography variant="body1">
                 2021. Bütün hüquqlar qorunur 
            </Typography>
            <CopyrightIcon fontSize="small" />
            </Grid>
          </Grid>
        </footer>
    )
}

export default Footer