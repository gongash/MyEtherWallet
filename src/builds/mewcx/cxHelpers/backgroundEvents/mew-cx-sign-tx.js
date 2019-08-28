/* eslint-disable no-undef */
import { CX_CONFIRM_SEND_TX } from '../cxEvents';
import helpers from '../helpers';

export default async ({ event, payload }, _, next) => {
  if (event !== CX_CONFIRM_SEND_TX) return next();
  const q = helpers.queryBuilder(payload);
  chrome.windows.create({
    url: chrome.runtime.getURL(
      `index.html#/extension-popups/sign-tx?url=${payload.url}&${q}`
    ),
    type: 'popup',
    height: 500,
    width: 300,
    focused: true
  });
};