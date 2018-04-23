import React, {Component} from 'react';
import SwaggerUi, {presets} from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

export class SwaggerTest extends Component {
    componentDidMount() {
        SwaggerUi({
            dom_id: '#swaggerContainer',
            url: 'http://localhost:8080/evalApiSpec.json',
            presets: [presets.apis],
        });
    }

    render() {
        return (
            <div id="swaggerContainer" />
        );
    }
}