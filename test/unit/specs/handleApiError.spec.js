import { handleApiError } from '@/lib/http';

describe('handleApiError', () => {
  it('Should return response if success property is true', () => {
    const response = {
      success: true,
      data: 123,
    };
    const actual = handleApiError(response);

    expect(actual).toBe(response);
  });

  it('Should throw error is success property is false', () => {
    const response = {
      success: false,
      error: 'unit test error',
    };

    expect(() => {
      handleApiError(response);
    }).toThrowError(response.error);
  });
});
