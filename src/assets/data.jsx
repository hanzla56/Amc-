import { DisneyIcon, StarWarsIcons } from "./Icons"
import imgslider from "./Poster.png"
import marvlicon from "./marvel.png"
import national from "./national.png"
import netfilx from "./netflix.png"
import watch1 from "./watch1.png"
import watch2 from "./watch2.png"
import watch3 from "./watch3.png"
import re1 from "./re1.png" 
import re2 from "./re2.png" 
import re3 from "./re3.png" 
import re4 from "./re4.png" 



export const herodata = [
    {
        title:"Star Wars: The force Awaken",
        desc:"The third season of the American television series The Mandalorian stars Pedro Pascal as the title character, a bounty hunter traveling to Mandalore to redeem his past transgressions with his adopted son Grogu and being aided on their journey by fellow Mandalorian Bo-Katan Kryze.",
        time:"2h40m • 2022 • Fantasy • Actions",
        category:"Movie",
        img:imgslider
    },
    {
        title:"Star Wars: The force Awaken",
        desc:"The third season of the American television series The Mandalorian stars Pedro Pascal as the title character, a bounty hunter traveling to Mandalore to redeem his past transgressions with his adopted son Grogu and being aided on their journey by fellow Mandalorian Bo-Katan Kryze.",
        time:"2h40m • 2022 • Fantasy • Actions",
        category:"Movie",
        img:imgslider
    },
    {
        title:"Star Wars: The force Awaken",
        desc:"The third season of the American television series The Mandalorian stars Pedro Pascal as the title character, a bounty hunter traveling to Mandalore to redeem his past transgressions with his adopted son Grogu and being aided on their journey by fellow Mandalorian Bo-Katan Kryze.",
        time:"2h40m • 2022 • Fantasy • Actions",
        category:"Movie",
        img:imgslider
    },
]

export const franchiesdata = [
    {
        logo:<DisneyIcon/>
    },
    {
        logo:<img src={netfilx.src} alt="image" className="w-fit"/> ,
    },
    {
        logo:<StarWarsIcons/>,
    },
    {
        logo:<img src={marvlicon.src} alt="image" className="w-fit"/> ,
    },
    {
        logo: <img src={national.src} alt="image" className="w-fit"/>,
    },
    {
        logo:<DisneyIcon/>
    },
    {
        logo:<img src={netfilx.src} alt="image" className="w-fit"/> ,
    },
    {
        logo:<StarWarsIcons/>,
    },
    {
        logo:<img src={marvlicon.src} alt="image" className="w-fit"/> ,
    },
    {
        logo: <img src={national.src} alt="image" className="w-fit"/>,
    },
]

export const watchDAta = [
    {
        img:watch1
    },
    {
        img:watch2
    },
    {
        img:watch3
    },
    {
        img:watch1
    },
    {
        img:watch2
    },
    {
        img:watch3
    },
]


export const Releasedata = [
    {
        img:re4
    },
    {
        img:re3
    },
  
  
    {
        img:re2
    },
    {
        img:re1
    },
    {
        img:re2
    },
    {
        img:re3
    },
    {
        img:re4
    },
]
