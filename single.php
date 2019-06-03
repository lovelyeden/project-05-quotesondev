<?php
/**
 * The template for displaying all single posts.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'template-parts/content', 'single' ); ?>

		<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

	<div class="entry-meta">
		<?php the_title('<h2 class="entry-title">&mdash;', '<h2>'); ?>
		<?php if( $source && $source_url ): ?>
			<span class="source">,
				<a href="<?php echo $source_url; ?>">
				<?php echo $source; ?>
				</a>
			</span>
		
		<?php elseif ( $source ): ?>
			<span class="source"><?php echo $source; ?></span>
		<?php else: ?>
			<span class="source"></span>
		<?php endif; ?>
	</div> 
<button type="button" id="new-quote-button">Show Me Another!</button>
<?php get_footer(); ?>
