exports.seed = function(knex) {
 
  return knex('projects').insert([
   
    
    {
     
      name: 'One on ones with parents',
      description: 'Do a full onboarding.',
      completed: 0,
    },
    {
   
      name: 'Onboard families',
      description: 'Plan and execute first meeting.',
      completed: 0,
    },
    {
     
      name: 'Set up gradebooks',
      description: 'Build a system to grade and collect data.',
      completed: 0,
    },
    {
    
      name: 'Review curriculum',
      description: 'Work with the team to review curriculum',
      completed: 0,
    },
  ]);
    
};

