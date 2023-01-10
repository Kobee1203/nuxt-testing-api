import { describe, expect, it, beforeEach } from 'vitest';
import { fetch, $fetch, isDev, setup, url } from '@nuxt/test-utils';

describe('Testing Server API', async () => {
  await setup({
    //server: true,
    dev: true,
    setupTimeout: 240000,
  });

  it('Fecthing API', async () => {
    console.log('**URL: ' + url('/hotel/api/api'));
    const data = await $fetch('/hotel/api/api');
    console.log('data', data);
    expect(data).toMatch('OK');
  });
});
