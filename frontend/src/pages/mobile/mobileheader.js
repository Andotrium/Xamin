import { useEffect, useState } from "react"
import "./mobileheader.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function MobileHeader(){
    const [scroll,setscroll] = useState(false)
    useEffect(()=>{
        if(typeof window!=='undefined') {
            window.addEventListener('scroll',()=>{
                setscroll(window.scrollY > 200)
            })
        }
    },[])

    return(
        <div className={scroll?"mobilescrollheader":"mobileheader"}
        >
            <nav>
                <Link to={'/'} style={{textDecoration:'none'}}>
            <h1>Xamin</h1>
                </Link>
            </nav>
            {/* <FontAwesomeIcon style={{ color: "white", fontSize: '1.3em' }} icon={faBars} /> */}
            <FontAwesomeIcon style={{color:"white", fontSize: '1.3em', margin:"20px"}} icon={faBars} />
            
        </div>
    )
}