import {expect, test} from '@playwright/test';

test('update user post', async ({request}) => {
    const response = await request.put('/posts/1', {
        data: {
            title: 'Updated Post',
            body: 'This is an updated post',
            userId: 2
        }
    });
    expect(response.status()).toBe(200);
    expect(await response.json()).toEqual(expect.objectContaining({
        id: expect.any(Number),
        title: 'Updated Post',
        body: 'This is an updated post',
        userId: 2,
    }));
});