import { useEffect, useState } from "react"
import "./mobileheader.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

import { useLocation } from "react-router-dom"

export default function MobileHeader() {
    const [scroll, setscroll] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                setscroll(window.scrollY > 200)
            })
        }

    }, [])
    const [dropdown, setdropdown] = useState(false)
    const location = useLocation();
    useEffect(()=>{
        setdropdown(false);
    },[location])

    const clicked = () => {
        setdropdown(!dropdown);
        
    }

    dropdown?document.body.classList.add('no-scroll'):document.body.classList.remove('no-scroll')
   

    return (
        <div className={dropdown ? "dropdown" : (scroll ? "mobilescrollheader" : "mobileheader")}>
            <nav>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    {dropdown ? "" : <h1>Xamin</h1>}
                </Link>
            </nav>
            {
                dropdown ?
                    <div id="menu" >
                        <div id="menuhead">
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div id="menutext">
                                <nav>
                                    <Link to={'/about'} style={{ textDecoration: 'none' }}><h2>About us</h2></Link>
                                </nav>
                                <nav>
                                    <Link to={'products'} style={{ textDecoration: 'none' }}><h2>Our Products</h2></Link>
                                </nav>
                                <nav>
                                    <Link to={'contacts'} style={{ textDecoration: 'none' }}><h2>Contact Us</h2></Link>
                                </nav>
                                <nav>
                                    <Link to={'downloads'} style={{ textDecoration: 'none' }}><h2>Downloads</h2></Link>
                                </nav>
                                <nav>
                                    <Link to={'updates'} style={{ textDecoration: 'none' }}><h2>Updates</h2></Link>
                                </nav>
                            </div>
                            <div id="rightblock">
                            </div>

                        </div>
                    </div> :
                    ""
            }
            <div id="bars">
                {!dropdown?<FontAwesomeIcon onClick={clicked} style={{color: 'white',fontSize: '1.3em', margin: "20px" }} icon={faBars} />:
                <FontAwesomeIcon onClick={clicked} style={{color:'rgb(59, 105, 166)', fontSize:'1.3em', margin:"20px"}} icon={faX} /> }
            </div>
        </div>
    )
}