function main()
{
	const interval = setInterval(() => {
		console.log('Hello world!');
	}, 5000);

	process.on('SIGTERM', () =>
	{
		console.log('Closing application');

		clearInterval(interval);

		process.exit(0);
	});
}

main();
