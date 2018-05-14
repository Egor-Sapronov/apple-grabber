import { mapUsers } from '@/lib/users.service';

describe('mapUsers', () => {
  it('Should add text to user with name and amount of apples', () => {
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

    const actual = mapUsers(users);
    const expected = [
      {
        id: 1,
        name: 'Test 1',
        apples: [],
        text: 'Test 1 has 0 apples',
      },
      {
        id: 2,
        name: 'Test 2',
        apples: [
          {
            id: 1,
          },
        ],
        text: 'Test 2 has 1 apples',
      },
    ];

    expect(actual).toEqual(expected);
  });
});
