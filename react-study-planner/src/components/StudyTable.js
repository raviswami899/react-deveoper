import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@mui/material';

const plan = [
  { day: 'Day 1', focus: 'HTML5, CSS3', topics: 'Semantic HTML, Flexbox, Grid', output: 'Responsive layout' },
  { day: 'Day 2', focus: 'JavaScript ES6+', topics: 'let/const, async/await, array methods', output: 'JS functions' },
  { day: 'Day 3', focus: 'ReactJS', topics: 'Hooks, JSX, Props', output: 'To-do App' },
  { day: 'Day 4', focus: 'Routing & APIs', topics: 'react-router-dom, fetch, axios', output: 'Multi-page app' },
  { day: 'Day 5', focus: 'UI Libraries & Git', topics: 'Material-UI, Forms, Git', output: 'Login/Signup UI' },
  { day: 'Day 6', focus: 'Testing & Performance', topics: 'Jest, RTL, Lighthouse', output: 'Test cases + optimization' },
  { day: 'Day 7', focus: 'CI/CD & Agile', topics: 'GitHub Actions, Scrum', output: 'CI pipeline + prep' },
];

export default function StudyTable() {
  return (
    <Paper sx={{ p: 2, mt: 4 }}>
      <Typography variant="h5" gutterBottom>📅 Study Plan Overview</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>Focus</TableCell>
            <TableCell>Topics</TableCell>
            <TableCell>Output</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plan.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.day}</TableCell>
              <TableCell>{row.focus}</TableCell>
              <TableCell>{row.topics}</TableCell>
              <TableCell>{row.output}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
