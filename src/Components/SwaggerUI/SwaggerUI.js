import React, {Component} from 'react';
import SwaggerUi, {presets} from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

export class SwaggerTest extends Component {
    componentDidMount() {
        SwaggerUi({
            dom_id: '#swaggerContainer',
            url: 'http://localhost:8080/src/Utils/evalApiSpec.json',
            presets: [presets.apis],
            showRequestHeaders: true
        });
    }

    render() {
        return (
            <div id="swaggerContainer" />
        );
    }
}