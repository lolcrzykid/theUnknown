helpers do
  
  def current_user
  	User.find_by_id(session[:user_id])
  end

  def check_if_valid_user(email,password)
		user = User.find_by_email(email)
		if user 
			return true if user.password == password
		end
		return false
	end

end