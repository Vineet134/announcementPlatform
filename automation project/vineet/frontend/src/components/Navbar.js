// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
//             <div className="container">
//                 <Link className="navbar-brand" to="/">Announcement Platform</Link>
//                 <button 
//                     className="navbar-toggler" 
//                     type="button" 
//                     data-bs-toggle="collapse" 
//                     data-bs-target="#navbarNav"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/form">Add Announcement</Link>
//                         </li>

//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                {/* <Link className="navbar-brand" to="/">Announcement Platform</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                > */}
                    {/* <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/form">Add Announcement</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/view-announcements">View Announcements</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
