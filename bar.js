// console.log('hey from bar');
setTimeout(() => {
    import('./bar2').then(() => {}, console.error);
});