import { describe, expect, it, beforeEach } from 'vitest';
import { fetch, $fetch, isDev, setup, url } from '@nuxt/test-utils';

describe('example', async () => {
  await setup({
    //server: true,
    dev: true,
    setupTimeout: 240000,
  });

  it('Renders Hello Nuxt', async () => {
    console.log('**URL: ' + url('/api/api'));
    const data = await $fetch('/api/api');
    console.log('data', data);
    expect(data).toMatch('OK');
  });
});
