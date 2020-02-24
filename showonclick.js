<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
</head>
<body>
<div class="article__row-shadow">text text text</div>
<button id="button" type="submit" onclick="name(Показать)">Фильтр</button>

<script>
if( window.innerWidth < 460 ) {
$(".container-class").hide()
$(document).ready(function() {
                $("button").click(function() {
                    $(".container-class").show();
                });
            });
} else {
	$(".container-class").show()
} 
</script>
</body>
</html>
