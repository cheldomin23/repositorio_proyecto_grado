class BaseRepository {
    constructor(model){
        this.model=model;
    }
    async create(data){
        return await this.model.create(data)
    }

    async update(id,data){
        return await _User.update(
           data
        ,{
            where: {
                id: id
            }
        });
    }
}

module.exports = BaseRepository;