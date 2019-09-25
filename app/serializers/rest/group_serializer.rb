# frozen_string_literal: true

class REST::GroupSerializer < ActiveModel::Serializer
  include RoutingHelper
  
  attributes :id, :title, :description, :cover_image_url, :is_archived, :member_count

  def id
    object.id.to_s
  end

  def clean_migrated_url
    object
      .cover_image_file_name
      .sub("kahlu://groups/", "https://kahlu.co/media/user/")
  end

  def cover_image_url
    if object.cover_image_file_name and object.cover_image_file_name.start_with? "kahlu://groups/"
      return clean_migrated_url
    end

    full_asset_url(object.cover_image.url)
  end
end
