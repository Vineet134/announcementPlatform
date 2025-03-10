// import React, { useState } from 'react';
// import axios from 'axios';


// const AnnouncementForm = () => {
//     const [form, setForm] = useState({
//         announcementType: '',
//         year: [],
//         section: [],
//         branch: [],
//         deadline: '',
//         description: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === "announcementType") {
//             setForm({ ...form, [name]: value });
//         } else if (name === "year" || name === "section" || name === "branch") {
//             const options = Array.from(e.target.selectedOptions, option => option.value);
//             setForm({ ...form, [name]: options });
//         } else {
//             setForm({ ...form, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/announcements', form);
//             alert('Announcement posted!');
//             setForm({
//                 announcementType: '',
//                 year: [],
//                 section: [],
//                 branch: [],
//                 deadline: '',
//                 description: '',
//             });
//         } catch (error) {
//             console.error('Error posting announcement:', error);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h2 className="text-center mb-9 bold ">📢 Post an Announcement</h2>
//             <form onSubmit={handleSubmit} className="bg-light p-5 rounded shadow-lg">
//                 <div className="mb-4">
//                     <label className="form-label">Announcement Type</label>
//                     <select name="announcementType" onChange={handleChange} className="form-select" required>
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
//                     <select name="year" multiple onChange={handleChange} className="form-select">
//                         <option value="1">1st Year</option>
//                         <option value="2">2nd Year</option>
//                         <option value="3">3rd Year</option>
//                         <option value="4">4th Year</option>
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label className="form-label">Section</label>
//                     <select name="section" multiple onChange={handleChange} className="form-select">
//                         <option value="A">Section A</option>
//                         <option value="B">Section B</option>
//                         <option value="C">Section C</option>
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label className="form-label">Branch</label>
//                     <select name="branch" multiple onChange={handleChange} className="form-select">
//                         <option value="CSE">CSE</option>
//                         <option value="ECE">ECE</option>
//                         <option value="ISE">ISE</option>
//                         <option value="EEE">EEE</option>
//                         <option value="Civil">Civil</option>
//                         <option value="MECH">MECH</option>

//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label className="form-label">Deadline</label>
//                     <input type="date" name="deadline" onChange={handleChange} className="form-control" />
//                 </div>

//                 <div className="mb-4">
//                     <label className="form-label">Description</label>
//                     <textarea name="description" onChange={handleChange} className="form-control" placeholder="Enter announcement details" rows="4"></textarea>
//                 </div>

//                 <div className="d-grid gap-2">
//                 <button type="submit" className="btn btn-primary w-100"> Submit Announcement </button>
//                 </div>
//             </form>
//             <footer className="footer">
//                 <p>📍 Bengaluru </p>
//                 <p>📧 Email: <a href="mailto:contact@yourcollege.edu">contact@yourcollege.edu</a></p>
//                 <p>📞 Contact: 0676 8989887</p>
//                 <p>© {new Date().getFullYear()} College Announcements. All Rights Reserved.</p>
//             </footer>
//         </div>

//     );
// };

// export default AnnouncementForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const AnnouncementForm = () => {
//     const [form, setForm] = useState({
//         announcementType: '',
//         year: [],
//         section: [],
//         branch: [],
//         deadlineDate: '',
//         deadlineTime: '',
//         description: '',
//     });



//     return (
//         <div className="mb-6">
//             <label className="form-label text-lg font-semibold">Select Branch</label>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
//                 {["CSE", "ECE", "ISE", "EEE", "Civil", "MECH"].map((branch) => (
//                     <label 
//                         key={branch} 
//                         className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer transition"
//                     >
//                         <input 
//                             type="checkbox" 
//                             name="branch" 
//                             value={branch} 
//                             checked={selectedBranches.includes(branch)}
//                             onChange={handleChange} 
//                             className="form-checkbox w-5 h-5 text-blue-600"
//                         />
//                         <span className="text-md font-medium">{branch}</span>
//                     </label>
//                 ))}
//             </div>
//             <p className="mt-4 text-gray-700 font-medium">
//                 Selected Branches: {selectedBranches.length > 0 ? selectedBranches.join(", ") : "None"}
//             </p>
//         </div>
//     );
// };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === "announcementType") {
//             setForm({ ...form, [name]: value });
//         } else if (name === "year" || name === "section" || name === "branch") {
//             const options = Array.from(e.target.selectedOptions, option => option.value);
//             setForm({ ...form, [name]: options });
//         } else {
//             setForm({ ...form, [name]: value });
//         }
//     };


   
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const combinedDeadline = `${form.deadlineDate}T${form.deadlineTime}`;
//             await axios.post('http://localhost:5000/announcements', {
//                 ...form,
//                 deadline: combinedDeadline
//             });
//             alert('Announcement posted!');
//             setForm({
//                 announcementType: '',
//                 year: [],
//                 section: [],
//                 branch: [],
//                 deadlineDate: '',
//                 deadlineTime: '',
//                 description: '',
//             });
//         } catch (error) {
//             console.error('Error posting announcement:', error);
//         }

