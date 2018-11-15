import React, { Component } from 'react';
import { HashRouter as Router ,Route,Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Ibutton from './components/Button';
import Imodals from './components/Modals';
import Nomatch from './components/Nomatch';
import Iloading from './components/Loading';
import Inotification from './components/Notification';
import Imessages from './components/Message';
import Itabs from './components/Tab';
import Igallery from './components/Gallery';
import Icarousel from './components/Carousel';
import Flogin from './components/Flogin';
import Freg from './components/Freg';
import BasicTable from './components/BasicTable';
import HighTable from './components/HighTable';

class Irouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (            
                <Router>
                    <App>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/admin" render={()=>
                                    <Admin>
                                        <Switch>
                                            <Route path="/admin/ui/buttons" component={Ibutton}/>
                                            <Route path="/admin/ui/modals" component={Imodals}/>
                                            <Route path="/admin/ui/loadings" component={Iloading}/>
                                            <Route path="/admin/ui/notification" component={Inotification}/>
                                            <Route path="/admin/ui/messages" component={Imessages}/>
                                            <Route path="/admin/ui/tabs" component={Itabs}/>
                                            <Route path="/admin/ui/gallery" component={Igallery}/>
                                            <Route path="/admin/ui/carousel" component={Icarousel}/>
                                            <Route path="/admin/form/login" component={Flogin}/>
                                            <Route path="/admin/form/reg" component={Freg}/>
                                            <Route path="/admin/table/basic" component={BasicTable}/>
                                            <Route path="/admin/table/high" component={HighTable}/>
                                            <Route component={Nomatch}/>
                                        </Switch>
                                    </Admin>
                                }/> 
                            <Route component={Nomatch}/>   
                        </Switch>
                    </App>
                </Router>
         );
    }
}
 
export default Irouter;