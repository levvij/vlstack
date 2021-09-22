import { Component } from "node_modules/vldom/component";

export class PageComponent extends Component {
	render(child?: Node) {
		return <ui-root>
			{child}
		</ui-root>;
    }
}