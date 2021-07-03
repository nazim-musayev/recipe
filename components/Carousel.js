import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel"
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Tooltip from '@material-ui/core/Tooltip'


const Carousel = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const slides = [
    {
      subtitle : "salatı",
      title : "Narlı Zeytun Salatı",
      src : "/narzeytun.jpg",
      route : "/salatlar/narli-zeytun-salati"
    },
    {
      subtitle : "yeməyi",
      title : "Almalı Ördək Filesi",
      src : "/almaliordek.jpg",
      route : "/yeməklər/almali-oerd-k-filesi"
    },
    {
      subtitle : "şirniyyatı",
      title : "Mon-Plezir tortu",
      src : "/monplezir.png",
      route : "/şirniyyatlar/mon-plezir-tortu"
    }
  ]
    
  useEffect(() => {
    setOpen(!open)
  },[])

  return (
    <>
      <AutoRotatingCarousel
        label="Əsas Səhifə"
        autoplay={true}
        open={open}
        onClose={() => setOpen(false)}
        onStart={() => setOpen(false) }
        containerStyle = {{ cursor : "pointer" }}
      >
        {slides.map(slide => (
          <Slide key={slide.title}
          media={
            <Image src={slide.src} width={700} height={350} alt="Slide image" layout="fixed" />
          }
          style={{ backgroundColor: "#7a2048" }}
          title={ slide.title }
          subtitle={`həftənin ${slide.subtitle}`}
          onClick={() => router.push(slide.route)}
          />
        ))} 
      </AutoRotatingCarousel>
    </>
  );
};




export default Carousel