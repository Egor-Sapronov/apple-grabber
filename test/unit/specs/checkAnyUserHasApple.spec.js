import { checkAnyUserHasApple } from '@/lib/users.service';

describe('checkAnyUserHasApple', () => {
  it('Should return true if any user has apple', () => {
    const users = [
      {
        id: 1,
        name: 'Test 1',
        apples: [],
      },
      {
        id: 2,
        name: 'Test 2',
        apples: [
          {
            id: 1,
          },
        ],
      },
    ];

    expect(checkAnyUserHasApple(users)).toBeTruthy();
  });

  it('Should return false if no any user has apple', () => {
    const users = [
      {
        id: 1,
        name: 'Test 1',
        apples: [],
      },
      {
        id: 2,
        name: 'Test 2',
        apples: [],
      },
    ];

    expect(checkAnyUserHasApple(users)).toBeFalsy();
  });
});
