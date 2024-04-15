import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();
const Car = db.Car;

export const carsRepo = {
   
    getAll,
    getById,
    create,
    update,
    delete: _delete
};



async function getAll() {
    return await Car.find();
}

async function getById(id) {
    return await Car.findById(id);
}

async function create(params) {

    const car = new Car(params);

    // save user
    await car.save();
}

async function update(id, params) {
    const car = await Car.findById(id);

    // validate
    if (!car) throw 'Car not found';
    if (car.idCar !== params.idCar && await Car.findOne({ idCar: params.idCar })) {
        throw 'placa "' + params.idCar + '" is already taken';
    }

    

    // copy params properties to user
    Object.assign(car, params);

    await car.save();
}

async function _delete(id) {
    await Car.findByIdAndRemove(id);
}
