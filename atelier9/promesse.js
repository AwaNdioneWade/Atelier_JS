const p = new Promise((resolve, reject) => {
    resolve(4)
})
p.then((n) => {
    console.log('Le nombre', n)
    throw new Error('echec')
}).then((n) => console.log('Le nombre 2', n))
.catch((e) => {
    console.log('Erreur', e);
    return 2
}).then(n => console.log(2))
.finally(() => console.log('Fin'))


function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration)
        }, duration)
    })
}


function waitAndFail(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(duration)
        }, duration)
    })
}


async function main(){
    await wait(2000)
    console.log('Bonjour')
    return waitAndFail(1000)
}

main().catch((e) => {
    console.log('Erreur', e)
})

// Promise.all([wait(1000), wait(2000)])
// .then(console.log)

// Promise.all([waitAndFail(1000), wait(2000)])
// .catch(console.log) // 1000
// .then(console.log)

// Promise.all([wait(1000), waitAndFail(2000)])
// .then(console.log)
// .catch(console.log) // 2000


// Promise.allSettled([wait(1000), wait(2000)])
// .then(console.log)

// Promise.allSettled([waitAndFail(1000), wait(2000)])
// .then(console.log)
// .catch(console.log)

// Promise.any([wait(1000), wait(2000)])
// .then(console.log)

// Promise.any([waitAndFail(1000), wait(2000)])
// .then(console.log) // 2000
// .catch(console.log)

// Promise.any([wait(1000), wait(2000)])
// .then(console.log)

// Promise.race([waitAndFail(1000), wait(2000)])
// .then(console.log) // 2000
// .catch(console.log)