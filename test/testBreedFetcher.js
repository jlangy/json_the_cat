const assert = require('chai').assert;
const breedFetcher = require('../breedFetcher');
describe('breedFetcher', () => {
  it('returns a valid description for a found cat via callback', () => {
    breedFetcher('Sib', (err, desc) => {
      assert.isUndefined(err);
      assert.equal(desc, `The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. `)
    });
  });
  it('returns multiple breeds found msg and description for a query with multiple results', () => {
    breedFetcher('si', (err, desc) => {
      assert.isUndefined(err);
      assert.equal(desc, `Multiple breeds matched. Did you mean Abyssinian? \n The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.`)
    });
  });
  it('returns Breed not found when no breed found', () => {
    breedFetcher('', (err, desc) => {
      assert.isUndefined(desc);
      assert.equal(err, 'Breed not found.')
    });
  });
});