import { DbClient } from "vlquery"; 
import { Inject, StaticFileRoute } from "vlserver";

import * as path from "path";

console.log("connecting to database...");
DbClient.connectedClient = new DbClient({});

DbClient.connectedClient.connect().then(async => {
    console.log("connected to database!");

    const app = new ManagedServer();
    const db = new DbContext(new RunContext());

    app.createInjector = context => new Inject({
        Context: context,
        DbContext: context
    });

    app.use(new StaticFileRoute("/scripts", path.join(__dirname, "..", "..", "client", "dist", "scripts.js")));
    app.use(new StaticFileRoute("/styles", path.join(__dirname, "..", "..", "client", "dist", "styles.css")));
    app.use(new StaticFileRoute("/node_modules", path.join(__dirname, "..", "..", "client", "node_modules")));
    app.use(new StaticFileRoute("/", path.join(__dirname, "..", "..", "client", "assets")));

    app.start(+process.env.PORT || $${{port}});
});