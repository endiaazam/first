import './index.css'
import { useState } from 'react';

function Homepage(){
    const [bestlist, setbestlist] = useState([
        {
            title: "GTA V", img:"./GTA V.jpg"
        },
        {
            title: "FIFA 24", img:"./FIFA 24.jpg"
        },
        {
            title: "Minecraft", img:"./Minecraft.jpg"
        }
    ])

    const [rapp, setrapp] = useState([
        {
            title: "بادصبا", img: ""
        },
        {
            title: "مایکت", img: ""
        }
    ])
    return(
        <div>
            {bestlist.map((best) => (
                <div key={best} id='bests'>
                    <button>
                        <div>
                            <img src={best.img} alt={best.title} />
                            <h3>{best.title}</h3>
                        </div>
                    </button>
                </div>
            ))}
            <div id='rapp'>

            </div>
            <div id='rgames'>

            </div>
            <div id='rvideo'>

            </div>
            <div id='rmusic'>
                
            </div>
        </div>
    )
}

export default Homepage;