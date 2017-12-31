class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.boolean :completed, :default => false
      
      t.timestamps
    end
  end
end
