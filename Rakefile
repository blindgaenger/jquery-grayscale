desc "Start a small test server for the examples"
task :examples do
  start_server(
    '/'            => 'examples',
    '/javascripts' => 'lib'
  )
end

def start_server(routes)
  require 'rack'
  app = Rack::Builder.new do
    routes.each do |path, dir|
      map path do
        run Rack::Directory.new(dir)
      end
    end
  end
  Rack::Handler::WEBrick.run(app, :Port => 3000)
end