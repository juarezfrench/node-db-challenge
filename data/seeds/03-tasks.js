exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
   
    
    {
   
      name: 'Make sure parents are set up',
      description: 'Get contacts and paperwork.',
      notes: '',
      completed: 0,
    
    },
    {
   
      name: 'Schedule meet and greets',
      description: 'Validate emails, invite prepare for meet & greet.',
      notes: '',
      completed: 0,
      project_id: 1,
    },
    {
      
      name: 'Onboard Students',
      description: 'Make sure all paperwork is done.',
      notes: '',
      completed: 0,
      project_id: 1,
    },
    {
     
      name: 'Prepare room for the meet and greet',
      description: '	Decorate room	Make sure room is ready for M&G.',
      completed: 0,
      project_id: 1,
    },
  ]);
    
};

