let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());

app.get('/api/read',function(req,res){
	res.json({ name : ['Do your best','make it now','do or die','allways help needy']
	});
});

app.listen(5000,() => {
	console.log(`server running on port 5000`);
});