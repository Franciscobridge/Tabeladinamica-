import Table from './Components/Table.style.js'
import './Style.css'
function App() {
    const usuarios = [
  {
    id: 1,
    nome: "João",
    telefone: "123456789",
    email: "joao@example.com",
    nif: "123456789",
    endereco: "Rua A, 123",
    registradoPor: "Ana Cardoso"
  },
  {
    id: 2,
    nome: "Maria",
    telefone: "987654321",
    email: "maria@example.com",
    nif: "987654321",
    endereco: "Rua B, 456",
    registradoPor: "Carlos Mário"
  },
  {
    id: 3,
    nome: "Pedro",
    telefone: "555555555",
    email: "pedro@example.com",
    nif: "555555555",
    endereco: "Rua C, 789",
    registradoPor: "Marta Figueira"
  },
  {
    id: 4,
    nome: "Ana",
    telefone: "333333333",
    email: "ana@example.com",
    nif: "333333333",
    endereco: "Rua D, 321",
    registradoPor: "Paulo Mousa"
  },
  {
    id: 5,
    nome: "Marta",
    telefone: "222222222",
    email: "marta@example.com",
    nif: "222222222",
    endereco: "Rua E, 654",
    registradoPor: "João Castelo"
  },
  {
    id: 6,
    nome: "Carlos",
    telefone: "444444444",
    email: "carlos@example.com",
    nif: "444444444",
    endereco: "Rua F, 987",
    registradoPor: "Maria Teresa"
  },
  {
    id: 7,
    nome: "Paulo",
    telefone: "666666666",
    email: "paulo@example.com",
    nif: "666666666",
    endereco: "Rua G, 753",
    registradoPor: "Pedro dos Santos"
  },
  {
    id: 8,
    nome: "Sara",
    telefone: "777777777",
    email: "sara@example.com",
    nif: "777777777",
    endereco: "Rua H, 159",
    registradoPor: "Ana John"
  },
  {
    id: 9,
    nome: "Rui",
    telefone: "888888888",
    email: "rui@example.com",
    nif: "888888888",
    endereco: "Rua I, 357",
    registradoPor: "Carlos Maia"
  },
  {
    id: 10,
    nome: "Luisa",
    telefone: "999999999",
    email: "luisa@example.com",
    nif: "999999999",
    endereco: "Rua J, 753",
    registradoPor: "Catarina Rodrigues"
  }
];
  return (
    <div className="tabela">
        <Table>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>NIF</th>
                <th>Endereço</th>
                <th>Registrado Por</th>
            </tr>
            {
                usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                        <td>{ usuario.id }</td>
                        <td>{ usuario.nome }</td>
                        <td>{ usuario.telefone }</td>
                        <td>{ usuario.email }</td>
                        <td>{ usuario.nif }</td>
                        <td>{ usuario.endereco }</td>
                        <td>{ usuario.registradoPor }</td>
                    </tr>
                ))
            }
        </Table>
    </div>
  )
}

export default App
