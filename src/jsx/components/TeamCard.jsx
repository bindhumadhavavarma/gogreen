import React from 'react'

function TeamCard(props) {
    return (
        <>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="team-item rounded overflow-hidden">
                    <div class="d-flex" style={{height:"300px"}}>
                        <img class="img-fluid" src={props.img} alt="" style={{width:"100%",height:"300px",objectFit:"cover"}}/>
                    </div>
                    <div class="p-4">
                        <h5>{props.fullname}</h5>
                        <span>{props.designation}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard