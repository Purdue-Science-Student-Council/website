 <!-- Navigation Bar -->
 <nav class="nav">
    <!-- the spans are for vertical alignment -->
    <div class="nav-logo">
        <span class="nav-valign"></span>
        PSSC
    </div>

    <ul class="nav-bar">
        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'index.php') {
                    echo 'class="nav-bar-item nav-bar-item-active"' ;
                } else {
                    echo 'class="nav-bar-item"'; 
                }
            ?>>
            <span class="nav-valign"></span>
            <a class="nav-bar-item-a" href="/">
                Home
            </a>
        </li>

        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'about.php') {
                    echo 'class="nav-bar-item nav-bar-item-active"' ;
                } else {
                    echo 'class="nav-bar-item"'; 
                }
            ?>>
            <span class="nav-valign"></span>
            <a class="nav-bar-item-a" href="/about.php">
                About
            </a>
        </li>
        
        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'events.php') {
                    echo 'class="nav-bar-item nav-bar-item-active"' ;
                } else {
                    echo 'class="nav-bar-item"'; 
                }
            ?>>
            <span class="nav-valign"></span>
            <a class="nav-bar-item-a" href="/events.php">
                Events
            </a>
        </li>
        
        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'apply.php') {
                    echo 'class="nav-bar-item nav-bar-item-active"' ;
                } else {
                    echo 'class="nav-bar-item"'; 
                }
            ?>>
            <span class="nav-valign"></span>
            <a class="nav-bar-item-a" href="/apply.php">
                Apply
            </a>
        </li>
        
        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'outstanding-teacher-award.php') {
                    echo 'class="nav-bar-item nav-bar-item-active"' ;
                } else {
                    echo 'class="nav-bar-item"'; 
                }
            ?>>
            <span class="nav-valign"></span>
            <a class="nav-bar-item-a" href="/outstanding-teacher-award.php">
                Outstanding Teacher Award
            </a>
        </li>
        
        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'contact.php') {
                    echo 'class="nav-bar-item nav-bar-item-active"' ;
                } else {
                    echo 'class="nav-bar-item"'; 
                }
            ?>>
            <span class="nav-valign"></span>
            <a class="nav-bar-item-a" href="/contact.php">
                Contact
            </a>
        </li>
    </ul>
</nav>
<nav id="js-m-nav" class="m-nav">
    <div class="m-nav-top">
        <div class="m-nav-top-item">
            <span class="m-nav-top-item-valign"></span>
            <span class="m-nav-top-item-logo">PSSC</span>
        </div>
        <div class="m-nav-top-item">
            <span class="m-nav-top-item-valign"></span>
            <button id="js-m-nav-click" class="m-nav-top-item-hamburger"></button>
        </div>
    </div>
    <ul class="m-nav-bar">
        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'index.php') {
                    echo 'class="m-nav-bar-item m-nav-bar-item-active"' ;
                } else {
                    echo 'class="m-nav-bar-item"'; 
                }
            ?>>
            <a class="m-nav-bar-item-a" href="/">
                Home
            </a>
        </li>
        
        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'about.php') {
                    echo 'class="m-nav-bar-item m-nav-bar-item-active"' ;
                } else {
                    echo 'class="m-nav-bar-item"'; 
                }
            ?>>
            <a class="m-nav-bar-item-a" href="/about.php">
                About
            </a>
        </li>
        
        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'events.php') {
                    echo 'class="m-nav-bar-item m-nav-bar-item-active"' ;
                } else {
                    echo 'class="m-nav-bar-item"'; 
                }
            ?>>
            <a class="m-nav-bar-item-a" href="/events.php">
                Events
            </a>
        </li>
       
        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'apply.php') {
                    echo 'class="m-nav-bar-item m-nav-bar-item-active"' ;
                } else {
                    echo 'class="m-nav-bar-item"'; 
                }
            ?>>
            <a class="m-nav-bar-item-a" href="/apply.php">
                Apply
            </a>
        </li>
        
        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'outstanding-teacher-award.php') {
                    echo 'class="m-nav-bar-item m-nav-bar-item-active"' ;
                } else {
                    echo 'class="m-nav-bar-item"'; 
                }
            ?>>
            <a class="m-nav-bar-item-a" href="/outstanding-teacher-award.php">
                Outstanding Teacher Award
            </a>
        </li>
        
        <li 
            <?php 
                if (basename($_SERVER['PHP_SELF']) == 'contact.php') {
                    echo 'class="m-nav-bar-item m-nav-bar-item-active"' ;
                } else {
                    echo 'class="m-nav-bar-item"'; 
                }
            ?>>
            <a class="m-nav-bar-item-a" href="/contact.php">
                Contact
            </a>
        </li>
    </ul>
</nav>
<!-- ---------- -->