<?php
if (isset($_GET['num'])) {
    $num = intval($_GET['num']); // Get the number from URL and convert it to an integer
    echo "<h3>Multiplication Table of $num</h3>";
    echo "<ul>";
    for ($i = 1; $i <= 10; $i++) {
        echo "<li>$num x $i = " . ($num * $i) . "</li>";
    }
    echo "</ul>";
}
?>
