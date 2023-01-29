import {test, expect} from '@playwright/test';

test('delete user post', async ({request}) => {
    const response = await request.delete('/posts/1');
    expect(response.status()).toBe(200);
});