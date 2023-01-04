import { counter } from "../src/counter";
import {describe, expect, test} from '@jest/globals';

describe("sum module",
 () =>
    {
        test( "Testing counter add 5 + 8 = 13", () => {expect(counter(5,8)).toBe(13)});
    }
)