const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <h2>Detalhes do usuário</h2>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <p>Emprego: {job}</p>
        {age >= 18 ? (
            <p>Sim, está apto para tirar carteira de habilitação</p>
        ) : (
            <p>Não está apto para tirar carteira de habilitação</p>
        )}
    </div>
  )
}

export default UserDetails