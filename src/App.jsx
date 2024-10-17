import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      {/* <Navigation /> */}
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;