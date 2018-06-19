const council = require('./councils.provider');
( async () => {
   let result = await council.getCouncilByInternship(1);
    console.log(result);
})();