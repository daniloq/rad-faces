require 'rack'
require 'rack/contrib/try_static'

use Rack::TryStatic,
  root: 'build',
  urls: %w[/],
  try: %w[.html index.html /index.html]

FIVE_MINUTES=300

run lambda{ |env|
  four_oh_four_page = File.expand_path("../build/404/index.html", __FILE__)
  [ 404, { 'Content-Type'  => 'text/html'}, [ File.read(four_oh_four_page) ]]
}
