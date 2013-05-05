require 'spec_helper'

describe "MainPages" do

  subject {page}

  describe "Header Section" do
  
  	before {visit main_path}

    it { should have_selector('title', text: 'Jacky Fang Home Page') }

  end

end
