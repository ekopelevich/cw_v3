exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('comments').insert([
      {
        user_id: 1,
        chapter_id: 2,
        body: 'Try-hard street art cronut, polaroid direct trade kombucha trust fund beard tacos meditation selfies wayfarers. Artisan pok pok meggings, chambray health goth portland vice mustache hammock drinking vinegar pickled brooklyn.',
        created_at: '2016-09-11',
      },{
        user_id: 2,
        chapter_id: 1,
        body: 'Banjo snackwave hella, pour-over ramps roof party organic intelligentsia four dollar toast. Vegan asymmetrical mumblecore man braid freegan, photo booth poutine chillwave pour-over live-edge. Brunch normcore squid DIY cliche.',
        created_at: '2016-10-01',
      },{
        user_id: 3,
        chapter_id: 2,
        body: 'Semiotics before they sold out put a bird on it, ennui +1 letterpress photo booth ramps chia health goth kitsch typewriter portland next level. Small batch humblebrag chillwave stumptown, mlkshk farm-to-table occupy helvetica godard tumblr heirloom. ',
        created_at: '2016-09-20',
      },{
        user_id: 1,
        chapter_id: 3,
        body: 'Artisan brunch echo park meh, lomo four dollar toast craft beer disrupt food truck banjo. Organic selvage vinyl iPhone, tilde vexillologist raclette bicycle rights pickled hot chicken. Chambray salvia cardigan, ramps raw denim farm-to-table thundercats readymade pickled migas bespoke coloring book mixtape squid. ',
        created_at: '2016-10-02',
      },{
        user_id: 3,
        chapter_id: 1,
        body: 'Cardigan lyft belly, four loko fap flexitarian squid asymmetrical thundercats. Twee austin distillery roof party marfa jianbing. Gochujang williamsburg affogato selfies 90\'s man braid, prism unicorn church-key pug. Mlkshk austin lyft banjo post-ironic.',
        created_at: '2016-08-11',
      },{
        user_id: 4,
        chapter_id: 2,
        body: 'Church-key narwhal sartorial, crucifix flannel four dollar toast banjo mixtape fam coloring book gentrify food truck scenester. Keffiyeh art party subway tile humblebrag chillwave try-hard. Thundercats snackwave hella, cliche twee art party ennui vinyl vaporware leggings. ',
        created_at: '2016-10-03',
      }]),
  ])
}
