import { makeStyles } from '@material-ui/core/styles'
import Navbar from './Navbar'
import Footer from './Footer'
import Carousel from './Carousel'
import Meta from "./Meta"
import Scroll from "./ScrollToTop"

const useStyles = makeStyles((theme) => ({
  children : {
    background : '#49111C',
    color : 'white',
    padding : theme.spacing(4)
  }
}))


const Layout = ({children}) => {
  const classes = useStyles()
    return ( 
      <>
        <Meta />
        <Carousel />
        <Scroll showBelow={250} />
        <Navbar />
        <div className={classes.children}>
          {children}
        </div>
        <Footer />
      </>
    )
}

export default Layout
