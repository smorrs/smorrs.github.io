jQuery(document).ready(function($){
	//open the lateral panel
	$('.inquiry-form').scotchPanel({
			containerSelector: 'body',
			direction: 'right',
			duration: 300,
			transition: 'ease',
			clickSelector: '.cf-btn, .cf-panel-close',
			distanceX: '600px',
			enableEscapeKey: true
	});
});
