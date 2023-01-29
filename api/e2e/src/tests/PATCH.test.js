import {expect, test} from '@playwright/test';

test('update part of user post', async ({request}) => {
    const response = await request.patch('/posts/1', {
        data: {
            title: 'Updated Post',
            body: 'This is a partially updated post',
        }
    });
    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual(expect.objectContaining({
        id: 1,
        title: 'Updated Post',
        body: 'This is a partially updated post'
    }));
});