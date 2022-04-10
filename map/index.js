const a = [1,2,3,4,5]
a.map((elemen, index, arr) => {
  console.log(elemen)
  console.log(index)
  console.log(arr)
})

const c = [1,2,3,4,5];
const d = c.map(elemen => elemen + 1)
console.log(d)

const user = [
  {
    nama: 'andi',
    umur: 20,
  },
  {
    nama: 'amin',
    umur: 25
  }
]
const userBaru = user.map(elemen => {
  return {
    ...elemen,
    umur: elemen.umur + 5
  }
})
console.log(userBaru)
