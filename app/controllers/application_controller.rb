require 'open-uri'

class ApplicationController < ActionController::Base
  protect_from_forgery

  def index
  end

  def hax
	@doc = Nokogiri::HTML(open("http://www.radio1045.com/pages/contests/youngthegiant/index.php"))
  end
end
