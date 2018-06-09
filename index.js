const index = require('express')();

index.set('config', require('./config'));

index.get('config').services.forEach(provider => provider(index));

index.listen(index.get('config').http.port);
