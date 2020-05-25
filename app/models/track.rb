class Track < ApplicationRecord
  belongs_to :User
  belongs_to :Driver
end
