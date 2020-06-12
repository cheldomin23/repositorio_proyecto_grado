class BaseService {
    constructor(userRepository){
        this.userRepository=userRepository;
    }

    async create(user){
      const newUser = await this.userRepository.create(user);
      if(!user){
        return {ok: false, message: "Error al intentar registrar usuario"};
      }

      return {ok: true, message:"Usuaro registrado exitosamente"};
    }
}

module.exports = BaseService;