import { Router } from "node_modules/vldom/router";

export class Application {
    static router: Router;

    static async main() {
        if (!location.hash) {
            location.hash = `#/home`;
        }

        this.router = new Router(PageComponent, {
            "/home": HomeComponent
        });

        this.router.host(document.body);
        onhashchange = () => this.router.update();
    }
}