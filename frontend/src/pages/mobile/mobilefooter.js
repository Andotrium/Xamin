import { Link } from "react-router-dom"
import "./mobilefooter.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

export default function Mobilefooter() {
    return (
        <>
            <div className="mobilefooterbox">
                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButton className="category2">
                            <h2>Useful Links</h2>
                            <AccordionIcon style={{ color: 'white' }} />
                        </AccordionButton>
                        <AccordionPanel>
                            <nav>
                                <Link to={'/about'} style={{ textDecoration: 'none' }}>
                                    <h3>About us</h3>
                                </Link>
                            </nav>
                            <nav>
                                <Link to={'/products'} style={{ textDecoration: 'none' }}>
                                    <h3>Our Products</h3>
                                </Link>
                            </nav>
                            <nav>
                                <Link to={'/contacts'} style={{ textDecoration: 'none' }}>
                                    <h3>Contact Us</h3>
                                </Link>
                            </nav>
                            <nav>
                                <Link to={'/downloads'} style={{ textDecoration: 'none' }}>
                                    <h3>Downloads</h3>
                                </Link>
                            </nav>
                            <nav>
                                <Link to={'/updates'} style={{ textDecoration: 'none' }}>
                                    <h3>Updates</h3>
                                </Link>
                            </nav>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton className="category2">
                            <h2>Our Products</h2>
                            <AccordionIcon style={{ color: 'white' }} />
                        </AccordionButton>
                        <AccordionPanel>
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <AccordionButton className="subcategory2">
                                        <h3>
                                            Respiratory
                                        </h3>
                                        <AccordionIcon style={{ color: "black" }} />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <h4>
                                            Covid-19 Ag <br />
                                            Covid -19 IgG Ab
                                        </h4>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionButton className="subcategory2">
                                        <h3>Vector Borne Disease</h3>
                                        <AccordionIcon style={{ color: "black" }} />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <h4>
                                            Dengue Duo <br />
                                            Dengue Ns1 Ag <br />
                                            Dengue IgG/IgM Ab <br />
                                            Chikungunya IgG/IgM <br />
                                            Leptospira IgG/IgM <br />
                                            Malaria Pf Ag <br />
                                            Malaria Pf/Pv Ag <br />
                                            Malaria Pf/Pan Ag <br />
                                            Typhoid IgG/IgM Ab <br />
                                        </h4>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionButton className="subcategory2">
                                        <h3>Blood Borne Disease</h3>
                                        <AccordionIcon style={{ color: "black" }} />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <h4>
                                            HIV 1/2 Triline Ab <br />
                                            Syphilis Ab <br />
                                            HIV/Syphilis Combo <br />
                                        </h4>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionButton className="subcategory2">
                                        <h3>
                                            Hepatitis
                                        </h3>
                                        <AccordionIcon style={{ color: "black" }} />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <h4>
                                            HBsAg <br />
                                            HCV Ab
                                        </h4>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionButton className="subcategory2">
                                        <h3>Gastorintestinal Disease</h3>
                                        <AccordionIcon style={{ color: "black" }} />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <h4>
                                            H.Pylori Ab
                                        </h4>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionButton className="subcategory2">
                                        <h3>Cardiac Marker</h3>
                                        <AccordionIcon style={{ color: "black" }} />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <h4>
                                            Troponin I
                                        </h4>
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionButton className="subcategory2">
                                        <h3>Fertility</h3>
                                        <AccordionIcon style={{ color: "black" }} />
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <h4>
                                            One step Urine Pregnancy Test (Mini) <br />
                                            One step Urine Pregnancy Test (Maxi) <br />
                                            One step Urine/Serum Pregnancy Test Device <br />
                                            LH Ovulation <br />
                                        </h4>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton className="category2">
                            <h2>Contact Us</h2>
                            <AccordionIcon style={{ color: 'white' }} />
                        </AccordionButton>
                        <AccordionPanel>

                            <h3><b>WhatsApp</b> : +91 9615096156</h3>
                            <h3><b>Call</b> : +91 9615096156 <br /></h3>
                            <h3><b>Availability</b> : 10am-6pm from Monday to Saturday</h3>
                            <h3><b>Email</b> : info@diagnocureindia.com <br /></h3>
                            <h3><b>Address</b> : Diagnocure India,<br />
                                #2, F/F, Electronics Complex, Chambaghat
                                Distt. Solan H.P. - 173213</h3>

                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="copyright">
                <h2>© 2024, Diagnocure India. All Rights Reserved. Developed by <b>Andotrium</b></h2>
            </div>
        </>
    )
}