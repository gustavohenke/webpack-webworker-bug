setTimeout(() => {
    import('./baz2').then(() => {}, console.error);
});