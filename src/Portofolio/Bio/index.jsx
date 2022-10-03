import React from "react";

const Bio = () => {
    return (
        <div class="container text-center p-5" id="bio">
        <h3 class="fw-bold fs-2">My Bio</h3>
        <p class="fs-6 fst-italic fw-light mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi provident
            sint debitis, mollitia nisi, quos voluptates accusantium ducimus eaque rem, ipsa minus repellat quasi vel ex
            porro fuga dolorum unde?</p>
        <div class="row">
            <div class="col-sm-4">
                <h6 class="fs-5">Bed cum wheel chair</h6>
                <p class="fs-6 fw-light">Created a bed cum wheelchair model which will be very useful for
                patients who cannot move from bed and does not need anybody to make them lay in bed</p>
            </div>
            <div class="col-sm-4">
                <h6 class="fs-5">Rock Paper Scissor game</h6>
                <p class="fs-6 fw-light">Created a Rock Paper Scissor game in Python language.This was my
                first project in python.Learning Machine learning with python</p>
            </div>
            <div class="col-sm-4">
                <h6 class="fs-5">Volunteer in NSS</h6>
                <p class="fs-6 fw-light">I am a NSS volunteer and I am doing social activities with the
                help of our institution. I Went to Eripatti,Pollachi and renowated schools and the surrounding
                areas along with my student friends.</p>
            </div>
        </div>
    </div>
    )
}

export default Bio;