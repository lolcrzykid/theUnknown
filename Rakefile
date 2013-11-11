require 'sinatra/activerecord/rake'
require './app'


namespace :db do
  desc "create the postgres database"
  task :create do
    `createdb Unknown` ##NAME YOUR DB
  end

  desc "drop the postgres database"
  task :drop do
    `dropdb Unknown` ##NAME YOUR DB
  end
end


