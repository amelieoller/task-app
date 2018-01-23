class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.boolean :completed, :default => false
      t.integer :time
      t.integer :position
      t.integer :priority, :default => 3
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
