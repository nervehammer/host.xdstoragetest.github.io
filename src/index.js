const crel = require('crel');
const doc = require('doc-js');
const createStorageHost = require('cross-domain-storage/host');

const instructions = crel('div', {
    class: 'instructions',
},
    crel('h3', 'cross-domain-storage host')
);

doc.ready(function () {
    crel(document.body,
        instructions
    );

    window.localStorage.setItem('foo', JSON.stringify('ezpzls'));

    const storageHost = createStorageHost([
        {
            origin: 'http://guest.xdstoragetest.github.io',
            allowedMethods: ['get', 'set', 'remove'],
        },
    ]);

});
