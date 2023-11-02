import React, { useState } from 'react'
import Orders from './components/Orders'
import SideBar from './components/SideBar'
import Settings from './components/Settings'
import Addresses from './components/Addresses'
import PaymentMethods from './components/PaymentMethods'
import Cart from './components/Cart'

function Account(props) {
    const [curTab, setCurTab] = useState(props.tab?props.tab:0)

    return (
        <>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex justify-content-between align-items-center d-md-none py-4">
                                <h3 class="fs-5 mb-0">Account Setting</h3>
                                <button class="btn btn-outline-gray-400 text-muted d-md-none btn-icon btn-sm ms-3 " type="button"
                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasAccount" aria-controls="offcanvasAccount">
                                    <i class="bi bi-text-indent-left fs-3"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-12 border-end  d-none d-md-block">
                            <SideBar curTab={curTab} setCurTab={setCurTab}></SideBar>
                        </div>
                        <div class="col-lg-9 col-md-8 col-12">
                            {curTab==0?(<Orders></Orders>):curTab==1?(<Settings></Settings>):curTab==2?<Addresses></Addresses>:curTab==3?<PaymentMethods/>:<Cart setCurTab={setCurTab}></Cart>}
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Account