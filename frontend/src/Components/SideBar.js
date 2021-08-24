import React, {Component} from 'react';
import '../Styles/sidebar.css';
import * as AiIcon from "react-icons/ai";


class SideBar extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            
            <div>
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div class="position-sticky pt-3">
                            <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">
                                <span><AiIcon.AiFillHome/>   </span>
                                
                                Dashboard
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                <span><AiIcon.AiOutlineFile/>   </span>
                                Orders
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                <span><AiIcon.AiOutlineShoppingCart/>   </span>
                                Products
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                <span><AiIcon.AiOutlineUser/>   </span>
                                Supplier Details
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/itemList">
                                <span><AiIcon.AiOutlineHdd/>   </span>
                                Supplied Items
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                <span><AiIcon.AiOutlineSolution/>   </span>
                                Feedback
                                </a>
                            </li>
                            </ul>

                            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Saved reports</span>
                            <a class="link-secondary" href="#" aria-label="Add a new report">
                                <span data-feather="plus-circle"></span>
                            </a>
                            </h6>
                            <ul class="nav flex-column mb-2">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Order Report
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Products Report
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Supplied Item Report
                                </a>
                            </li>
                            
                            </ul>
                        </div>
                </nav>
            </div>
        )
    }
}

export default SideBar;