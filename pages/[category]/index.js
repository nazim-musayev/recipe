import { createClient } from 'contentful'
import Meta from '../../components/Meta'
import Grid from '@material-ui/core/Grid'
import RecipeCard from '../../components/RecipeCard'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type : 'recipe'
    })

    const paths = res.items.map(item => {
        return {
            params : 
            { 
                category : item.fields.category
            }
        }
    })

    return { 
        paths,
        fallback : false }
}

export const getStaticProps = async ({params}) => {
    const {items} = await client.getEntries({
        content_type : "recipe",
        "fields.category" : params.category
    })

    return {
        props : { recipes : items }
    }
}

const Category = ({recipes}) => {
const title = recipes.slice(2).map(recipe => {
    const {category} = recipe.fields
    return category.charAt(0).toUpperCase() + category.slice(1)
})

    return (
        <>
            <Meta title={title} />
            <Grid item container justify="center" spacing={2}>
            {recipes.map((recipe) => (
                <Grid item xs={12} sm={6} md={4} key={recipe.sys.id} >
                  <RecipeCard recipe={recipe} />
                </Grid> 
            ))}
            </Grid>
        </>
    )
}

export default Category