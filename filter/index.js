const a = [1,2,3,4,5,6];
const b = a.filter(el => el > 3);
console.log(b);

const c = [1,2,3,4,5,6]
const d = c.filter(el => el < 5);
console.log(d);

const e = [1,2,3,4,5,6];
const f = e.filter((el, index) => index < 4);
console.log(f);

const employer = [{
  name: 'amin',
  status: true,
}, {
  name: 'andi',
  status: false
}, {
  name: 'budi',
  status: true
}]
const newEmployer = employer.filter(el => el.status)

console.log(newEmployer);