import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="dark:bg-zinc-950 bg-slate-100 dark:text-white  min-h-screen flex flex-col font-mono">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


