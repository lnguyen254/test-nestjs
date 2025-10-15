import { IResult, UAParser } from 'ua-parser-js';
import { IUserAgentParser } from '../interface/user-agent-parser.interface';
import express from 'express';

export class UserAgentParserUtil {
  private static userAgentParser: UAParser = new UAParser();

  public static parse(req: express.Request): IUserAgentParser {
    const ipAddress =
      req.headers['x-forwarded-for']?.toString().split(',')[0] ??
      req.socket.remoteAddress ??
      'Unknown';
    const userAgent = req.headers['user-agent'] || 'Unknown';

    this.userAgentParser.setUA(userAgent);
    const result: IResult = this.userAgentParser.getResult();
    return {
      userAgent,
      ipAddress,
      deviceType: result.device.type || 'Unknown',
      os: result.os.name || 'Unknown',
      browser: result.browser.name || 'Unknown',
    };
  }
}
