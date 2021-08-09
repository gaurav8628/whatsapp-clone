import {React,useState,useEffect} from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Login'
import {useStateValue} from './StateProvider'

// reducer + context
// firebase gauravverma.gv.786@gmail.com
function App() {
    // const [user,setUser] = useState(null);
    const [{user},dispatch] = useStateValue();
    return (
        <div className="app">
        {!user ? (
            <Login/>
        ):(
            
            <div className="app_body">
                <Router> 
                    <Sidebar/>
                    <Switch>
                        <Route path="/rooms/:roomId"> 
                           
                            <Chat/>
                        </Route>
                        {/* <Route path="/">
                            <Chat/>
                        </Route> */}
                    </Switch>
                    
                </Router> 
               {/* <Sidebar/>
               <Chat/> */}
                
            </div>
        
        )}
        </div>

        
    )
}

export default App
