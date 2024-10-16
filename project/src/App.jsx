import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      {/* <Navigation /> */}
      <main className="mx-3">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
