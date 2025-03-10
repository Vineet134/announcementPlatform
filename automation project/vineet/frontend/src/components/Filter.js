// import React, { useState } from 'react';

// const Filter = ({ onFilterChange }) => {
//     const [filters, setFilters] = useState({
//         announcementType: '',
//         year: '',
//         section: '',
//         branch: '',
//     });

//     const handleFilterChange = (e) => {
//         const { name, value } = e.target;
//         setFilters({
//             ...filters,
//             [name]: value,
//         });
//     };

//     const handleApplyFilters = () => {
//         onFilterChange(filters);
//     };

//     return (
//         <div className="container mt-5">
//             <h4 className="text-center mb-4">Filter Announcements</h4>
//             <div className="bg-light p-5 rounded shadow-lg">
//                 <div className="mb-4">
//                     <label className="form-label">Announcement Type</label>
//                     <select
//                         name="announcementType"
//                         onChange={handleFilterChange}
//                         value={filters.announcementType}
//                         className="form-select"
//                     >
//                         <option value="">Select Announcement Type</option>
//                         <option value="assignment">Assignment</option>
//                         <option value="placement">Placement</option>
//                         <option value="club">Club</option>
//                         <option value="test">Test</option>
//                         <option value="webinar">Webinar</option>
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label className="form-label">Year</label>
//                     <select
//                         name="year"
//                         onChange={handleFilterChange}
//                         value={filters.year}
//                         className="form-select"
//                     >
//                         <option value="">Select Year</option>
//                         <option value="1">1st Year</option>
//                         <option value="2">2nd Year</option>
//                         <option value="3">3rd Year</option>
//                         <option value="4">4th Year</option>
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label className="form-label">Section</label>
//                     <select
//                         name="section"
//                         onChange={handleFilterChange}
//                         value={filters.section}
//                         className="form-select"
//                     >
//                         <option value="">Select Section</option>
//                         <option value="A">Section A</option>
//                         <option value="B">Section B</option>
//                         <option value="C">Section C</option>
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label className="form-label">Branch</label>
//                     <select
//                         name="branch"
//                         onChange={handleFilterChange}
//                         value={filters.branch}
//                         className="form-select"
//                     >
//                         <option value="">Select Branch</option>
//                         <option value="CSE">CSE</option>
//                         <option value="ECE">ECE</option>
//                         <option value="MECH">MECH</option>
//                     </select>
//                 </div>

//                 <button onClick={handleApplyFilters} className="btn btn-primary w-100">
//                     Apply Filters
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Filter;

import React, { useState } from 'react';
import '../styles.css';
const Filter = ({ onFilterChange = () => {} }) => { // ✅ Default function to prevent errors
    const [filters, setFilters] = useState({
        announcementType: '',
        year: '',
        section: '',
        branch: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleApplyFilters = () => {
        if (typeof onFilterChange === 'function') { // ✅ Ensure it's a valid function
            onFilterChange(filters);
        } else {
            console.error("onFilterChange is not a function");
        }
    };
  
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-9 bold">🔍 Filter Announcements</h2>
            <div className="bg-light p-5 rounded shadow-lg">
                <div className="mb-4">
                    <label className="form-label">Announcement Type</label>
                    <select
                        name="announcementType"
                        onChange={handleFilterChange}
                        value={filters.announcementType}
                        className="form-select"
                    >
                        <option value="">Select Announcement Type</option>
                        <option value="assignment">Assignment</option>
                        <option value="placement">Placement</option>
                        <option value="club">Club</option>
                        <option value="test">Test</option>
                        <option value="webinar">Webinar</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="form-label">Year</label>
                    <select
                        name="year"
                        onChange={handleFilterChange}
                        value={filters.year}
                        className="form-select"
                    >
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="form-label">Section</label>
                    <select
                        name="section"
                        onChange={handleFilterChange}
                        value={filters.section}
                        className="form-select"
                    >
                        <option value="">Select Section</option>
                        <option value="A">Section A</option>
                        <option value="B">Section B</option>
                        <option value="C">Section C</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="form-label">Branch</label>
                    <select
                        name="branch"
                        onChange={handleFilterChange}
                        value={filters.branch}
                        className="form-select"
                    >
                        <option value="">Select Branch</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="ISE">ISE</option>
                        <option value="EEE">EEE</option>
                        <option value="Civil">Civil</option>
                        <option value="MECH">MECH</option>

                    </select>
                </div>

                <button onClick={handleApplyFilters} className="btn btn-primary w-100">
                    Apply Filters

                </button>
            </div>
        </div>
    );
};

export default Filter;
