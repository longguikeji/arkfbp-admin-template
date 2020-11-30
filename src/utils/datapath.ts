export default function getDataByPath(data: any, path: string):any {
  // path: a.b[0].c[key=value]
  // debugger
  let temp = data
  let key = ''
  for (const p of path) {
    switch (p) {
      case '.':
      case '[':
        if (key === '') break
        temp = temp[key]
        key = ''
        break
      case ']':
        if (key.includes('=')) {
          const kv = key.split('=')
          const k = kv[0]
          const v = kv[1]
          for (const d of temp) {
            if (d[k] === v) {
              temp = d
              break
            }
          }
        } else {
          temp = temp[Number(key)]
        }
        key = ''
        break
      default:
        key += p
        break
    }
  }
  if (key !== '') {
    temp = temp[key]
  }
  return temp
}
