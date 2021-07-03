import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"


const useStyles = makeStyles((theme) => ({
  root : {
    background : "#F0D9E7",
    marginLeft : theme.spacing(2),
    marginRight : theme.spacing(3)
  },
  adText : {
    transform : "rotate(90deg)",
  }
}));

const AdSpot = () => {
    const classes=useStyles()
    
    return (
        <Grid item container xs={12} className={classes.root} justify="center" alignItems="center" >
           <Typography variant="h2" color="secondary" className={classes.adText} >
               Reklam
           </Typography>
        </Grid>  
    )
}

export default AdSpot
