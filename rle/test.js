import test from 'ava'
import rle from './index'

const source = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'
const result = 'A4B3C2XYZD4E3F3A6B28'

test('rle string', (t) => {
  t.throws(() => rle())
  t.is(rle(source), result)
})
