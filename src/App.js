import logo from './logo.svg';
import './App.css';
import InputField from './components/custom/InputField';
import Button from './components/custom/Button';

function App() {
  return (
    <div className="m-8 flex">
      <InputField />
      <Button
        button_name="Search"
      />
    </div>
  );
}

export default App;
