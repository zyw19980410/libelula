<html>
    <head>
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title><?php if ( is_home() ) {
		bloginfo('name'); echo " - "; bloginfo('description');
	} elseif ( is_category() ) {
		single_cat_title(); echo " - "; bloginfo('name');
	} elseif (is_single() || is_page() ) {
		single_post_title();
	} elseif (is_search() ) {
		echo "Research Result"; echo " - "; bloginfo('name');
	} elseif (is_404() ) {
		echo 'Page Not Found';
	} else {
		wp_title('',true);
	} ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link type="text/css" rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
        <link type="text/css" rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/caomei-cion.css">
        <link type="text/css" rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/atelier-forest-light.css">
        <script src="<?php bloginfo('template_url'); ?>/js/jquery.min.js"></script>
    </head>
        <body>
        <main role="main">
            <div class="grid grid-centered">
                <div class="grid-cell">
                	<div class="slogan">
                    	<nav class="header-nav reveal"> 
                    		<a href="https://xxn9800.uta.cloud/libelula/blog/" class="header-logo" title="Back To Homepage"><?php bloginfo('name'); ?></a>
                    		<p><?php bloginfo('description') ;?></p>
                    		<ul class="blogmenu">
								<li><a href="https://xxn9800.uta.cloud/libelula/blog/links" title="Friends are best"><i class="iconfont icon-lianjie"></i> Links</a></li>
								<li><a href="https://xxn9800.uta.cloud/libelula/blog/archives" title="time"><i class="iconfont icon-guidang"></i> Archives</a></li>
								<li><a href="https://xxn9800.uta.cloud/libelula/blog/about" title="story"><i class="iconfont icon-guanyu"></i> About</a></li>
							</ul>
                    	</nav>
                    </div>