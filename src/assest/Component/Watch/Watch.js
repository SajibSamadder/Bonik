import React from 'react'
import "./Watch.css"
function Watch() {
    return (
        <section className='watch'>
            <div className="watch_wrapper" style={{ "padding": "0 110px", "margin-top": "20px" }}>
                <div className="watch_left">
                    <div class="nav nav-tabs">
                        <button class="nav-link active show_border" data-bs-toggle="tab" data-bs-target="#nav-home">Home</button>
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-profile" >Profile</button>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="nav-home" >
                            <div className='nav'>
                                <button class="nav-link active" id='watch-1-tab' data-bs-toggle="pill" data-bs-target="#watch-1" >Home1</button>
                                <button class="nav-link" id='watch-2-tab' data-bs-toggle="pill" data-bs-target="#watch-2">Profile</button>
                                <button class="nav-link" id='watch-3-tab' data-bs-toggle="pill" data-bs-target="#watch-3" >Messages</button>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" >
                            <div className='nav'>
                                <button class="nav-link" id='watch-4-tab' data-bs-toggle="pill" data-bs-target="#watch-4">Home2</button>
                                <button class="nav-link" id='watch-5-tab' data-bs-toggle="pill" data-bs-target="#watch-5">Profile</button>
                                <button class="nav-link" id='watch-6-tab' data-bs-toggle="pill" data-bs-target="#watch-6" >Messages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="watch_right">
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="watch-1" aria-labelledby='watch-1-tab' >
                            <h1>Hello1</h1>
                        </div>
                        <div class="tab-pane fade" id="watch-2" aria-labelledby='watch-2-tab'>
                            <h1>Hello2</h1>
                        </div>
                        <div class=" tab-pane fade" id="watch-3" aria-labelledby='watch-3-tab'>
                            <h1>Hello3</h1>
                        </div>
                        <div class="tab-pane fade" id="watch-4" aria-labelledby='watch-4-tab'>
                            <h1>Hello4</h1>
                        </div>
                        <div class="tab-pane fade" id="watch-5" aria-labelledby='watch-5-tab'>
                            <h1>Hello5</h1>
                        </div>
                        <div class=" tab-pane fade" id="watch-6" aria-labelledby='watch-6-tab'>
                            <h1>Hello6</h1>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Watch