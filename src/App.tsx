import './App.less';
import { UserContextProvider } from './context/UserContextProvider';
import { Users } from './modules/users';

function App() {
  return (
    <UserContextProvider>
      <Users />
    </UserContextProvider>
  );
}

export default App;