//     };

//     return (
//         <div className="container mt-5">
//             <h2 className="text-center mb-4">📢 Post an Announcement</h2>
//             <form onSubmit={handleSubmit} className="bg-light p-5 rounded shadow-lg">
//                 <div className="mb-4">
//                     <label className="form-label">Announcement Type</label>
//                     <select name="announcementType" onChange={handleChange} className="form-select" required>
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
//                     <select name="year" multiple onChange={handleChange} className="form-select">
//                         <option value="1">1st Year</option>
//                         <option value="2">2nd Year</option>
//                         <option value="3">3rd Year</option>
//                         <option value="4">4th Year</option>
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label className="form-label">Section</label>
//                     <select name="section" multiple onChange={handleChange} className="form-select">
//                         <option value="A">Section A</option>
//                         <option value="B">Section B</option>
//                         <option value="C">Section C</option>
//                     </select>
//                 </div>
// {/* 
//                 <div className="mb-4">
//                     <label className="form-label">Branch</label>
//                     <select name="branch" multiple onChange={handleChange} className="form-select">
//                         <option value="CSE">CSE</option>
//                         <option value="ECE">ECE</option>
//                         <option value="ISE">ISE</option>
//                         <option value="EEE">EEE</option>
//                         <option value="Civil">Civil</option>
//                         <option value="MECH">MECH</option>
//                     </select>
//                 </div> */}

// <div className="mb-4">
//     <label className="form-label">Branch</label>
//     <div className="flex flex-wrap gap-10">
//         {["CSE" , "ECE", "ISE", "EEE", "Civil", "MECH"].map((branch) => (
//             <label key={branch} className="flex items-center space-x-2">
//                 <input 
//                     type="checkbox" 
//                     name="branch" 
//                     value={branch} 
//                     onChange={handleChange} 
//                     className="form-checkbox"
//                 />
//                 <span>{branch}</span>
//             </label>
//         ))}
//     </div>
// </div>


//                 {/* Deadline Date */}
//                 <div className="mb-4">
//                     <label className="form-label">Deadline Date</label>
//                     <input type="date" name="deadlineDate" value={form.deadlineDate} onChange={handleChange} className="form-control" required />
//                 </div>

//                 {/* Deadline Time (HH:MM:SS) */}
//                 <div className="mb-4">
//                     <label className="form-label">Deadline Time (HH:MM:SS)</label>
//                     <input type="time" step="1" name="deadlineTime" value={form.deadlineTime} onChange={handleChange} className="form-control" required />
//                 </div>

//                 <div className="mb-4">
//                     <label className="form-label">Description</label>
//                     <textarea name="description" onChange={handleChange} className="form-control" placeholder="Enter announcement details" rows="4" required></textarea>
//                 </div>

//                 <div className="d-grid gap-2">
//                     <button type="submit" className="btn btn-primary w-100">Submit Announcement</button>
//                 </div>
//             </form>

//             <footer className="footer mt-4">
//                 <p>📍 Bengaluru </p>
//                 <p>📧 Email: <a href="mailto:contact@yourcollege.edu">contact@yourcollege.edu</a></p>
//                 <p>📞 Contact: 0676 8989887</p>
//                 <p>© {new Date().getFullYear()} College Announcements. All Rights Reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default AnnouncementForm;
import React, { useState } from "react";
import axios from "axios";

