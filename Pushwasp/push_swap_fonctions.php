<?php

$print = "";

//sa échange les positions des deux premièrs élèments de $la (rien ne se produit s’il n’y a pas assez d’élèments)
function sa(array &$la)
{
    GLOBAL $print;
    if (count($la) >= 2 && $la[0] > $la[1]) 
    {
        $temp = $la[0];
        $la[0] = $la[1];
        $la[1] = $temp;
        $loading = implode(" - ", $la);
        echo "LA : " . $loading . PHP_EOL;
        usleep(100000);
        $print .= "sa ";
        return $la;
    }
}



//sb échange les positions des deux premièrs élèments de lb (rien ne se produit s’il n’y a pas assez d’élèments)

function sb(array &$lb)
{
    GLOBAL $print;
    if (count($lb) >= 2 && $lb[0] > $lb[1]) 
    {
        $temp = $lb[0];
        $lb[0] = $lb[1];
        $lb[1] = $temp;
        $loading = implode(" - ", $lb);
        echo "LB : " . $loading . PHP_EOL;
        usleep(100000);
        $print .= "sb ";
        return $lb;
    }
}

//sc sa et sb en même temps

function sc(array &$la, array &$lb)
{
    sa($la);
    sb($lb);
}

// pa prend le premier élèment de lb et le place à la première position de la (rien ne se produit si lb est vide)

function pa(array &$lb, array &$la) 
{
    GLOBAL $print;
    if (count($lb) >= 1 ) 
    {
        $firstitem = array_shift($lb);
        array_unshift($la, $firstitem);
        $loading = implode(" - ", $lb);
        echo "LB : " . $loading . PHP_EOL;
        usleep(100000);
        $print .= "pa ";
        return $la;
    }   
}


// pb prend le premier élèment de la et le place à la première position de lb (rien ne se produit si la est vide)

function pb(array &$la, array &$lb) 
{
    GLOBAL $print;
    if (count($la) >= 1) 
    {
        $firstitem = array_shift($la);
        array_unshift($lb, $firstitem);
        $loading = implode(" - ", $la);
        echo "LA : " . $loading . PHP_EOL;
        usleep(100000);
        $print .= "pb ";
        return $lb;
    }   
}

// ra fait une rotation de la vers le début. (le premier élèment devient le dernier)

function ra(array &$la)
{
    GLOBAL $print;
    if (count($la) >= 2) 
    {
        array_push($la, $la[0]);
        array_shift($la);
        $loading = implode(" - ", $la);
        echo "LA : " . $loading . PHP_EOL;
        usleep(100000);
        $print .= "ra ";
        return $la;
    }
}

// rb fait une rotation de lb vers le début. (le premier élèment devient le dernier)

function rb(array &$lb)
{
    GLOBAL $print;
    if(count($lb) >= 2)
    {
        array_push($lb, $lb[0]);
        array_shift($lb);
        $loading = implode(" - ", $lb);
        echo "LB : " . $loading . PHP_EOL;
        usleep(100000);
        $print .= "rb ";
        return $lb;
    }
}

// rr ra et rb en même temps.

function rr(array &$la,array &$lb)
{
    ra($la);
    rb($lb);
}

// rra fait une rotation de la vers la fin. (le dernier élèment devient le premier)

function rra(array &$la)
{
    GLOBAL $print;
    if(count($la) >= 2)
    {
        array_unshift($la, end($la));
        array_pop($la);
        $loading = implode(" - ", $la);
        echo "LA : " . $loading . PHP_EOL;
        usleep(100000);
        $print .= "rra ";
        return $la;
    }
}


// rrb fait une rotation de lb vers la fin. (le dernier élèment devient le premier)

function rrb(array &$lb)
{
    GLOBAL $print;
    if(count($lb) >= 2)
    {
        array_unshift($lb, end($lb));
        array_pop($lb);
        $loading = implode(" - ", $lb);
        echo "LB : " . $loading . PHP_EOL;
        usleep(100000);
        $print .= "rrb ";
        return $lb;
    }
}

// rrr rra et rrb en même temps.

function rrr(array &$la, array &$lb)
{
    rra($la);
    rrb($lb);
}