require 'sinatra'
require 'active_record'
require 'active_support'
require 'json'

require_relative './app/models/user'
require_relative './app/models/drawing'
require_relative './app/helpers/app_helper'

ActiveRecord::Base.establish_connection(adapter: 'postgresql', database: 'Unknown')

enable :sessions

# session[:user_id]
get '/'  do 
	erb :index
end

post '/login' do
	if check_if_valid_user(params[:email], params[:password])
		user = User.where(email: params[:email], password: params[:password]).take
		session[:user_id] = user.id
		return 'true'
	else
		return 'false'
	end
end

post '/createaccount' do
	user = User.create params
	return "Your email was invalid!" unless user.id
end

post '/changeattr' do
	color = params[:color]
	line_width = params[:line_width]
	content_type :json
	attributes = {:color => color, :line_width => line_width}
	return attributes.to_json
end

post '/save' do
	d = params.flatten.join.gsub(/[ ]/, '+')
	d.gsub!(/data:image\/png/, 'data:image/png;')     
	# puts params
	# puts d
	Drawing.create(user_id: current_user.id, image_data: d)
end

get '/show' do
	@d = Drawing.all
	erb :show
end

get '/logout' do
	session.clear
	redirect '/'
end