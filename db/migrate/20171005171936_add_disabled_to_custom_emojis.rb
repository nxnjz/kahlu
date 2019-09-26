require Rails.root.join('lib', 'kahlu', 'migration_helpers')

class AddDisabledToCustomEmojis < ActiveRecord::Migration[5.1]
  include kahlu::MigrationHelpers

  disable_ddl_transaction!

  def up
    safety_assured { add_column_with_default :custom_emojis, :disabled, :bool, default: false }
  end

  def down
    remove_column :custom_emojis, :disabled
  end
end
