// // import React, { useState } from 'react';
// // import Filter from './components/Filter';
// // import Navbar from "./components/Navbar";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import AnnouncementsList from './components/AnnouncementsList';
// // import AnnouncementForm from './components/AnnouncementForm';
// // import 'bootstrap/dist/css/bootstrap.min.css';


// // const App = () => {
// //     const [filters, setFilters] = useState({
// //         year: '',
// //         section: '',
// //         branch: '',
// //     });

// //     const handleFilterChange = (newFilters) => {
// //         setFilters((prevFilters) => ({
// //             ...prevFilters,
// //             ...newFilters,
// //         }));
// //     };

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import AnnouncementForm from "./components/AnnouncementForm";
// import Filter from "./components/Filter";
// import AnnouncementsList from "./components/AnnouncementsList";
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Home Page (Combining Filter & Announcements List)
// const HomePage = () => {
//     const [filters, setFilters] = useState({
//         year: "",
//         section: "",
//         branch: "",
//     });

//     const handleFilterChange = (newFilters) => {
//         setFilters((prevFilters) => ({
//             ...prevFilters,
//             ...newFilters,
//         }));
//     };

//     return (
//         <div className="container mt-4">
//             <h3>Filter Announcements</h3>
//             <Filter onFilterChange={handleFilterChange} />
            
//             <h3>Announcements</h3>
//             <AnnouncementsList filters={filters} />
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <Router>
//             <Navbar />
//             <div className="container mt-4">
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/form" element={<AnnouncementForm />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;






// //     return (
        
    

// //         <div className="container">
// //                 <Navbar/>
// //             <h1>Announcement Platform</h1>

// //             {/* Announcement Form for Teachers */}
// //             <section>
// //                 <AnnouncementForm />
// //             </section>

// //             {/* Filters for Students */}
// //             <section>
// //                 <h3>Filter Announcements</h3>
// //                 <Filter onFilterChange={handleFilterChange} />
// //             </section>

// //             {/* List of Announcements */}
// //             <section>
// //                 <h3>Announcements</h3>
// //                 <AnnouncementsList filters={filters} />
// //             </section>
// //         </div>
// //     );
// // };

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import AnnouncementForm from "./components/AnnouncementForm";
// import ViewAnnouncements from "./components/Filter";
// import AnnouncementsList from "./components/AnnouncementsList";
// import 'bootstrap/dist/css/bootstrap.min.css';

// // ✅ View Announcements Page
// const ViewAnnouncements = () => {
//     return (
//         <div className="container mt-4">
//             <h3>All Announcements</h3>
//             <AnnouncementsList filters={{}} /> {/* Show all announcements */}
//         </div>
//     );
// }


// // ✅ Main App Component
// const App = () => {
//     return (
//         <Router>
//             <Navbar />
//             <div className="container mt-4">
//                 <Routes>
//                     <Route path="/" element={<h3>Welcome to the Announcement Platform</h3>} />
//                     <Route path="/form" element={<AnnouncementForm />} />
//                     <Route path="/view-announcements" element={<ViewAnnouncements />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnnouncementForm from "./components/AnnouncementForm";
import Filter from "./components/Filter";
import AnnouncementsList from "./components/AnnouncementsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// ✅ Main App Component
// const App = () => {
//     return (
//         <Router>
//             {/* Navbar for Navigation */}
//             <Navbar />

//             <div className="container mt-4">
//                 <Routes>
//                     <Route path="/form" element={<AnnouncementForm />} />
//                     <Route path="/view-announcements" element={<ViewAnnouncements />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };


const App = () => {
    // ✅ Move filter state to App.js so it can be used by both Filter and AnnouncementsList
    const [filters, setFilters] = useState({
        announcementType: '',
        year: '',
        section: '',
        branch: '',
    });

    // ✅ Function to update filters when Filter component changes
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <Router>
            {/* Navbar for Navigation */}
            <Navbar />

            <div className="container mt-4">
                <Routes>
                    <Route path="/form" class="announce"
                    element={
                    <AnnouncementForm />} />
            

                    {/* ✅ View Announcements Page (Includes Filter & Announcements List) */}
                    <Route 
                        path="/view-announcements" 
                        element={
                            <div>
                                <Filter onFilterChange={handleFilterChange} />
                                <AnnouncementsList filters={filters} />
                            </div>
                        } 
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
