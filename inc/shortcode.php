<?php

add_shortcode( 'interactive_map', 'interactive_map_shortcode' );
function interactive_map_shortcode( $atts ) {

  // $atts = shortcode_atts( array(
  //   'interactive_map' => 'map'
  // ), $atts );

  // create the html
  // $html = '<div id="'. esc_attr($atts['interactive_map']) .'">';
  $html = '<div id="interactive_map">';
  $html .= 'Loading...';
  $html .= '</div>';

  return $html;
}
