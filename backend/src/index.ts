import app from "./app.js";

import { connectToDatabase } from "./db/connection.js";
// import { disconnectFromDatabase } from "./db/connection.js";

// connections and listeners
const port = process.env.PORT || 4000;

// app.listen(port, () => console.log(`Server open and connected at ${port}`));

connectToDatabase()
    .then(() => {
        app.listen(port, () =>
            console.log(`Server open and connected to MongoDB. Port: ${port}`)
        );
    })
    .catch((err) => console.log(err));

// disconnectFromDatabase()
//     .then(() => {
//         console.log("Server closed and disconnected");
//     })
//     .catch((err) => console.log(err));
