// Todo: Bring in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      {/* Todo: Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
