import { apiHandler, carsRepo } from 'helpers/api';

export default apiHandler({
    get: getAll
});

async function getAll(req, res) {
    const cars = await carsRepo.getAll();
    return res.status(200).json(cars);
}