import React from "react";
import Bio from "./Bio";
import Contact from "./Contact";
import Footer from "./Footer";
import JumbotronFluid from "./Jumbotron";
import NavigationBar from "./Navigation-Bar";

const Portofolio = () => {
    return(
        <>
        <NavigationBar />
        <JumbotronFluid />
        <Bio />
        <Contact />
        <Footer />
        </>
    )
}

export default Portofolio;