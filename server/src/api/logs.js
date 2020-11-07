const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: '🌎 ',
  });
});

router.post('/', async (req, res, next) => {
  try {
    const LogEntry = new LogEntry(req.body);
    const createdEntry = await LogEntry.save();
    res.json(createdEntry);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
