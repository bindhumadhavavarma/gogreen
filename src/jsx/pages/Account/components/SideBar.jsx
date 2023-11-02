import React, { useContext } from 'react'
import { UserContext } from '../../../../context/UserContext'

function SideBar(props) {
    const { logout } = useContext(UserContext)

    return (
        <div class="pt-10 pe-lg-10">
            <ul class="nav flex-column nav-pills nav-pills-dark">
                <li class="nav-item">
                    <a className={`nav-link ${props.curTab == 4 ? 'active' : ''}`} aria-current="page" href="#" onClick={() => props.setCurTab(4)}><i
                        class="feather-icon icon-shopping-bag me-2" data-feather="shopping-cart"></i>Cart</a>
                </li>
                <li class="nav-item">
                    <a className={`nav-link ${props.curTab == 0 ? 'active' : ''}`} aria-current="page" href="#" onClick={() => props.setCurTab(0)}><i
                        class="feather-icon icon-shopping-bag me-2" data-feather="shopping-bag"></i>Your Orders</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${props.curTab == 1 ? 'active' : ''}`} href="#" onClick={() => props.setCurTab(1)}><i
                        class="feather-icon icon-settings me-2" data-feather="settings"></i>Settings</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${props.curTab == 2 ? 'active' : ''}`} href="#" onClick={() => props.setCurTab(2)}><i
                        class="feather-icon icon-map-pin me-2" data-feather="map-pin"></i>Address</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${props.curTab == 3 ? 'active' : ''}`} href="#" onClick={() => props.setCurTab(3)}><i
                        class="feather-icon icon-credit-card me-2" data-feather="credit-card"></i>Payment Method</a>
                </li>
                <li class="nav-item">
                    <hr />
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${props.curTab == 5 ? 'active' : ''}`} onClick={logout }><i class="feather-icon icon-log-out me-2" data-feather="log-out"></i>Log out</a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar