import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import Navbar from '../NavBarAndFooter/navbar.jsx'; 
import Footer from '../NavBarAndFooter/footer.jsx'; 

const Home = () => {
    return (
        <div className="gtv_home">
            <Navbar />
            <div className="gtv_page-container">
                
                <div className="gtv_content">
                <h1 className="gtv_rrHeader" style={{marginTop: '120px', textAlign: 'center'}}>GTV: Liquidation & Receiving Report Forms</h1>

                    <div className="gtv_links-grid">
                        <Link to="/home" className="gtv_link-card">Home
                        </Link>

                        <Link to="/genmanager" className="gtv_link-card">General Manager
                            <p>Dashboard</p>
                        </Link>

                        <Link to="/cashadvance" className="gtv_link-card">Cash Advance Request
                            <p>Cash Request Form (Prop Custodian)</p>
                        </Link>

                        <Link to="/liquidationreport" className="gtv_link-card">Liquidation Report
                            <p>Sending of Report (Prop Custodian)</p>
                        </Link>

                        <Link to="/dashboard1" className="gtv_link-card">Dashboard 1
                            <p>Approval of pending requests (Admin)</p>
                        </Link>

                        <Link to="/dashboard2" className="gtv_link-card">Dashboard 2
                            <p>Approval of initially approved requests</p>
                        </Link>
                        <Link to="/dashboard3" className="gtv_link-card">Dashboard 3 (Display)
                            <p>Status of Requests (Prop Custodian)</p>
                        </Link>
                        <Link to="/receivingreport" className="gtv_link-card">Receiving Report
                            {/* <p>Status of Requests (Prop Custodian)</p> */}
                        </Link>

                        <Link to="/validationpage" className="gtv_link-card">Validation Page
                            {/* <p>Status of Requests (Prop Custodian)</p> */}
                        </Link>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
