import 'core-js/stable';//core-js e regenerator-runtime usado para usar promises em navegadores mais antigos
import 'regenerator-runtime/runtime';

import execute from './modules/promises';

import './assets/css/style.css';

execute();

// Biblioteca: Uma biblioteca é um conjunto de funcionalidades, recursos e utilitários que podem ser reutilizados em vários projetos. Elas são geralmente desenvolvidas para fornecer recursos específicos e podem ser usadas por meio da importação de módulos individuais. O "core-js" é um exemplo de biblioteca que fornece polifilas para preencher lacunas de recursos em navegadores e ambientes JavaScript.

// Pacote: Um pacote é um conjunto de arquivos e recursos empacotados em um formato específico. Em JavaScript, pacotes são gerenciados por gerenciadores de pacotes, como o npm. Os pacotes contêm código, arquivos de configuração e informações sobre dependências. O "regenerator-runtime" é um pacote que fornece o suporte em tempo de execução para recursos como generator e async/await.