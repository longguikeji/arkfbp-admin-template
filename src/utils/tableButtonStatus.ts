// export default class formatter {
//   tableButtonStatus() {

//   }
// }

export default function tableButtonStatus(data: any) {
  data.state.forEach((s, i) => {
    if (i === 1) {
      if (s.data.is_remove === 0) {
        s.disabled = true
      } else {
        s.disabled = false
      }
    } else {
      s.disabled = false
    }
  })
}