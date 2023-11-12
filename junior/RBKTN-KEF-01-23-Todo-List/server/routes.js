const express = require('express');
const router = express.Router();
const db = require('./db');
router.use(express.json());
// Get all tasks
router.get('/list', async (req, res) => {
  const sql = 'SELECT * FROM list';

  try {
    const [rows, fields] = await db.queryAsync(sql);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one task
router.get('/list/:id', async (req, res) => {
  const taskId = req.params.id;
  const sql = 'SELECT * FROM list WHERE id = ?';

  try {
    const [rows, fields] = await db.queryAsync(sql, [taskId]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Cannot find task' });
    }

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create one task
router.post('/list', async (req, res) => {
  const { task, status } = req.body;

  if (!task || !status) {
    return res.status(400).json({ message: 'task and status are required.' });
  }

  const sql = 'INSERT INTO list (task, status) VALUES (?, ?)';
  const values = [task, status];

  try {
    await db.queryAsync(sql, values);
    res.status(201).json({ message: 'Task created.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update one task using put method
router.put('/list/:id', async (req, res) => {
  const taskId = req.params.id;
  const { task, status } = req.body;

  if (!task || !status) {
    return res.status(400).json({ message: 'task and status are required.' });
  }

  const sql = 'UPDATE list SET task = ?, status = ? WHERE id = ?';
  const values = [task, status, taskId];

  try {
    await db.queryAsync(sql, values);
    res.json({ message: 'Task updated.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete one task
router.delete('/list/:id', async (req, res) => {
  const taskId = req.params.id;
  const sql = 'DELETE FROM list WHERE id = ?';

  try {
    await db.queryAsync(sql, [taskId]);
    res.json({ message: 'Task deleted.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;