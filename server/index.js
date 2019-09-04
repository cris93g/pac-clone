const express = require('express');
const massive = require('massive');
const { json } = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.port || 3001;

app.listen(port, () => {
	console.log(`app is listening port ${port}`);
});
