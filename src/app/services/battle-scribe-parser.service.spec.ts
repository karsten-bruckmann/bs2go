import { BattleScribeParserService } from './battle-scribe-parser.service';
import { testCases } from './battle-scribe-parser.service.spec/test-cases';

describe('BattleScribeParserService', () => {
  let service: BattleScribeParserService;

  beforeEach(() => {
    service = new BattleScribeParserService();
  });

  testCases.forEach((testCase, i) => {
    it(`should parse html [${i}]`, () => {
      const rooster = service.parse(testCase.html);
      expect(rooster).toEqual(testCase.rooster);
    });
  });
});
