import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from "./CoursesPage";
import AuthorsPage from "./AuthorsPage";
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import ManageAuthorPage from "./ManageAuthorPage"; //css that comes with react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

    return(
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar/>
        <Header />
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/courses" component={CoursesPage}/>
                <Route path="/course/:slug" component={ManageCoursePage}/>
                <Route path="/course" component={ManageCoursePage}/>
                <Route path="/authors" component={AuthorsPage}/>
                <Route path="/author/:slug" component={ManageAuthorPage}/>
                <Route path="/author" component={ManageAuthorPage}/>
                <Redirect from="/about-page" to="about" />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;