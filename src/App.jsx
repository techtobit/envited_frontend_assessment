import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookedEvent from './Components/BookedEvent/BookedEvent';
import EventPage from './Components/EventPage/EventOverview';
import LandingPage from './Components/LandingPage/LandingPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}>
        </Route>
        <Route path='/bookEvent' element={<BookedEvent></BookedEvent>}> </Route>
        <Route path='/eventOverview' element={<EventPage></EventPage>} />
      </Routes>

    </div>
  );
};

export default App;