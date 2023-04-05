const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee);
// Fungsi on menerima dua buah argumen, yang pertama adalah nama event dan yang kedua adalah listener atau fungsi yang akan dieksekusi ketika event terjadi. Dari kode di atas, jika terjadi event ‘coffee-order’, maka fungsi makeCoffee akan dijalankan.

// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit('coffee-order', { name: 'Tubruk' });
// Fungsi emit() menerima nilai argumen sebanyak apa pun yang Anda mau, namun nilai yang pertama merupakan nama dari event yang akan dibangkitkan, argumen kedua dan seterusnya adalah nilai yang akan digunakan untuk menjadi dari parameter fungsi listener.