<!DOCTYPE HTML>
<html> 
	<head>
		<?php include('config.php'); ?>
		<?php include('DOCUMENT_ROOT' . '/Page Builders/php/headers/base.php');?>
	</head>
	
	<body>

		<div id="wrap">
			<div class="container">
				
				<div class="page-header">
					<h1>Houston's Websit<a href="todo.html" style="color: inherit; text-decoration: none;">e</a></h1>
				</div>
				
				<div class="cell" id="table">
					<table>
						<tr>
							<th>Games</th>
							<th>Canvas Experiments</th>
							<th>Other Pages</th>
						</tr>
						<tr>
							<td><a href="Games/Videogames/Game 1/index.html">Basic AI Battle</a></td>
							<td><a href="Canvas Experiments/Static Generator 1/index.html">Static Generator 1</a></td>
							<td><a href="Math/index.html">Number Stuff</a></td>
						</tr>
						<tr>
							<td><a href="Games/Videogames/Bullet Hell Game/index.html">Bullet Hell Game</a></td>
							<td><a href="Canvas Experiments/Static Generator 2/index.html">Static Generator 2</a></td>
						</tr>
						<tr>
							<td></td>
							<td><a href="Canvas Experiments/Face Hue Changer/index.html">Face Hue Changer</a></td>
						</tr>
						<tr>

						</tr>
					</table>
					
				</div>
				
				<div class="cell" id="server-status">
					<script src="https://mcapi.us/scripts/minecraft.js"></script>
					<div class="server-status">
						<p>My <a href="http://www.feed-the-beast.com/modpacks/FTBInfinity">FTB Infinity</a> server is currently <span class="server-online"></span>!</p>
						<p>There are <span class="server-occupancy"></span> players on the server right now</p>
					</div>
					<script>
					  MinecraftAPI.getServerStatus('71.12.48.180', {
						port: 25565 
					  }, function (err, status) {
						if (err) {
						  return document.querySelector('.server-status').innerHTML = 'Error loading status';
						}
						document.querySelector('.server-online').innerHTML = status.online ? 'up' : 'down';
						document.querySelector('.server-occupancy').innerHTML = status.players.now;
						console.log(status);
					  });
					</script>
				</div>
			
				<div class="cell" id="files">
					<table>
						<tr>
							<th>Files</th>
						</tr>
						<tr>
							<td><a href="Pages/Files/Tabs/index.php">Tabs</a><td>
						</tr>
					</table>
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