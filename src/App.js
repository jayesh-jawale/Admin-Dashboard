import './App.css';
import { PanelList } from './components/PanelList';
import { Dashboard } from './components/Dashboard';

export default function App() {
  return (
    <div className="App">
      <div className='admin-dashboard'>
      <PanelList />
      <Dashboard />
      </div>
    </div>
  );
}