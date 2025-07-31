import React from 'react';
import { Container, Typography } from '@mui/material';
import StudyTable from './components/StudyTable';
import TodoList from './components/ToDoList';

function App() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        React Developer 7-Day Sprint 🚀
      </Typography>
      <StudyTable />
      <TodoList />
    </Container>
  );
}

export default App;
