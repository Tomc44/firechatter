
import { Divider } from 'material-ui';
import './App.css';
import Chat from './components/Chat';
import Signin from './components/Signin';
import {auth} from './firebase'
import{useAuthState} from 'react-firebase-hooks/auth'
import SignOut from './components/SignOut';
const App = () => {
    // const [user] = useAuthState(auth);
    const user = true;
return (
    <div>
        {user ? <Chat/> : <Signin/>}
     

    {/* <SignOut/> */}
     </div>
    );
}

export default App;
