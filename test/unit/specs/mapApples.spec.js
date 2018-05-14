import { mapApples } from '@/lib/basket.service';

describe('mapApples', () => {
  it('Should map array of strings to object with id and text', () => {
    const basket = [
      'Apple',
      'Apple',
      'Apple',
      'Apple',
      'Apple',
    ];

    const apples = mapApples(basket);

    apples.forEach((apple) => {
      expect(apple.id).toBeDefined();
      expect(apple.text).toBeDefined();
    });
  });
});
