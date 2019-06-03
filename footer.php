<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>

		</div><!-- #content -->

		<footer id="colophon" class="site-footer" role="contentinfo">
			
		<div class="site-navigation">
					
					<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php echo esc_html( 'Primary Menu' ); ?></button>
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) );?>
				<p>Brought to you by
		<a href="https://redacademy.com/vancouver/">RED Academy</a>
</p>
			
</div><!-- #site-navigation -->

		</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer();?>
	</body>
</html>


