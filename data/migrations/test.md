exports.up = function(knex) {
    return knex.schema
  
        .createTable("projects", tbl => {
          tbl.increments();
          tbl
            .string("name", 128)
            .notNullable()
            .unique();
          tbl
            .string("description", 255)
          tbl
            .boolean("completed")
            .notNullable()
            .defaultTo(0);
        })
  
        /// resources table ///
        .createTable("resources", tbl => {
          tbl.increments();
          tbl
            .string("name", 128)
            .notNullable()
            .unique();
          tbl.string("description", 255);
          tbl
            .integer("project_id")
            .unsigned()
            .unique()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        })
  
        /// tasks table///
        .createTable("tasks", tbl => {
          tbl.increments();
         tbl
         .string("description", 255)
          .notNullable();
          
          tbl.string("notes", 255);
  
          tbl
            .boolean("completed")
            .notNullable()
            .defaultTo(0);
        })
    }

    exports.down = function(knex) {
        return knex.schema
         
          .dropTableIfExists('tasks')
          .dropTableIfExists('resources')
          .dropTableIfExists('projects');
      };