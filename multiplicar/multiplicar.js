const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += ` ${base} * ${i} = ${base * i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}


let listarTabla = (base, limite) => {


    console.log('========================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('========================='.green);


    if (!Number(base)) {
        reject('No es un numero');
        return;
    }

    for (let i = 1; i <= limite; i++) {

        console.log(` ${base} * ${i} = ${base * i}`);
    }

}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}