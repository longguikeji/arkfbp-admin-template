export default function Filter(v: any, vd: any): number {
  const m = /=(\S*)]/
  const fv = v.match(m)[1]
  const fvd = vd
  let outcome = 0
  fvd.items.forEach((vditem: any, vdindex: number) => {
    if (vditem.prop === fv) {
      outcome = vdindex
    }
  })
  return outcome
}