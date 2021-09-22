import { Component } from "node_modules/vldom/component";

export class HomeComponent extends Component {
    async onload() {

    }

    render() {
        return <ui-block>
            Welcome $${{name}}!
        </ui-block>;
    }
}