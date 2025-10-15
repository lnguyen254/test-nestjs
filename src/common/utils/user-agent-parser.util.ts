import { UAParser } from 'ua-parser-js';

export const userAgentParserUtil = (userAgent: string) => {
  const uaParser = new UAParser(userAgent);
  const result = uaParser.getResult();
  return {
    deviceType: result.device.type || 'desktop', // mobile, desktop, tablet
    os: result.os.name || 'Unknown',
    browser: result.browser.name || 'Unknown',
  };
};
