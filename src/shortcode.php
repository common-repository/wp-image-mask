<?php
/**
 * Shortcode
 *
 * @since   3.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_shortcode('wp-image-mask', 'wpim_image_mask_shortcode');
/**
 * Add image mask shortcode
 */
function wpim_image_mask_shortcode( $atts, $content = null ) {
    ob_start();

	$atts = shortcode_atts( [
		'src' => '', // source of image;
		'mask'  => '', // source of mask
		'fit'  => 'contain', // how the mask should fit into the image. cover, contain (default contain);
        'alt' => '', // alt text for image
		
	], $atts );

	if(empty($atts['src']) || empty($atts['mask'])) return ob_get_clean();

	$src = sanitize_url($atts['src']);
    $mask = sanitize_url($atts['mask']);
    $fit = sanitize_text_field($atts['fit']);
    $alt = sanitize_text_field($atts['alt']);
    $attach_id = attachment_url_to_postid($src);
	
	$block_id = esc_attr(uniqid('wp-image-mask_'));

	$inline_styles = ".".$block_id. " img {";
    $inline_styles .= '-webkit-mask-image: url('.$mask.');';
	$inline_styles .= "}";

	$block_classes = ['wp-image-mask', 'has-image-mask', 'has-custom-image-mask', $block_id];
    if (!empty($fit)) {
        $block_classes[] = 'has-image-mask-'.$fit.'-fit';
    }
	$block_classes = implode(" ", $block_classes);
	
	?>

	<figure class="<?php echo esc_attr($block_classes); ?>">

        <?php 
        if ($attach_id) {
            echo wp_get_attachment_image($attach_id, 'full', false, ['class' => '']);
        } else {
            echo '<img src="'.esc_url($src).'" alt="'.esc_attr($alt).'" />';
        }
        ?>

		<?php if (!empty($inline_styles)) {
			?>
			<style type="text/css">
				<?php echo $inline_styles; ?>
			</style>
			<?php
		} ?>

	</figure>

	<?php
	
	return ob_get_clean();
}