const AnnouncementForm = () => {
    const [form, setForm] = useState({
        announcementType: "",
        year: [],
        section: [],
        branch: [],
        deadlineDate: "",
        deadlineTime: "",
        description: "",
    });

    const yearOptions = ["1", "2", "3", "4"];
    const sectionOptions = ["A", "B", "C"];
    const branchOptions = ["CSE", "ECE", "ISE", "EEE", "Civil", "MECH"];

    const handleChange = (e) => {
        const { name, value, checked } = e.target;

        setForm((prevForm) => {
            if (["announcementType", "deadlineDate", "deadlineTime", "description"].includes(name)) {
                return { ...prevForm, [name]: value };
            }

            if (["year", "section", "branch"].includes(name)) {
                return {
                    ...prevForm,
                    [name]: checked
                        ? [...new Set([...prevForm[name], value])]
                        : prevForm[name].filter((item) => item !== value),
                };
            }

            return prevForm;
        });
    };

    const handleSelectAll = (field, options) => {
        setForm((prevForm) => ({
            ...prevForm,
            [field]: prevForm[field].length === options.length ? [] : options,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const combinedDeadline = `${form.deadlineDate}T${form.deadlineTime}`;
            await axios.post("http://localhost:5000/announcements", {
                ...form,
                deadline: combinedDeadline,
            });
            alert("Announcement posted!");
            setForm({
                announcementType: "",
                year: [],
                section: [],
                branch: [],
                deadlineDate: "",
                deadlineTime: "",
                description: "",
            });
        } catch (error) {
            console.error("Error posting announcement:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-xl font-bold">📢 Post an Announcement</h2>
            <form onSubmit={handleSubmit} className="bg-light p-5 rounded shadow-lg space-y-6">
                
                {/* Announcement Type */}
                <div className="mb-4">
                    <label className="form-label">Announcement Type</label>
                    <select name="announcementType" onChange={handleChange} className="form-select" required>
                        <option value="">Select Announcement Type</option>
                        <option value="assignment">Assignment</option>
                        <option value="placement">Placement</option>
                        <option value="club">Club</option>
                        <option value="test">Test</option>
                        <option value="webinar">Webinar</option>
                    </select>
                </div>

                {/* Year Selection */}
                <div className="mb-4">
                    <label className="form-label">Year</label>

                    <div className="flex flex-wrap gap-4 mt-2">
                    <button type="button" className="btn btn-sm btn-secondary ml-3" onClick={() => handleSelectAll("year", yearOptions)}>
                        {form.year.length === yearOptions.length ? "Deselect All" : "Select All"}
                    </button>
                        {yearOptions.map((year) => (
                            <label key={year} className="flex items-center space-x-2 p-3">
                                <input
                                    type="checkbox"
                                    name="year"
                                    value={year}
                                    checked={form.year.includes(year)}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span>{year} Year</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Section Selection */}
                <div className="mb-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 mt-4">
                    <label className="form-label">Section</label>
         
                    <div className="flex flex-wrap gap-34 mt-2">
                    <button type="button" className="btn btn-sm btn-secondary ml-3" onClick={() => handleSelectAll("section", sectionOptions)}>
                        {form.section.length === sectionOptions.length ? "Deselect All" : "Select All"}
                    </button>
                        {sectionOptions.map((section) => (
                            <label key={section} className="flex items-center space-x-2 p-3">
                                <input
                                    type="checkbox"
                                    name="section"
                                    value={section}
                                    checked={form.section.includes(section)}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                <span>Section {section}</span>
                            </label>
                        ))}
                    </div>
                </div>
                </div>

                {/* Branch Selection */}
                <div className="mb-4 ">
                <div className="grid grid-cols-132 gap-15 mt-6">
                    <label className="form-label"> Branch </label>
                   
                    <div className="flex flex-wrap gap-4 mt-2">
                    <button type="button" className="btn btn-sm btn-secondary ml-3" onClick={() => handleSelectAll("branch", branchOptions)}>
                        {form.branch.length === branchOptions.length ? "Deselect All" : "Select All"}
                    </button>
                        {branchOptions.map((branch) => (
                          <label key={branch} className="flex items-center space-x-2 p-3">

                                <input
                                    type="checkbox"
                                    name="branch"
                                    value={branch}
                                    checked={form.branch.includes(branch)}
                                    onChange={handleChange}
                                    className="form-checkbox"
                                />
                                
                                <span>{branch}</span>
                            </label>
                        ))}
                    </div>
                </div>
                </div>
                {/* Deadline Date */}
                <div className="mb-4">
                    <label className="form-label">Deadline Date</label>
                    <input type="date" name="deadlineDate" value={form.deadlineDate} onChange={handleChange} className="form-control" required />
                </div>

                {/* Deadline Time (HH:MM:SS) */}
                <div className="mb-4">
                    <label className="form-label">Deadline Time (HH:MM:SS)</label>
                    <input type="time" step="1" name="deadlineTime" value={form.deadlineTime} onChange={handleChange} className="form-control" required />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="form-label">Description</label>
                    <textarea name="description" onChange={handleChange} className="form-control" placeholder="Enter announcement details" rows="4" required></textarea>
                </div>

                {/* Submit Button */}
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary w-100">Submit Announcement</button>
                </div>
            </form>

            {/* Footer */}
            <footer className="footer mt-4 text-center">
                <p>📍 Bengaluru </p>
                <p>📧 Email: <a href="mailto:contact@yourcollege.edu">contact@yourcollege.edu</a></p>
                <p>📞 Contact: 0676 8989887</p>
                <p>© {new Date().getFullYear()} College Announcements. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default AnnouncementForm;
