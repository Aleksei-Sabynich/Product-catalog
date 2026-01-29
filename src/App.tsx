import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import './app/styles/_index.scss';

function App() {
  return <RouterProvider router={router} />;
}
export default App;
