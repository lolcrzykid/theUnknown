require './app'

require 'rubygems'
require 'bundler/setup'
require 'active_record'
require 'rspec'
require 'shoulda-matchers'

ENV['RACK_ENV'] ||= 'test'

# require File.expand_path("../../config/environment", __FILE__)
