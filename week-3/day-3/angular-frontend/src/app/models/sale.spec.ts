// this file is what will be run when we use the ng test command
// along with all other test files
// each "describe" is a separate unit test
// this one fails without alteration because it's expecting arguments in its const.
import { Sale } from './sale';

describe('Sale', () => {
  it('should create an instance', () => {
    expect(new Sale(0,'','','',0,0)).toBeTruthy();
  });

  it('should properly use the constructor for the total property', () => {
    expect(new Sale(0,'','','',999.99,0).total).toEqual(999.99);
  })
});
