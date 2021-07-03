import Meta from '../components/Meta'
import AdSpot from '../components/AdSpot'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
    typography : {
        margin : theme.spacing(1),
        wordSpacing : '1px',
        lineHeight : 1.7
      }
}))
const contact = () => {
    const classes = useStyles()
    return (
        <>
            <Meta title="Əlaqə" />
            <Grid container>
              <Grid item xs={8}>
                <Image src="/cooksAvatar.jpg" width={870} height={650} alt="Chiefs" />
                <Typography variant="h3" className={classes.typography}>
                    Reseptini göndər
                </Typography>
              </Grid>
              <Grid item xs></Grid>
              <Grid item xs={3} container>
                <AdSpot />
              </Grid>
              <Grid item container xs={12}>
                <Typography className={classes.typography}>
                   Hazırladığınız, dadı və görünüşünə əmin olduğunuz yeməklərinizin resept və fotolarını bizimlə
                   və bütün dünya ilə bölüşə bilərsiniz. Bunun üçün edəcəyiniz tək şey reseptlərinizi 
                   next.app@gmail.com ünvanına göndərməkdir.
                </Typography>
              </Grid>
            </Grid>
        </>
    )
}

export default contact
