MagicLamp.fixture do
  Idea.create(title: 'first note', body: 'wowowowow')
  Idea.create(title: 'second note', body: 'wowowowow')
  @ideas = Idea.all
  render template: 'ideas/index'
end
