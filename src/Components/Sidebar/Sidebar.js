import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {SwaggerTest} from "../SwaggerUI/SwaggerUI";
import { RedocStandalone } from 'redoc';
import RuleBuilder from "../RuleBuilder/RuleBuilder";
import Home from "../Home/Home";
import Board from "../Chess/Board";
import D3 from "../D3/D3";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rules: [
                {
                    ruleId: 1,
                    xpath: 'RepairOrder/Job',
                    operator: 'required',
                    error: 'The Job component is required'
                },
                {
                    ruleId: 2,
                    xpath: 'RepairOrder/Job/ServiceLabor/OperationID',
                    operator: 'equals',
                    error: 'The OperationID component must equal: 1234'
                }],
            routes: [
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
                    main: () => <RedocStandalone specUrl='http://localhost:8080/src/Utils/evalApiSpec.json'/>
                },
                {
                    path: "/RuleBuilder",
                    sidebar: () => <div>Build Rules!</div>,
                    main: () => <RuleBuilder rules={this.state.rules}/>
                },
                {
                    path: "/Chess",
                    sidebar: () => <div>Drag and Drop</div>,
                    main: () => <Board knightPosition={[4, 7]}/>
                },
                {
                    path: "/D3",
                    sidebar: () => <div>Data Visualization Example</div>,
                    main: () => <D3/>
                }
            ]
    };
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
                            <li>
                                <Link to="/Chess">Chess</Link>
                            </li>
                            <li>
                                <Link to="/D3">D3</Link>
                            </li>
                        </ul>

                        {this.state.routes.map((route, index) => (
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
                        {this.state.routes.map((route, index) => (
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