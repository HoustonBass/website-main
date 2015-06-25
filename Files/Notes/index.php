<!DOCTYPE HTML>
<html> 
	<head>
		<title>Awesome</title>
		<link href="http://getbootstrap.com/2.3.2/assets/css/bootstrap.css" rel="stylesheet">
		<link href="http://getbootstrap.com/2.3.2/assets/css/bootstrap-responsive.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="base.css">
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	
	<body>

		<div id="wrap">
			<div class="container">
				
				<div class="page-header">
					<h1>Houston's Polysci Notes</h1>
				</div>
				<div class="cell" id="table" style="color:white">
					<table>
						<?php
							$dir =  '.';
							$dirContent = scandir($dir);
							
							foreach ($dirContent as $cont) {
								if ($cont === '.' or $cont === '..') continue;
								if (is_dir($dir . '/' . $cont)) {
									$htmlPages = scandir($dir . '/' . $cont);
									print('<tr><th>' .  $cont . '</th></tr>');
									if ($cont === '.' or $cont === '..') continue;
									if (is_dir($dir . '/' . $cont)) {
										$htmlPages = scandir($dir . '/' . $cont);
										foreach($htmlPages as $page) {
											if ($page === '.' or $page === '..') continue;
											print('<tr><td><a href="' . $cont . '/' . $page . '">' . preg_replace('/\\.[^.\\s]{3,4}$/', '', $page) . "</a></td><tr>");
										}
									print('</tr>');
									}
								}
							}
						?>
					</table>
					
				</div>
			
			</div>

			<div id="push"></div>
		</div>

		<div id="footer">
			<div class="container">
				<p class="muted credit">Created by <a href="">Houston Bass</a> using <a href="http://getbootstrap.com/">Bootstrap</a> and <a href="http://getbootstrap.com/examples/sticky-footer/">this</a> template.</p>
				<a href="Taylor Swift/Red.html">Red</a>
			</div>
		</div>
	<body>
</html>