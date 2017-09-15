import app from './app';

app.listen(appget('port'), () => {
	console.log(`app is running on port ${app.get('port')}`)
});