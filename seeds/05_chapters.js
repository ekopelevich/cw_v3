exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('chapters').insert([{
      user_id: 1,
      story_id: 2,
      state_id: 1,
      title: 'Chapter One',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis turpis nec magna varius elementum. Nam nunc turpis, fringilla quis laoreet id, sagittis ut neque. Nam nisi sapien, viverra ut aliquam eu, tristique ut justo. Curabitur ut fringilla ipsum. Nam blandit nisi non mi dictum pharetra. In finibus eget orci vitae lacinia. Aliquam elit enim, pretium at metus et, vehicula tristique nunc. Pellentesque consectetur odio non dui dapibus, quis suscipit eros tincidunt. Nulla sed neque sagittis, semper ex non, commodo nisi. Donec sagittis enim vel ante cursus volutpat. Nullam metus velit, aliquet eu nisl sit amet, tincidunt porta purus. Vestibulum varius, turpis eget lacinia pretium, nulla ex congue libero, ut dictum ante metus ut tellus. Praesent pulvinar elit egestas, varius diam eu, feugiat augue.',
      image: 'http://www.anh-usa.org/wp-content/uploads/2015/12/chickens-web.jpg',
      created_at: '2015-03-01',
    },{
      user_id: 2,
      story_id: 1,
      state_id: 3,
      title: 'Chapter Two',
      body: 'Nam ut facilisis velit. Proin dapibus ex id leo pharetra suscipit. Phasellus sagittis aliquet justo, in eleifend mi condimentum a. Vivamus eu euismod purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec malesuada iaculis sapien ac ullamcorper. In molestie arcu eu massa porta pharetra in at mi. Sed posuere erat ac massa molestie rhoncus. Phasellus erat nisl, tempus at tincidunt et, dapibus ac tortor. Proin vestibulum vestibulum neque ut sagittis. Etiam et libero vitae arcu vulputate suscipit in nec libero. Nam sit amet venenatis lorem, ut cursus leo. Donec vitae erat nec turpis vehicula maximus sit amet vel dui. Quisque egestas egestas suscipit. Curabitur sed faucibus nunc. In at dictum felis, et consectetur dui.',
      image: 'http://www.peta.org/wp-content/uploads/2010/06/800-pigs-in-grass1.jpg',
      created_at: '2015-03-01',
    },{
      user_id: 3,
      story_id: 1,
      state_id: 3,
      title: 'Chapter Three',
      body: 'Phasellus turpis ligula, egestas quis purus ac, fermentum sodales dolor. Integer venenatis pharetra tempus. Aliquam eget elementum augue, vel eleifend nisi. In posuere tincidunt turpis, in pulvinar dolor ultrices varius. Vivamus orci augue, pharetra et consequat ac, pharetra sit amet dui. Suspendisse nec quam quis ipsum ultricies aliquet quis quis nulla. Nullam sit amet rhoncus ante, ut efficitur mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nisl tincidunt, tempor nunc sit amet, molestie lorem. Suspendisse blandit, libero non euismod vehicula, velit nisi luctus sem, at cursus ipsum ipsum eget metus. Nam lorem leo, congue in tristique at, auctor quis ante. Nunc at molestie lorem.',
      image: 'http://www.thecowsanctuary.org/photos/surprise-w350.jpg',
      created_at: '2015-03-01',
    },{
      user_id: 3,
      story_id: 1,
      state_id: 2,
      title: 'Chapter Four',
      body: 'Fusce viverra velit et ipsum porta pharetra sit amet et magna. In dui ex, hendrerit sit amet metus at, pellentesque efficitur erat. Etiam neque elit, euismod sit amet sem sit amet, mollis ultricies dui. Integer congue condimentum porta. Praesent egestas faucibus odio nec molestie. Integer a erat sem. Donec aliquet orci et augue porta, ut consectetur neque iaculis.',
      image: 'http://muslimmirror.com/eng/wp-content/uploads/2013/03/cows-curious.jpg',
      created_at: '2015-03-01',
    },{
      user_id: 2,
      story_id: 2,
      state_id: 2,
      title: 'Chapter Five',
      body: 'more stuff',
      image: 'http://assets.bluechipholidays.co.uk/media/catalogs/public/downloads/preview/custom_carousel/users/102/2014/02/donkeys2.jpg/carousel.jpg',
      created_at: '2015-03-01',
    },{
      user_id: 2,
      story_id: 3,
      state_id: 3,
      title: 'Chapter Six',
      body: 'Nunc tincidunt iaculis enim, vel congue tellus porta sit amet. Aenean lectus quam, posuere vitae dui vel, bibendum venenatis urna. Nulla orci justo, vehicula sit amet odio at, eleifend gravida urna. Maecenas efficitur leo eget libero semper pretium. Aliquam finibus tristique accumsan. Maecenas auctor, dolor at sollicitudin gravida, ipsum lacus accumsan augue, sed sagittis lacus nisl ut quam. Donec in convallis sapien. Nam elementum nisi quis leo tristique, eu congue mi rutrum. Pellentesque iaculis tempor dui ut aliquet. Sed purus massa, efficitur vitae pellentesque vitae, malesuada eu arcu.',
      image: 'http://www.propersausages.com/wp-content/uploads/2015/10/turkeys-mauritius.jpg',
      created_at: '2015-03-01',
    }]),
  ])
}
