<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   2.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'gutenberg-block.php';
require_once plugin_dir_path( __FILE__ ) . 'shortcode.php';

add_action( 'init', 'wpim_block_assets' );
/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 * 
 * @since 2.0.0
 */
function wpim_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'wpim-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-block-editor' ) : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'wpim-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-block-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'wpim-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `wpimGlobal` object.
	wp_localize_script(
		'wpim-block-js',
		'wpimGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `wpimGlobal` object.
		]
	);

	// Apply translations for scripts
	wp_set_script_translations( 'wpim-block-js', 'wp-image-mask', plugin_dir_path( __DIR__ ) .'languages' );

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 */
	register_block_type(
		'wpim/block-wp-image-mask', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'wpim-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'wpim-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'wpim-block-editor-css',
		)
	);
}

add_action( 'wp_enqueue_scripts', 'wpim_enqueue_styles' );
/**
 * Add styles for frontend
 */
function wpim_enqueue_styles() {
	wp_enqueue_style('wpim-style-css');
}




