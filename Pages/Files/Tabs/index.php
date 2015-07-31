<!DOCTYPE HTML>
<html> 
	<head>
		<?php include($_SERVER['DOCUMENT_ROOT'] . '/Page Builders/php/headers/base.php');?>
	</head>
	
	<body>

		<div id="wrap">
			<div class="container">
				
				<div class="page-header">
					<h1>Houston's Tabs</h1>
					<p>That toats are not stolen from <a href="http://tabs.ultimate-guitar.com/"> ultimate-guitar.com</a></p>
				</div>
				<div class="cell" id="table" style="color:white">
					<?php
						$dir =  '.';
						$dirContent = scandir($dir);
						$artists = 0;
						print('<table>');
						function makeTable($x) {
							global $dir, $dirContent;
							print('<td><table><tr><th>' .  $dirContent[$x] . '</th></tr>');
							$htmlPages = scandir($dir . '/' . $dirContent[$x]);
							foreach($htmlPages as $page) {
								if ($page === '.' or $page === '..') continue;
								print('<tr><td><a href="' . $dirContent[$x] . '/' . $page . '">' . preg_replace('/\\.[^.\\s]{3,4}$/', '', $page) . "</a></td><tr>");
							}
							print('</tr></table></td>');
						}
						for($x = 0; $x < sizeOf($dirContent); $x++) {
							if ($dirContent[$x] === '.' or $dirContent[$x] === '..') continue;
							if (is_dir($dir . '/' . $dirContent[$x])) {
								global $artists;
								if($artists % 3 == 0) {
									print('<tr>');
								}
								makeTable($x);
								if($artists % 3 == 2 || $x == sizeOf($dirContent) - 1 )  {
									print('</tr>');
								}
								$artists++;
							}
						}
						print('</table>');
					?>
					<!--<?php include('table_maker.php yoloswag er'); ?>-->
				</div>
			
			</div>

			<div id="push"></div>
		</div>

		<div id="footer">
			<div class="container">
				<p class="muted credit">Created by <a href="">Houston Bass</a> using <a href="http://getbootstrap.com/">Bootstrap</a> and <a href="http://getbootstrap.com/examples/sticky-footer/">this</a> template.</p>
			</div>
		</div>
	<body>
</html>