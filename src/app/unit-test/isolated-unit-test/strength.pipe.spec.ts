import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('should display weak if strength is 5', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak) ')
  });

  it('should display weak if strength is 6', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(6)).toEqual('6 (weak) ')
  });

  it('should display strong if strength is 12', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(12)).toEqual('12 (strong) ')
  });

  it('should display unbelievable if strength is 21', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(21)).toEqual('21 (unbelievable) ')
  });
});
