let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());

app.get('/api/read',function(req,res){
	res.json({ name : ['mayank','pallav','shivendu','rahul']
	});
});

app.listen(5000,() => {
	console.log(`server running on port 5000`);
});