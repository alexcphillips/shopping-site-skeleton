import app from "./app";
import appConfig from "./app.config";

// init
(async () => {
    try {
        if (appConfig.NODE_ENV === "local") {
            // local setup like seeding etc
            await (await import("./init-local")).default();
        }

        app.listen(appConfig.PORT, () => {
            console.log(`Server started on port ${appConfig.PORT}`);
        });
    } catch (err) {
        console.error("Server failed to start:", err);
        process.exit(1);
    }
})();
