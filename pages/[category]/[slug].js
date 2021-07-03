import { createClient } from 'contentful'
import RecipeDetails from "../../components/RecipeDetails"

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
                slug : item.fields.slug,
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
        "fields.slug" : params.slug
    })

    return {
        props : { recipe : items[0]}
    }
}


const Slug = ({recipe}) => {
    return (
        <>
           <RecipeDetails recipe={recipe} /> 
        </>
    )
}

export default Slug

