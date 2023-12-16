# NftShirt
Integração de Blockchain com API em C# usando Nethereum.

## Características
- **Gestão de Nftags:** Gestão e implementação de funcionalidade de NFTags.

## Tecnologias Utilizadas

- **Backend:** C# com ASP.NET Core e Entity Framework.
- **Blockchain:** Angular com PrimeNG para componentes de UI.

## Requisitos
- .NET 8.0.

## Configuração
1. Clone o repositório para sua máquina local.
2. Configure a string de conexão para o PostgreSQL no arquivo `appsettings.json` no projeto do backend.
3. Execute as migrações do Entity Framework para configurar o banco de dados.
4. Instale as dependências do projeto Angular executando `npm install` na pasta do frontend.
5. Inicie o servidor backend e o servidor de desenvolvimento do Angular.

## Executando o Projeto

Para executar o backend:

```bash
cd Backend
dotnet restore
dotnet build
dotnet run
