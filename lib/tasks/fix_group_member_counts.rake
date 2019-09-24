# frozen_string_literal: true

task fix_group_member_counts: 'kahlu:fix-group-member-counts'

namespace :kahlu do
  desc 'Re-compute group member counts'
  task :fix_group_member_counts => :environment do
    Group.select(:id).all.each do |group|
      group.update_column(:member_count, group.accounts.count)
    end
  end
end
