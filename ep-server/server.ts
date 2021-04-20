import * as React from "react";

const app = express();

const portNumber = 3333;

app.listen(portNumber, () =>
  console.log(`Server is running on port ${portNumber}`)
);
