import { Routes, Route } from 'react-router-dom';
import { Event } from '../pages/event';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/event/lesson/:id" element={<Event />}/>
    </Routes>
  )
}