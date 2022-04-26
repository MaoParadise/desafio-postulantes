const express = require('express');

// Initializations 

const app = express();


// Settings 
app.set('port', process.env.PORT || 3500);
app.set('json spaces', 4);

app.use(require('./routes/index'));

app.use('/api/', require('./routes/foreingFinancialRoute'));

// Starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});