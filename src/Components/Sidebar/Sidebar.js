import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {SwaggerTest} from "../SwaggerUI/SwaggerUI";
import { RedocStandalone } from 'redoc';
import RuleBuilder from "../RuleBuilder/RuleBuilder";
import Home from "../Home/Home";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>Welcome Home!</div>,
        main: () => <Home/>
    },
    {
        path: "/EvalApiSpec",
        sidebar: () => <div>Eval API Spec!</div>,
        main: () => <SwaggerTest/>
    },
    {
        path: "/Redoc",
        sidebar: () => <div>Redoc Eval API Spec!</div>,
        main: () => <RedocStandalone specUrl= 'http://localhost:8080/src/Utils/evalApiSpec.json'/>
    },
    {
        path: "/RuleBuilder",
        sidebar: () => <div>Build Rules!</div>,
        main: () => <RuleBuilder/>
    }
];

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state ={
            rules: [
                {xpath: 'RepairOrder/Job',
                 operator: '=',
                 error: 'The Job component is required'
                }]
        }
    }
    render() {
        return (
            <Router>
                <div style={{display: "flex"}}>
                    <div
                        style={{
                            padding: "10px",
                            width: "10%",
                            background: "#f0f0f0"
                        }}
                    >
                        <ul style={{listStyleType: "none", padding: 0}}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/EvalApiSpec">Swagger - Eval API</Link>
                            </li>
                            <li>
                                <Link to="/Redoc">Redoc - Eval API</Link>
                            </li>
                            <li>
                                <Link to="/RuleBuilder">RuleBuilder</Link>
                            </li>
                        </ul>

                        {routes.map((route, index) => (
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a sidebar or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.sidebar}
                            />
                        ))}
                    </div>

                    <div style={{flex: 1, padding: "10px"}}>
                        {routes.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        )
    }
}

export default Sidebar;