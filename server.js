let express = require('express');
let app = express();

app.get('/read',function(req,res){
	res.json({ name : ['mayank','pallav','shivendu','rahul']
	});
});

app.listen(5000,() => {
	console.log(`server running on port 5000`);
});