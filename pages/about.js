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
      },
}))
const about = () => {
    const classes = useStyles()
    return (
        <>
            <Meta title="Haqqımızda" />
            <Grid container>
              <Grid item xs={8}>
                <Image src="/aboutimage.jpg" width={870} height={650} alt="Dessert image" />
                <Typography variant="h3" className={classes.typography}>
                 Biz kimik və nə edirik ?
                </Typography>
              </Grid>
              <Grid item xs></Grid>
              <Grid item xs={3} container>
                <AdSpot />
              </Grid>
              <Grid item container xs={12}>
                <Typography align="justify" className={classes.typography}>
                  Next Recipe App həvəskar platformdur. Mətbəxini sevən, yeni ləzzətlər axtarışında olan hər kəsə sayta daxil olaraq Azərbaycan və Dünya
                  mətbəxinin müxtəlif xörək, salat, şirniyyat və dietik yeməklərinin hazırlanma qaydaları ilə tanış
                  olmasını təmin edirik.
                </Typography>
              </Grid>
            </Grid>
        </>
    )
}

export default about
