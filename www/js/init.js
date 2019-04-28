const my_awesome_script = document.createElement('script');
my_awesome_script.type = 'text/javascript';
my_awesome_script.setAttribute('src', './dist/app.js');

const storage = window.localStorage;

document.addEventListener(
	'deviceready',
	() => {
		console.log('project setup ready');
		storage.getItem('old') ? this.storage.setItem('old', 'true') : null;
		window.addEventListener('offline', () => {
			alert("You're offline! No news anymore");
		});

		document.body.appendChild(my_awesome_script);
	},
	false
);
