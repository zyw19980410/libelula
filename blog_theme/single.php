<?php get_header(); ?>
<?php if (have_posts()) : the_post(); update_post_caches($posts); ?>
<?php setPostViews(get_the_ID()); ?>  
				<div class="mainbox">
                    <article class="article reveal">
                        <header class="article-header">
                             <h2><b><?php the_title(); ?></b></h2>
                            <p></p>
                            <div class="article-list-footer"> 
                            	<i class="iconfont icon-icon-test1"></i> <span class="article-list-date"><?php the_time('Y-n-j') ?></span>
								<i class="iconfont icon-icon-test"></i> <span class="article-list-minutes"><?php echo getPostViews(get_the_ID()); ?>  </span>
								<i class="iconfont icon-tags"></i> <span class="article-list-categorys">Category: 
                                	<?php
    									$category = get_the_category();
    									echo $category[0]->cat_name;
									?>
                                </span>
                                <span class="article-list-tags"><?php echo get_the_tag_list('Tags: ',', ',''); ?></span>
                            </div>
                        </header>
                         <div class="article-content">
                          <?php the_content(); ?>
                         </div>
                         <script type="text/javascript">
    						$(document).ready(function(){
        						$('pre').each(function(i,block){
            					hljs.highlightBlock(block);
        							});
    							});
						</script>
                    <hr />
                    </article>
                    <div class="article-list-ann">
                    <p style="font-size: 12px">
                    	Copyright Information goes here.
                    </p>
                	</div>
                 </div>
<?php endif; ?>
<div class="mainbox">
	<div class="article-comments" id="article-comments">
        	<?php if (comments_open() || get_comments_number()) :
            	comments_template();
        	endif;
    	    ?>
	</div>
</div>
<?php get_footer(); ?>