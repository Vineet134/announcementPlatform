import express from 'express';
import Announcement from '../models/announcement.js';


const router = express.Router();

// POST: Add an announcement
router.post('/', async (req, res) => {
    const { announcementType, year, section, branch, deadline, description } = req.body;

    try {
        const newAnnouncement = new Announcement({ announcementType, year, section, branch, deadline, description });
        await newAnnouncement.save();
        res.status(201).json(newAnnouncement);
    } catch (error) {
        res.status(400).json({ message: 'Error posting announcement', error });
    }
});

// GET: Get filtered announcements
router.get('/', async (req, res) => {
    const {announcementType,year, section, branch } = req.query;

    try {
        const filters = {};
        if (announcementType) filters.announcementType = announcementType;
        if (year) filters.year = { $in: year.split(',').map(Number) };
        if (section) filters.section = { $in: section.split(',') };
        if (branch) filters.branch = { $in: branch.split(',') };

        const announcements = await Announcement.find(filters).sort({ deadline: 1 });
        res.status(200).json(announcements);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching announcements', error });
    }
});

export default router;