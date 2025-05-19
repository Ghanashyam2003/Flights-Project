const express = require('express');
const app = express();

const apiRoutes = require('./routes'); // Or './routes' depending on setup

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', apiRoutes); // <- VERY IMPORTANT

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
