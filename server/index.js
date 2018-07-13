// CommonJS
const express = require('express');
// only 'require' without const declaration i.e passportConfig
// because /services/passport.js does not return anything
require('./services/passport')

//const authRoutes = require('./routes/auth');

const app = express();

//authRoutes(app);
require('./routes/auth')(app);

const port = process.env.PORT || 5004;
app.listen(port, () => console.log(`Server started on ${port}`));