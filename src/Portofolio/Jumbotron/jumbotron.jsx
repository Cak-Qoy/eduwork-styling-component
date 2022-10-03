import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron" class="jumbotron rounded-3 bg-light p-5" id="jumbo">
                <div class="container-fluid py-5 text-center">
                    <p class="lead fst-italic mt-5">Web Developer</p>
                    <h1 class="display-6">Abdul Qoyyum</h1>
                    <div class="d-grid gap-2 d-md-flex justify-content-center mt-5">
                        <button className="btn" class="btn btn-primary border-dark" type="button">IG Profile</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jumbotron;