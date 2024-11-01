<?php
/**
 * Gutenberg Block Initializer
 *
 * @since   3.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter( 'render_block', 'wpim_gutenberg_block_html', 10, 2 );
/**
 * Custom html for gutenberg elements
 */
function wpim_gutenberg_block_html( $block_content, $block ) {

	if ( 'core/image' === $block['blockName'] ) {
		if ( isset($block['attrs']['imageMask']) && $block['attrs']['imageMask'] === 'custom' && $block['attrs']['imageMaskURL'] !== '' && $block['attrs']['imageMaskID'] !== '' ) {
			$custom_css = '
				<style>
				.image-mask-id-'.$block['attrs']['imageMaskID'].' img {
					-webkit-mask-image: url('.$block['attrs']['imageMaskURL'].');
				}
				</style>
			';
			$block_content = $custom_css.$block_content; // css MUST be before $block_content
		}
		if ( isset($block['attrs']['imageMask']) && $block['attrs']['imageMask'] === 'custom-svg' && $block['attrs']['imageMaskSVG'] !== '' && $block['attrs']['imageMaskSVGID'] !== '' ) {
			$svg = rawurlencode(str_replace(["\r", "\n"], ' ', $block['attrs']['imageMaskSVG']));
			$custom_css = '
				<style>
				.image-mask-svg-id-'.$block['attrs']['imageMaskSVGID'].' img {
					-webkit-mask-image: url(data:image/svg+xml,'.$svg.');
				}
				</style>
			';
			$block_content = $custom_css.$block_content; // css MUST be before $block_content
		}
	}

	return $block_content;
}