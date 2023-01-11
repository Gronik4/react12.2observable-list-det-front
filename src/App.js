import { useSelector, useDispatch } from 'react-redux';
import { listRequest } from './reduxes/sliseList';
import './css/App.css';
import './css/stamp.css';
import { OutputList } from './components/OutputList';
import { OutputDetails } from './components/OutputDetails';

function App() {
  const state_V_list = useSelector((state) => state.showlist);
  const state_V_det = useSelector((state) => state.showdetails);
  const dispatch = useDispatch();
  window.onload = () => { dispatch(listRequest()); };
  return (
    <div className="App">
        <OutputList dat={state_V_list}/>
        <OutputDetails dat={state_V_det}/>
    </div>
  );
}

export default App;
