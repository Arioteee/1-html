let hasLicence = true
let isDrunk = false
let age = 18

let canDrive = hasLicence != false && age >= 18 && isDrunk != true

console.log(canDrive ? 'Может' : 'Не может')
