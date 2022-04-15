<?php
function _PostList($atts = array())
{
    global $wpdb;
    $rawposts = $wpdb->get_results("SELECT ID, year(post_date) as post_year, post_date, post_title FROM $wpdb->posts WHERE post_status = 'publish' AND post_type = 'post' AND post_password = '' order by post_date desc");
    foreach ($rawposts as $post) {
        $posts[$post->post_year][] = $post;
    }
    $rawposts = null;
    $html = '<div class="archives-container"><ul class="archives-list">';
    foreach ($posts as $year => $posts_yearly) {
        $html .= '<li><div class="archives-year">' . $year . '</div><ul class="archives-sublist">';
        foreach ($posts_yearly as $post) {
            $html .= '<li>';
            $html .= '<time datetime="' . $post->post_date . '">' . mysql2date('m/d D', $post->post_date, true) . '</time>';
            $html .= '"<a href="' . get_permalink($post->ID) . '">' . $post->post_title . '</a>"';
            $html .= "</li>";
        }
        $html .= "</ul></li>";
    }
    $html .= "</ul></div>";
    return $html;
}

function _PostCount()
{
    $num_posts = wp_count_posts('post');
    return number_format_i18n($num_posts->publish);
}
get_header();
?>
<div class="mainbox">
  <div class="post-arc">
  	<h4><i class="iconfont icon-icon-test1"></i> Timeline</h4>
  <?php echo _PostList();  ?>
  </div>
</div>

<div class="mainbox">
	<div class="tagcloud">
		<h4><i class="iconfont icon-tags"></i> Tags</h4>
    	<?php wp_tag_cloud("unit=px & smallest=10 & largest=25 & orderby=count&order=DESC");?>
	</div>
</div>
<?php get_footer();?>