exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('contributions').insert([{
      user_id: 1,
      story_id: 2,
      title: 'Chapter One',
      body: 'stuff',
      created_at: '2016-04-25',
      updated_at: '2016-04-26',
    },{
      user_id: 2,
      story_id: 1,
      title: 'Did Somebody Say Monkeys?',
      body: 'things',
      created_at: '2016-04-25',
      updated_at: '2016-04-26',
    },
    },{
      user_id: 2,
      story_id: 1,
      title: 'Did Somebody Say Monkeys?',
      body: 'things',
      created_at: '2016-04-25',
      updated_at: '2016-04-26',
    },
    },{
      user_id: 2,
      story_id: 1,
      title: 'Did Somebody Say Monkeys?',
      body: 'things',
      created_at: '2016-04-25',
      updated_at: '2016-04-26',
    },
    },{
      user_id: 2,
      story_id: 1,
      title: 'Did Somebody Say Monkeys?',
      body: 'things',
      created_at: '2016-04-25',
      updated_at: '2016-04-26',
    },
    },{
      user_id: 2,
      story_id: 1,
      title: 'Did Somebody Say Monkeys?',
      body: 'things',
      created_at: '2016-04-25',
      updated_at: '2016-04-26',
    },
    ])
  ])
}
