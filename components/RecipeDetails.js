import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'
import Meta from './Meta'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const useStyles = makeStyles((theme) => ({
    title : {
      justifyContent : "center",
      marginTop : theme.spacing(3),
      wordSpacing : '1px',
      lineHeight : 1.7
    }
  }))


const RecipeDetails = ({recipe}) => {
    const {title, recipeDetails, cardImage} = recipe.fields
    const classes = useStyles()
    return (
      <>
        <Meta title={title} />
        <Grid container className={classes.root}>
            <Grid item xs={12}>
              <Image src={`https:${cardImage.fields.file.url}`} width={200} height={100} 
              alt="Card Image" layout="responsive"/>
            </Grid>
            <Grid item xs={12} container justify="center">
              <Typography variant="h5" component="h2" className={classes.title}>
                 {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="div" >
                 {documentToReactComponents(recipeDetails)}
              </Typography> 
            </Grid>
        </Grid>
      </>
    )
}

export default RecipeDetails