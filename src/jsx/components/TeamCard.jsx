import React from 'react'

function TeamCard(props) {
    return (
        <>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item rounded overflow-hidden">
                    <div className="d-flex" style={{height:"300px"}}>
                        <img className="img-fluid" src={props.img} alt="" style={{width:"100%",height:"300px",objectFit:"cover"}}/>
                    </div>
                    <div className="p-4">
                        <h5>{props.fullname}</h5>
                        <span>{props.designation}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamCard