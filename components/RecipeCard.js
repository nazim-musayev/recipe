import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link'
import Image from 'next/image'



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    maxHeight : 350,
    marginTop : theme.spacing(2)
    
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginBottom : theme.spacing(2)
  }
}));


const RecipeCard = ({recipe}) => {
  const {title, avatarImage, category, cookingTime, slug, cardImage} = recipe.fields
  const classes = useStyles();
    
    return (
      <Card className={classes.root}>
        <CardHeader
         avatar={
          <Avatar className={classes.avatar}> 
            <Image src={`https:${avatarImage.fields.file.url}`} 
               width={50} height={50} alt="Avatar" />  
          </Avatar>
         }
         title=
         {
          <Typography variant="h5" component="h2">
             {category}
          </Typography>
         }
      
         subheader= {`${cookingTime} dəqiqəyə hazırdı !`}
      />
      <Link href={`/${category}/${slug}`}>
      <CardActionArea >
        <CardMedia>
          <Image src={`https:${cardImage.fields.file.url}`} width={400} height={175} alt="Card Image" layout="responsive"/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
     </Card> 
    )
      
    

    

  //    const {url} = cardImage.fields.file ;


        
                 
       
}
    

export default RecipeCard