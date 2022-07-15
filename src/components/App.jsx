import Counter from "./Counter/Counter";
import Dropdown from './Dropdown/Dropdown';

export const App = () => {
  return (
    <div>
      {/* React homework template */}
      <Counter initialValue={0} />
      <Dropdown />
    </div>
  );
};