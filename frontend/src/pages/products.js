import React, { useState } from "react";
import "./products.css"
import image1 from '../media/image1.jpg'
import image2 from '../media/image2.jpg'
import image3 from '../media/image3.jpg'
import image4 from '../media/image4.jpg'
import image5 from '../media/image5.jpg'


export default function Productpage() {
    const [hoverindex,setindex] = useState(null);
    const products = [{
        row:1,
        name:'product1',
        description:"Excepteur cillum minim culpa fugiat in non. Voluptate cupidatat sunt in ullamco sunt tempor. Et nostrud est pariatur dolor. Aute ullamco laborum culpa ad mollit cupidatat adipisicing Lorem veniam qui reprehenderit dolor ut laborum. Officia fugiat magna cupidatat culpa cupidatat officia magna quis sint nostrud nostrud. Ex occaecat proident id tempor non ut proident enim ullamco cillum. Minim amet fugiat consequat reprehenderit officia anim ea exercitation.",
        image:image1
    },
{
    row:1,
    name:'product2',
    description:"In aute in esse mollit reprehenderit anim mollit esse sit et. Irure elit veniam id qui proident. Pariatur ex cillum ipsum ullamco nisi reprehenderit labore reprehenderit exercitation ullamco.",
    image:image2
},
{
    row:1,
    name:'product3',
    description:"Duis ipsum enim dolor cillum Lorem sint culpa dolore. Consectetur cupidatat excepteur et nulla est duis enim esse exercitation Lorem tempor cupidatat ex. Ad ex esse velit irure quis ad exercitation tempor ipsum officia.",
    image: image3
},
{
    row:1,
    name:'product4',
    description:'Cupidatat elit est est non duis magna minim minim aute. Aute labore Lorem velit voluptate ex irure officia minim aute cupidatat. Fugiat cillum aliqua eu officia sint. Pariatur tempor ad non eiusmod id do reprehenderit. Ullamco consequat reprehenderit veniam excepteur in minim deserunt occaecat ex labore et labore.',
    image:image4
},
{
    row:2,
    name:'product5',
    description:'Culpa elit ex ullamco culpa dolore ut velit fugiat. Reprehenderit esse cupidatat aliquip est deserunt excepteur mollit. Fugiat Lorem fugiat ipsum occaecat duis qui nisi sunt minim cillum reprehenderit eiusmod veniam officia. Fugiat esse laboris esse anim. Tempor cillum Lorem magna in irure est qui. Pariatur non non dolor exercitation ullamco enim pariatur non aute commodo. In nostrud culpa qui do nostrud anim velit aliqua amet.',
    image:image5
}]


    return (
        <>
            <div className="headerblock"></div>
            <div id="productbanner"></div>
            <div id="productpage">
                <h1 style={{color:'rgb(79,79,79)'}}>The products we offer at Diagnocure(India)</h1>
                <div id="productbox">
                    <div id="rows">
                    {products.map((x, index)=>{
                        if(x.row == 1){
                        return(
                            <>
                            <div className="products" onMouseEnter={()=> setindex(index)} onMouseLeave={()=> setindex(null)}>
                                
                                    {hoverindex === index?
                                    <h2>{x.description}</h2>:
                                    <>
                                <img style={{width:'100%',borderRadius:'30px'}} src={x.image}></img>
                                <h1>{x.name}</h1>
                                    </>
                                    }
                                

                            </div>
                            </>
                        )}

                    })}
                    </div>
                    
                </div>
            </div>
        </>
    )
}