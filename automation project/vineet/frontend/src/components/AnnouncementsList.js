// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AnnouncementsList = ({ filters }) => {
//     const [announcements, setAnnouncements] = useState([]);

//     useEffect(() => {
//         const fetchAnnouncements = async () => {
//             const query = new URLSearchParams(filters).toString();
//             const response = await axios.get (http://localhost:5000/announcements?${query});
//             setAnnouncements(response.data);
//         };

//         fetchAnnouncements();
//     }, [filters]);

//     return (
//         <div className="container mt-5">
//             {announcements.length === 0 ? (
//                 <div className="alert alert-warning" role="alert">
//                     No announcements found.
//                 </div>
//             ) : (
//                 announcements.map((ann) => (
//                     <div key={ann._id} className="card mb-4 shadow-sm">
//                         <div className="card-body">
//                             <h5 className="card-title">{ann.announcementType}</h5>
//                             <p className="card-text">{ann.description}</p>
//                             <p className="card-text">
//                                 <small className="text-muted">Deadline: {new Date(ann.deadline).toLocaleDateString()}</small>
//                             </p>
//                         </div>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// };

// export default AnnouncementsList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';

const AnnouncementsList = ({ filters }) => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            setLoading(true);
            try {
                const query = new URLSearchParams(filters).toString();
                const response = await axios.get(`http://localhost:5000/announcements?${query}`);
                setAnnouncements(response.data);
            } catch (error) {
                console.error("Error fetching announcements:", error);
                setAnnouncements([]); // Prevent UI crashes
            }
            setLoading(false);
        };

        fetchAnnouncements();
    }, [filters]); // Ensure filters are stable to prevent infinite re-fetching


    // Function to calculate time left
    const getTimeLeft = (deadline) => {
        const now = new Date();
        const deadlineDate = new Date(deadline);
        const diff = deadlineDate - now; // Time difference in milliseconds

        // if (diff <= 0) return  " Deadline Passed" // If the deadline has passed
        if (diff <= 0) return <strong>🔴 ⚠️ Deadline Passed </strong>;
if (diff < 6 && diff > 2) return <strong style={{ color: 'blue' }}>⚠️ Alert</strong>;


        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        return <strong> {days} days {hours} hours {minutes} minutes left </strong> ;
    };

    

    return (
        <div className="container mt-5">
            {loading ? (
                <div className="alert alert-info"
                id="filterannounce" role="alert"> 
                    Loading announcements...
                </div>
            ) : announcements.length === 0 ? (
                <div className="alert alert-warning" role="alert">
                    No announcements found.
                </div>
            ) : (
                announcements.map((ann) => (
                    <div key={ann._id} className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">{ann.announcementType}</h5>
                            <p className="card-text">{ann.description}</p>
                            <p className="card-text">
                                <small className="text-muted">
                                    <div class="timeleft">
                ⏳ <strong> Time Left  : </strong>  {getTimeLeft(ann.deadline)}
            </div>
                                </small>

                            </p>
                            
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default AnnouncementsList;
