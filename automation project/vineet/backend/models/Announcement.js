import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
    announcementType: { type: String, required: true },
    year: { type: [Number], required: true },
    section: { type: [String], required: true },
    branch: { type: [String], required: true },
    deadline: { type: Date, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

// Deleting announcements older than a week from the deadline
announcementSchema.index({ deadline: 1 }, { expireAfterSeconds: 604800 }); // 604800 seconds = 1 week

export default mongoose.model('Announcement', announcementSchema);