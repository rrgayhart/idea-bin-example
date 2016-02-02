describe('idea spec', function () {

  it('should find all .idea elements', function () {
    MagicLamp.load('ideas/index');
    assert.equal($('.ideas').length, 1);
  });

  it('should display all ideas', function () {
    MagicLamp.load('ideas/index');
    assert.equal($('.idea').length, 2);
  });
});
