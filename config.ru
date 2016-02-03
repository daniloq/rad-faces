require 'rack'
require 'rack/contrib/try_static'
require 'rack-zippy'
require 'zippy_static_cache'

use ZippyStaticCache, :urls => ['/images', '/stylesheets', '/javascripts', '/fonts']
use Rack::Zippy::AssetServer, 'tmp'
use Rack::TryStatic,
  root: 'tmp',
  urls: %w[/],
  try: ['.html', 'index.html', '/index.html']

run lambda{ |env|
  four_oh_four_page = File.expand_path("../build/404/index.html", __FILE__)
  [ 404, { 'Content-Type'  => 'text/html'}, [ File.read(four_oh_four_page) ]]
}
