exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('notifications').insert([
      {
        name: 'new_chapter',
        body: 'This story requires approval for chapter contributions. You may edit this chapter until it goes into review mode. After approval, the chapter belongs to the story owner (although you will remain credited for it) and can only be deleted (not edited) by that person. It is good practice to review your chapter contribution very carefully to make sure that you are comfortable sending it out into the world, as well as for errors. Some story owners may reject contributions if they have to many typos or grammatical errors, so do your best to write well.',
      }, {
        name: 'save_chapter',
        body: 'You have 24 hours from the time you began writing (and locked the story) to complete this chapter before the story unlocks and can be locked by another contributor. After that, the story goes into your drafts folder and may or may not be applicable to the story. It will no longer be associated with the story, although if no one else has locked the story after a 1 hour period, you may check the story out, copy and paste from your draft and still submit your story.',
      },
    ]),
  ])
}
