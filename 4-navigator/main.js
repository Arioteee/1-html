const positionLat = 55.751244 // Текущая широта
const positionLong = 37.618423 // Текущая долгота
const addressLat = 55.755864 // Широта назначения
const addressLong = 37.617698 // Долгота назначения

const deltaLat = addressLat - positionLat
const deltaLong = addressLong - positionLong

const distance = Math.sqrt(deltaLat ** 2 + deltaLong ** 2)

console.log(`Расстояние: ${distance.toFixed(2)} градусов`)
