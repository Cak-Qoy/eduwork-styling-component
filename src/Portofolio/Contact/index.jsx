import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
            <div class="container mt-5" id="contact">
                <div class="row text-center mb-3">
                    <div class="col">
                        <h3 class="fw-bold fs-2">Contact</h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <form>
                            <div class="mb-2">
                                <label class="form-label fs-5">Email address</label>
                                <input class="form-control" />
                            </div>
                            <div class="mb-2">
                                <label class="form-label fs-5">Message</label>
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary border-dark">Kirim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>         
        )
    }
}