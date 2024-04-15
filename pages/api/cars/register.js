import { apiHandler, carsRepo } from 'helpers/api';

export default apiHandler({
    post: register
});

async function register(req, res) {
    await carsRepo.create(req.body);
    return res.status(200).json({});
}