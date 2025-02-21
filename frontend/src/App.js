import logo from './logo.svg';
import './App.css';
import InputField from './components/custom/InputField';
import Button from './components/custom/Button';
import SelectField from './components/custom/SelectField';

function App() {
  return (
    <div className="m-8 flex">
      <InputField />
      <Button
        button_name="Search"
      />
      <SelectField />
    </div>
  );
}

export default App;
