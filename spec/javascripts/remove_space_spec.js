//= require remove_space

describe('removeSpace', function () {
  it('removes spaces from a string', function () {
    var str = 'I have no spaces.';
    var expectedResult = 'Ihavenospaces.'
    assert.equal(removeSpace(str), expectedResult)
  });
});
