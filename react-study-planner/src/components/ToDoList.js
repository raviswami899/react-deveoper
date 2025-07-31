import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Paper, Typography } from '@mui/material';

const tasks = [
  'Review semantic HTML & ARIA roles',
  'Build responsive card layout',
  'Explore Flexbox & Grid challenges',
  'Complete layout demo',
];

export default function TodoList() {
  const [checked, setChecked] = useState([]);

  const handleToggle = (task) => {
    setChecked((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );
  };

  return (
    <Paper sx={{ p: 2, mt: 4 }}>
      <Typography variant="h5" gutterBottom>✅ Day 1 Tasks</Typography>
      {tasks.map((task, i) => (
        <FormControlLabel
          key={i}
          control={
            <Checkbox
              checked={checked.includes(task)}
              onChange={() => handleToggle(task)}
            />
          }
          label={task}
        />
      ))}
    </Paper>
  );
}
