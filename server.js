const express = require('express');
const port = 4050;

const app = express();


// add these lines to accept req body for POST call
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/todos', require('./backend/routes/todoesRoutes'))


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
const { errorHandler } = require('./middleware/errorMiddleware');
app.use(errorHandler);

