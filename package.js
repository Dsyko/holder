Package.describe({
	summary: "Holder.js packaged for meteor."
});

Package.on_use(function (api) {
	api.add_files([
		'holder.js'
	], 'client'
	);
});
