import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hobbies from "./pages/Hobbies";
import Projects from "./pages/Projects";
import Acheivemets from "./pages/Acheivements";
import Header from "./components/Header";   
import Footer from "./components/Footer";
import MenuIcon from "./components/MenuIcon";
import "./App.css";
import profile from "./pages/Profile";
import Blog from "./pages/Blog";


const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 overflow-y-auto  p-4">  
                    <Switch>
                        <Route path="/" exact component={profile} />
                        <Route path="/profile" component={profile} />
                        <Route path="/hobbies" component={Hobbies} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/acheivements" component={Acheivemets} />
                        <Route path="/blog" component={Blog} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );

}


export default App;