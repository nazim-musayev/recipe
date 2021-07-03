import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography  from '@material-ui/core/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Meta from '../components/Meta'

const useStyles = makeStyles((theme) => ({
    image : {
        marginBottom : theme.spacing(6)
    }
}))

const NotFound = () => {
    const classes = useStyles()
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 7000)
    }, [])
    return (
        <>
          <Meta title="Səhifə Tapılmadı" />
          <Grid container >
            <Grid item container xs={12} justify="center" className={classes.image} >
                <Image src="/404.jpg" width={1000} height={500} alt="Not Found Image"  />
            </Grid>
            <Grid item container xs={12} justify="center" >
                <Typography variant="h4"> 
                    Təəssüf :( Axtardığınız səhifə tapılmadı
                </Typography>
            </Grid>
            <Grid item container xs={12} justify="center">
                <Typography variant="h4">
                  <Link href="/">Əsas Səhifə</Link>-yə yönləndirilir
                </Typography>
            </Grid>
          </Grid>
        </>
    )
}

export default NotFound