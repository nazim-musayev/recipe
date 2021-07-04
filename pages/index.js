import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"
import Image from 'next/image'
import Link from 'next/link'
import AdSpot from '../components/AdSpot'
import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'


const useStyles = makeStyles((theme) => ({
  root : {
    borderBottom : "1px solid limegreen",
    marginBottom : theme.spacing(2)
  },
  typography : {
    marginTop : theme.spacing(2),
    wordSpacing : '1px',
    lineHeight : 1.7
  }
}))

export const getStaticProps = async () => {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "recipe" })

  return {
    props: {
      recipes: res.items,
    }
  }
}

export default function Home({recipes}) {

  const classes = useStyles()

  
    return (
      <Grid container spacing={5}>
      <Grid item xs={12} container className={classes.root} >
        <Grid item xs={8}>
          <Image src="/malibu.jpg" width={850} height={500} alt="Malibu salati" layout="responsive" />
          <Typography variant="h3" align="center" className={classes.typography}>
             Malibu Salatı
          </Typography>
          <Typography variant="body1" className={classes.typography}>
            Evə gələn çağırılmamış qonaq üçün qısa müddətdə ləzzətli salat hazırlaya bilərsiniz. Çox sadə...
            <Link href="/salatlar/malibu-salati"> 
             &rArr; reseptə bax 
            </Link> 
          </Typography>
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs={3} container>
          <AdSpot />
        </Grid>
      </Grid>
      <Grid item container xs={12} justify="center">
        <Typography variant="h4">
          Bütün reseptlər :
        </Typography>
      </Grid>
      <Grid item container justify="space-around" spacing={2}>
        {recipes.map((recipe) => (
           <Grid item xs={12} sm={6} md={4} key={recipe.sys.id}>
              <RecipeCard recipe={recipe} />
           </Grid> 
        ))}
      </Grid>
    </Grid>
   
  )
}
