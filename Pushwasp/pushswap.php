<?php

require("push_swap_fonctions.php");

function argv_to_la($argv)
{
    $la = array();
    foreach ($argv as $value) {
        array_push($la,(int) $value);
    }
    array_shift($la);
    return $la;
}

function arraySorted($array) {
    $a = $array;
    $b = $array;
    sort($b);
    if ($a == $b){
        return true;
    } else {
        return false;
    }
}


function main($argv)
{
    $la = argv_to_la($argv);
    $lb = array();
    $i = 0;
    $j = 0;
    $size_array = count($la);
    if(!arraySorted($la))
    {
        while ($i < $size_array) {
            while ($j < $size_array) {
                pb($la, $lb);
                $j++;
            }
            while ($lb[0] != max($lb)) {
                rb($lb);

            }
            if ($lb[0] == max($lb)) {
                pa($lb, $la);
            }
            $i++;
        }
    echo "----------------------RESULT-DU-PROJECT-DE-DAVID-LILIAN-MARWA------------------" . PHP_EOL;
    $loading = implode(" - ", $la);
    echo "LA : " . $loading . PHP_EOL;
    usleep(100000);
    GLOBAL $print;
    echo trim($print) . PHP_EOL;
    }
}

main($argv);




