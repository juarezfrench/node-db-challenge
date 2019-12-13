exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
   
    
    {
      
      name: 'Paper products',
      description: 'Poster board, crepe paper, colored copy paper, etc.',
      project_id: 1,
    },
    {
      
      name: 'Printing',
      description: 'Copies, printing, etc.',
      project_id: 1,
    },
    {

      name: 'Party Supplies',
      description: 'Decorations, do-dads',
      project_id: 1,
    },
    {
      
      name: 'Office Supplies',
      description: 'Consumables',
      project_id: 1,
    },
  ]);
    
};
