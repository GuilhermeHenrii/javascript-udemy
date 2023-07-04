//Resumo da aula

//npm init -y irá iniciar o npm com as configs default
//npm i express irá instalar o express
// -E instala uma versão que não será atualizada
// ^ significa que a versão do pacote poderá ser atualizada
//npm update irá atualiar tudo o que está desatualizado
//npm audit Irá analisar as dependências do seu projeto em busca de vulnerabilidades conhecidas e fornecerá informações sobre como resolvê-las.
//dev dependences são as dependencias de desenvoldimento
//npm i express --save-dev Irá salvar o express nas dev dependences
//npm i express --save-prod Irá salvar o express nas dependences
//npm i express@2.1.0 Irá instalar o express na versão 2.1.0
// ~ Irá alterar apenas a versão patch
//npm i express@2.x irá instalar a ultima versão do express dentro da versão 2 
//npm unistall express Irá desisntalar o express
//npm ls --depth=0 Irá nos mostrar todas as dependencias instaladas, especificando a profundidade, 0 nenhuma, 1 pasta de prfundidade etc.
//npm outdated Irá mostrar os pacotes desatualizados


//Explicação sobre as versões de software no gerenciador de pacotes:
//Ex: express@17.0.1

//17. = Mojor version (versão principal): O número da versão principal é incrementado quando são introduzidas alterações incompatíveis na API do pacote. Isso significa que a nova versão pode ter alterações significativas, e o código existente que depende da versão anterior pode precisar ser atualizado para funcionar corretamente com a nova versão. Por exemplo, uma alteração que remove um método antigo e substitui por um novo método seria considerada uma mudança de versão principal.

//0. = Minor version (versão secundária): O número da versão secundária é incrementado quando novas funcionalidades são adicionadas de forma compatível com versões anteriores. Isso significa que a nova versão pode incluir novas funcionalidades ou melhorias, mas o código existente que depende da versão anterior geralmente continuará funcionando sem a necessidade de grandes modificações. Por exemplo, a adição de um novo método ou recurso seria considerada uma mudança de versão secundária.

//1 = Patch version (versão de correção): O número da versão de correção é incrementado quando são feitas correções de bugs ou pequenas alterações que não afetam a API pública do pacote. Essas alterações geralmente não introduzem novas funcionalidades e não quebram o código existente. As correções de bugs, ajustes de desempenho ou pequenas melhorias se enquadram nessa categoria.