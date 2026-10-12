// ==========================================================
// MATRIZ COMPARATIVA E TUTORIAIS OPEN FINANCE POR BANCO (LIMPOS)
// Código isolado sem interferência no Firebase ou Kanban
// ==========================================================

const OF_BANCOS = [
  {
    "id": "bb",
    "nome": "Banco do Brasil",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Conta a Conta",
    "multiplas_msg": "Necessário 1 consentimento para CADA conta corrente se houver mais de uma.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, 2º titular aprova no App caso exista.",
    "especificidades": [
      "1 consentimento individual por conta corrente.",
      "No SuperApp: pode solicitar autorização do dispositivo 'Thomson Reuters'.",
      "Prazo de até 5 minutos para envio dos dados."
    ],
    "tags": [
      "conta-a-conta",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conectar outra conta];",
        "3. Leia atentamente as informações e clique em [Continuar];",
        "4. Selecione a opção [Banco do Brasil Empresas];",
        "5. Na tela inicial, confira as informações da conexão com o Banco do Brasil Empresas. O processo será realizado em duas etapas; toque em [Começar];",
        "6. Utilize credenciais de Administrador em ambas as etapas (perfis de operador não são aceitos). Na etapa 1, use a Chave J, a Senha J e senha de 8 dígitos. Na etapa 2, use CPF e CNPJ vinculados a essa mesma Chave J. Clique em [Continuar];",
        "7. Preencha os campos Chave J, Senha J e Senha de 8 dígitos e clique em [Conectar]. O banco pode enviar uma notificação de acesso por um novo dispositivo — é uma conexão segura, apenas para visualização dos dados;",
        "8. É necessário registrar o dispositivo no Banco do Brasil (consulte a documentação em [Acessar a documentação]); após aprovação, os dados são compartilhados em até 24h. Clique em [Avançar] para continuar; Este passo deve ser realizado para a autorização do dispositivo 'Thomson Reuters'. Clique aqui para realizar o passo a passo.",
        "9. Clique em [Continuar para a 2ª etapa];",
        "10. Na tela “O que vai acontecer agora”, confira as orientações sobre a segunda etapa do processo e toque em [Continuar];",
        "11. Na tela “Confirme seus dados”, confira o CPF e o CNPJ do usuário master da conta e toque em [Continuar no Banco];",
        "12. Pressione [Continuar] para redirecionar ao ambiente do banco;",
        "13. Você será direcionado para o portal do Banco do Brasil. Preencha os dados de usuário e senha e clique em [ENTRAR];",
        "14. Preencha com sua senha de 8 dígitos, clique em [ENTRAR];",
        "15. Clique em [AVANÇAR];",
        "16. Leia atentamente as informações e mova a barra de rolagem para baixo;",
        "17. Clique em [AVANÇAR] para concluir essa etapa;",
        "18. Após a autenticação do consentimento, clique em [Fechar] e prossiga com a configuração do sistema Domínio."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, toque na opção [Conecte outros bancos];",
        "3. Leia atentamente às informações e toque em [Continuar];",
        "4. Selecione a opção 'Banco do Brasil Empresas';",
        "5. Na tela inicial, confira as informações da conexão com o Banco do Brasil Empresas. O processo será realizado em duas etapas; toque em [Começar];",
        "6. Leia as informações contidas na tela 'Credenciais utilizadas em cada etapa', toque em [Continuar]; Devem ser utilizadas credenciais de Administrador nas duas etapas. Perfis de operador não são aceitos para esta conexão. Na etapa 1, utilize a Chave J, a Senha J e a senha de 8 dígitos. Na etapa 2, utilize o CPF ou CNPJ vinculados à mesma Chave J.",
        "7. Na tela 'Conecte a sua conta', informe a Chave J, a Senha J e a Senha de 8 dígitos e toque em [Conectar];",
        "8. Na tela 'Cadastro de dispositivo', leia as orientações apresentadas e toque em [Avançar]; O Banco do Brasil pode solicitar a autorização do dispositivo 'Thomson Reuters' em vez da validação por SMS. Se esse for o seu caso, clique em [Entendido] e, após concluir o consentimento, realize a Autorização do Dispositivo.",
        "9. Na tela 'Etapa 1 de 2 concluída', verifique a confirmação e toque em [Continuar para a 2ª etapa];",
        "10. Na tela 'O que vai acontecer agora', confira as orientações sobre a segunda etapa do processo e toque em [Continuar] para iniciar o compartilhamento de dados;",
        "11. Confira se o CPF e o CNPJ estão corretos e toque em [Continuar no Banco];",
        "12. No aplicativo Banco do Brasil, toque em [Acessar sua conta];",
        "13. Revise as informações do consentimento e, se estiver de acordo, toque em [CONFIRMAR];",
        "14. Após a conclusão do consentimento, verifique a mensagem de sucesso e toque em [Fechar]. Autorização do Dispositivo - Banco do Brasil Este passo deve ser realizado apenas se no processo de consentimento for solicitada a autorização do dispositivo 'Thomson Reuters'. Clique aqui para realizar o passo a passo."
      ]
    }
  },
  {
    "id": "banrisul",
    "nome": "Banrisul",
    "canais": [
      "Desktop"
    ],
    "multiplas": "Conta a Conta",
    "multiplas_msg": "Necessário realizar 1 consentimento individual para CADA conta corrente.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, aprovação do 2º titular necessária.",
    "especificidades": [
      "1 consentimento por conta corrente.",
      "Solicita autorização para compartilhar com a Pluggy (prazo indeterminado)."
    ],
    "tags": [
      "conta-a-conta",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Meu Contador] e depois em [+ Conectar outra conta];",
        "3. Selecione a opção 'Banrisul Empresas';",
        "4. Leia as informações sobre as duas etapas da conexão e clique em [Começar];",
        "5. Utilize credenciais de Administrador em ambas as etapas (perfis de operador não são aceitos). Na etapa 1, use CPF e Senha alfanuméricos (mesmos do Office Banking — não aceita Smart Card nem cartão de crédito). Na etapa 2, use CPF e CNPJ do administrador. Clique em [Continuar];",
        "6. Preencha os campos CPF e Senha do administrador e clique em [Conectar];",
        "7. A primeira etapa é salva e, em aproximadamente 30 minutos, a ativação do dispositivo será concluída, iniciando a coleta automática dos dados. Ainda é necessário completar a segunda etapa. Clique em [Continuar para a 2ª etapa];",
        "8. O sistema apresenta o que vai acontecer na etapa 2, dividido em 4 passos que podem ser expandidos para mais detalhes: (1) preencher corretamente as credenciais, (2) uma janela do banco será aberta, (3) revisar e aprovar o compartilhamento de dados, e (4) retornar automaticamente. Clique em [Continuar];",
        "9. Confirme os dados do usuário master da conta (em empresas com mais de um sócio, pode ser outra pessoa) preenchendo CPF e CNPJ. Clique em [continuar no banrisul];",
        "10. Após confirmar os dados, uma janela do Banrisul é aberta (via Open Finance) para escolher por onde continuar a autenticação. Recomenda-se selecionar [Home/Office Banking] para continuar nesse mesmo dispositivo;",
        "11. Você será redirecionado ao Banrisul Office Banking. Informe seu Operador ou CPF e clique em [Entrar];",
        "12. Na tela de Confirmação de Compartilhamento, revise os dados de identificação do usuário e selecione as informações que serão compartilhadas com a instituição de destino (Cadastro, Contas, Cartões e Investimentos, conforme disponibilidade). Após revisar, clique em [Confirmar];",
        "13. Na mensagem de confirmação, o Banrisul solicita autorização para compartilhar os dados com a Pluggy (prazo indeterminado). Após confirmar, você será redirecionado de volta para a outra instituição. Clique em [Sim];",
        "14. Processo concluído. A coleta dos dados foi iniciada e as informações serão disponibilizadas ao sistema da contabilidade em alguns minutos, podendo variar conforme o volume de movimentações da conta. Clique em [Conectar outro banco] para conectar outra instituição, ou em [Fechar] para encerrar."
      ]
    }
  },
  {
    "id": "bradesco",
    "nome": "Bradesco",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Todas Conectadas",
    "multiplas_msg": "Todas as contas correntes vinculadas são conectadas juntas.",
    "autorizador": "Operador + Master (Duplo)",
    "segundo_titular": "Sim, 2º titular deve assinar no app.",
    "especificidades": [
      "🚨 OBRIGATÓRIO: Criar Perfil de Operador e Usuário Operador no Net Empresa antes do consentimento.",
      "No consentimento: Usar login do Operador + CPF do Usuário Master.",
      "Confirmação final pelo Master via Chave de Segurança/QR Code.",
      "Conecta todas as contas correntes juntas."
    ],
    "tags": [
      "todas-juntas",
      "perfil-operador",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conecte outros bancos];",
        "3. Leia atentamente às informações e clique em [Continuar];",
        "4. Selecione a opção [Bradesco Empresas];",
        "5. Na tela inicial, confira as informações da conexão com o Bradesco Empresas. O processo será realizado em duas etapas; toque em [Começar];",
        "6. Na tela 'Credenciais utilizadas em cada etapa', verifique os acessos necessários. Caso já possua os acessos de operador e master, toque em [Já tenho os dois acessos]; Para realizar o consentimento do Bradesco, utilize um usuário Operador. O perfil Master possui validações adicionais que podem impedir a conclusão do consentimento e será utilizado somente na segunda etapa do processo. Caso ainda não possua um usuário Operador, selecione [Criar usuário operador] e realize o cadastro. Se tiver dúvidas sobre como cadastrar um usuário Operador no Bradesco, clique aqui. Após garantir os acessos de Operador e Master, siga para o processo de consentimento conforme as etapas apresentadas a seguir.",
        "7. Informe o usuário operador e a senha nos respectivos campos e toque em [Conectar] para prosseguir;",
        "8. Após a conclusão da primeira etapa, toque em [Continuar para a 2ª etapa] para prosseguir com o processo de consentimento;",
        "9. Na tela 'O que vai acontecer agora', confira as orientações sobre a segunda etapa do processo e toque em [Continuar] para iniciar o compartilhamento de dados;",
        "10. Na tela 'Confirme seus dados', confira o CPF e o CNPJ informados e, estando corretos, toque em [Continuar no Bradesco] para prosseguir com o compartilhamento de dados;",
        "11. Ao ser redirecionado para o Internet Banking do Bradesco, realize o login utilizando o usuário Master e sua respectiva senha para confirmar o consentimento;",
        "12. Realize a geração da chave de segurança no app. Digite a chave gerada e depois clique em [Continuar];",
        "13. Realize a seleção da agência e conta, depois clique em [Continuar];",
        "14. Verifique com atenção as informações que serão compartilhadas e posteriormente, clique em [Confirmar];",
        "15. Com a conclusão do processo, será exibida a mensagem 'Consentimento realizado com sucesso!', toque em [Fechar]. • Embora o consentimento seja iniciado utilizando um usuário Operador, a confirmação final deverá ser realizada pelo usuário Master, conforme as regras do Bradesco."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, toque na opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'Bradesco Empresas';",
        "5. Na tela inicial, confira as informações da conexão com o Bradesco Empresas. O processo será realizado em duas etapas; toque em [Começar];",
        "6. Na tela 'Credenciais utilizadas em cada etapa', verifique os acessos necessários. Caso já possua os acessos de operador e master, toque em [Já tenho os dois acessos]; Caso ainda não possua o usuário operador, acesse [Criar usuário operador] e realize o cadastro. Se tiver dúvidas sobre como cadastrar um usuário Operador no Bradesco, clique aqui.",
        "7. Informe o usuário operador e a senha nos respectivos campos e toque em [Conectar] para prosseguir;",
        "8. Após a conclusão da primeira etapa, toque em [Continuar para a 2ª etapa] para prosseguir com o processo de consentimento;",
        "9. Na tela 'O que vai acontecer agora', confira as orientações sobre a segunda etapa do processo e toque em [Continuar] para iniciar o compartilhamento de dados;",
        "10. Na tela 'Confirme seus dados', confira o CPF e o CNPJ informados e, estando corretos, toque em [Continuar no Bradesco] para prosseguir com o compartilhamento de dados;",
        "11. Na tela de acesso do Bradesco, informe o usuário e a senha master da conta e toque em [Continuar];",
        "12. Selecione a conta bancária que deseja compartilhar, mantenha-a marcada e toque em [Continuar] para prosseguir com a autorização pelo Open Finance;",
        "13. No segundo passo, confira as informações e selecione [Confirmar];",
        "14. Confira os dados que serão compartilhados. Toque em [Confirmar];",
        "15. Com a conclusão do processo, será exibida a mensagem 'Consentimento realizado com sucesso!', toque em [Fechar]."
      ],
      "Criar Usuário": [
        "1. Clique aqui e acesse o Internet Banking do banco Bradesco;",
        "2. Acesse o menu Administração e clique em Criação de Usuário;",
        "3. Preencha com os dados do usuário: Nome, Tipo de Documento, Senha e E-mail;",
        "4. Confirme os dados do usuário. No final da página, será gerado o QRCode que deve ser escaneado no seu aplicativo Bradesco; Como cadastrar Operador Bradesco?   FALE COM O SUPORTE",
        "5. Acesse o aplicativo e na tela de login clique em [Chave de Segurança];",
        "6. Realize a verificação de identidade (Senha, biometria, FaceID, etc.);",
        "7. Aponte a câmera do celular para o QRCode demonstrado na tela para demonstrar a chave de segurança necessária;",
        "8. Informe a chave de segurança na tela e clique em [Confirmar] para concluir.",
        "9. Clique em [Confirmar]; Inclusão do Operador Após, acesse o Internet Banking do Bradesco para incluir o novo usuário e atribuir o perfil 'Operador' para concluir o cadastro.",
        "1. Acesse o Internet Banking do banco Bradesco novamente;",
        "2. No menu Administração e clique em [Incluir Usuários];",
        "3. Insira o CPF cadastrado para o novo usuário;",
        "4. Selecione o Perfil de Acesso '[x] Operador' e a opção '[x] Liberar acesso ao Net Empresa pelo celular';",
        "5. Clique em [Avançar >];",
        "6. Será solicitada a chave de segurança. Acesse o App do Bradesco e na tela de login clique em [Chave de Segurança];",
        "7. Realize a verificação de identidade (Senha, biometria, FaceID, etc.);",
        "8. Aponte a câmera do celular para o QRCode demonstrado na tela para demonstrar a chave de segurança necessária;",
        "9. Informe a chave de segurança na tela e clique em [Confirmar] para concluir. Ao realizar o consentimento, utilize os dados de acesso do Operador e o CPF do usuário Master. Este procedimento é obrigatório para a integração correta."
      ],
      "Criar Perfil Operador": [
        "1. Acesse o Internet Banking do Banco Bradesco;",
        "2. Realize o login na conta Master;",
        "3. Acesse a guia Administração e clique em [Incluir Perfis de Acesso];",
        "4. Informe o Nome e Descrição do perfil;",
        "5. Selecione a opção '[x] Contas e/ou carteiras e operações' e selecione as contas que o perfil terá acesso;",
        "6. Clique em [Avançar]; Como cadastrar Perﬁl de Operador Bradesco?   FALE COM O SUPORTE",
        "7. Selecione apenas a opção '[x] Consulta' na operação 'Saldos e Extratos';",
        "8. Clique em [Avançar];",
        "9. No passo '3. Permissões de Operações', clique em [Avançar] sem marcar qualquer opção;",
        "12. Selecione a opção '[x] Não possui limite de alçada' e '[x] Pode acessar o Net Empresa a qualquer horário e qualquer dia';",
        "11. Clique em [Avançar];",
        "12. Na próxima tela, passe a arraste até o final da página;",
        "13. Acesse o aplicativo e na tela de login clique em [Chave de Segurança];",
        "14. Realize a verificação de identidade (Senha, biometria, FaceID, etc.);",
        "15. Aponte a câmera do celular para o QRCode demonstrado na tela para demonstrar a chave de segurança necessária;",
        "16. Informe a chave de segurança na tela e clique em [Confirmar] para concluir."
      ]
    }
  },
  {
    "id": "c6",
    "nome": "C6 Bank",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Todas Conectadas",
    "multiplas_msg": "Conecta todas as contas correntes vinculadas automaticamente.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, 2º titular aprova caso exista.",
    "especificidades": [
      "Conecta todas as contas correntes.",
      "Fluxo direto e simplificado."
    ],
    "tags": [
      "todas-juntas",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conecte outros bancos];",
        "3. Leia atentamente às informações e clique em [Continuar];",
        "4. Selecione a opção 'C6 Bank Empresas';",
        "5. A próxima tela será preenchida com os dados do usuário e da empresa. Se necessário, altere as informações e clique em [Conectar];",
        "6. Uma nova tela será aberta com um QR Code. Aponte a câmera do celular para o código e você será direcionado ao aplicativo do banco para concluir o consentimento;",
        "7. Ao ler o QR Code você será redirecionado ao app do banco. Realize o login no App normalmente (Senha, Face Id, biometria...);",
        "8. Na tela de autorização clique em [Confirmar];",
        "9. Retorne ao Portal Domínio para acompanhar o progresso. Pelas normas do Open Finance a instituição tem até 5 minutos para iniciar o envio das informações. Caso o processo esteja demorando, clique em [Continuar em segundo plano] para continuar usando o Portal sem interromper o processo;",
        "10. Após a autenticação do consentimento, clique em [Fechar] e prossiga com a configuração do sistema Domínio."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, toque na opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'C6 Bank Empresas';",
        "5. Na tela 'O que você vai precisar', leia todas as informações e toque em [Continuar];",
        "6. Confirme os dados do usuário master da conta, verificando o CPF e o CNPJ apresentados, e toque em [Continuar no C6];",
        "7. Toque em [Acessar conta] para prosseguir;",
        "8. Na tela de confirmação, leia todas as informações de compartilhamento e selecione [Confirmar];",
        "9. Após a autenticação do consentimento, toque em [Fechar]."
      ]
    }
  },
  {
    "id": "caixa",
    "nome": "Caixa Econômica Federal",
    "canais": [
      "Desktop"
    ],
    "multiplas": "Todas Conectadas",
    "multiplas_msg": "Todas as contas correntes são conectadas no mesmo processo.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, 2º titular assina caso exista.",
    "especificidades": [
      "Conexão única para todas as contas.",
      "Autenticação via Internet Banking Caixa."
    ],
    "tags": [
      "todas-juntas",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conectar outra conta];",
        "3. Leia atentamente as informações e clique em [Continuar];",
        "4. Selecione a opção 'Caixa Econômica Federal Empresas';",
        "5. Leia as informações sobre as duas etapas da conexão e clique em [Começar];",
        "6. Utilize credenciais de Administrador nas duas etapas — perfis de operador não são aceitos nesta conexão: na etapa 1 serão usados o Usuário e a Senha alfanuméricos do aplicativo Caixa e, na etapa 2, o CPF e o CNPJ do administrador da conta; clique em [Já tenho acesso Administrador];",
        "7. Preencha o Usuário e a Senha Internet de acesso à conta Caixa Econômica Federal Empresas e clique em [Conectar];",
        "8. Para conectar sua conta é necessário autorizar um novo dispositivo no aplicativo Caixa; clique em [Já autorizei o dispositivo];",
        "9. Leia as orientações sobre a leitura do QR Code e clique em [Gerar QR code]; Caso o consentimento tenha sido iniciado anteriormente e não tenha sido concluído, podem permanecer dispositivos 'Thomson Reuters' cadastrados no aplicativo da Caixa. Antes de realizar uma nova tentativa, remova todos os dispositivos 'Thomson Reuters' seguindo os passos: • Entrar no App Caixa. • Meu Perfil. • Meus dispositivos. • Excluir todos os dispositivos Thomson Reuters. • Refazer o consentimento.",
        "10. Deixe a tela do QR Code aberta em segundo plano e acesse o aplicativo da Caixa no seu celular ou dispositivo móvel;",
        "11. Realize o login no App normalmente (Senha, Face Id, biometria...);",
        "12. Arraste para baixo e no quadro Outros Serviços, clique em Meu Perfil > Meus dispositivos;",
        "13. Clique em [Sim] na mensagem de atenção e selecione o dispositivo 'Thomson Reuters';",
        "14. Escaneie o QR Code disponibilizado no Portal Domínio; ele é dinâmico e se atualiza a cada 6 segundos, portanto mantenha a câmera apontada até concluir a leitura (3 confirmações);",
        "15. Após a mensagem de sucesso, retorne ao Portal Domínio e clique em [Já ativei o dispositivo];",
        "16. A sua primeira etapa foi salva e a ativação do dispositivo será concluída em aproximadamente 30 minutos; após habilitado, a coleta dos dados é feita automaticamente. Para completar os dados, ainda é necessário concluir a segunda etapa — clique em [Continuar para a 2ª etapa];",
        "17. Abra cada passo para ver os detalhes do que acontecerá na segunda etapa: 'preenchimento das credenciais, abertura da janela do banco, revisão e aprovação do compartilhamento de dados e retorno automático ao Portal' e clique em [Continuar];",
        "18. Preencha o CPF e o CNPJ do usuário master da conta — em empresas com mais de um sócio, pode ser outra pessoa — e clique em [Continuar no Caixa]; Caso o navegador bloqueie a abertura de pop-ups, selecione 'Sempre permitir' no canto superior direito e clique em [Concluído].",
        "19. Na janela do Open Finance CAIXA, confira o resumo do compartilhamento — identificação, CNPJ, solicitante e prazo — e clique em [Compartilhar meus dados]; você será redirecionado automaticamente de volta ao Portal;",
        "20. Após o consentimento ser realizado com sucesso, a coleta dos dados é iniciada e as informações serão disponibilizadas na contabilidade em alguns minutos; clique em [Fechar] e prossiga com a configuração do sistema Domínio, ou clique em [Conectar outro banco] para repetir o processo com outra instituição."
      ]
    }
  },
  {
    "id": "inter",
    "nome": "Banco Inter (PJ / Empresas)",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Todas Conectadas",
    "multiplas_msg": "Conecta todas as contas correntes automaticamente.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, se houver segundo titular.",
    "especificidades": [
      "Conecta todas as contas correntes.",
      "Validação via i-safe / biometria no app."
    ],
    "tags": [
      "todas-juntas",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conecte outros bancos];",
        "3. Leia atentamente às informações e clique em [Continuar];",
        "4. Selecione a opção 'Inter Empresas';",
        "5. Informe o 'Client Id' e 'Client Secret' fornecidos na configuração da API Inter;",
        "6. Faça upload dos arquivos Private Key e Certificate baixados na configuração da API Inter;",
        "7. Clique em [Conectar];",
        "8. Clique em [Conectar] novamente para ser direcionado a leitura do QR Code;",
        "9. Uma nova tela será aberta com um QR Code. Aponte a câmera do celular para o código e você será direcionado ao aplicativo do banco para concluir o consentimento;",
        "10. Ao ler o QR Code você será redirecionado ao app do banco. Realize o login no App normalmente (Senha, Face Id, biometria...); Após o login, confirme os dados a serem compartilhados;",
        "11. Na tela de compartilhamento, valide os dados a serem compartilhados e clique em [Compartilhar dados] e depois em [CONFIRMAR];",
        "12. Retorne ao Portal Domínio para acompanhar o progresso. Pelas normas do Open Finance a instituição tem até 5 minutos para iniciar o envio das informações. Caso o processo esteja demorando, clique em [Continuar em segundo plano] para continuar usando o Portal sem interromper o processo;",
        "13. Após a autenticação do consentimento, clique em [Fechar] e prossiga com a configuração do sistema Domínio."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, toque na opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'Inter Empresas';",
        "5. Leia as informações sobre as duas etapas do fluxo de conexão e toque em [Começar];",
        "6. Na tela 'Credenciais utilizadas em cada etapa', leia atentamente as informações apresentadas e toque em [Continuar];",
        "7. Em 'Conecte a sua conta', informe o 'Client Id' e o 'Client Secret' e envie a 'Private Key' e o 'Certificate'. Em seguida, toque em [Conectar]; Para realizar a conexão, utilize o Client Id e o Client Secret fornecidos na configuração da API do Inter. Também serão necessários os arquivos Private Key e Certificate, baixados na configuração da API.",
        "8. Na tela 'Etapa 1 de 2 concluída', toque em [Continuar para a 2ª etapa];",
        "9. Na tela 'O que você vai precisar', leia atentamente as informações apresentadas e toque em [Continuar];",
        "10. Em 'Confirme seus dados', verifique o CPF e o CNPJ do usuário master da conta e toque em [Continuar no Inter];",
        "11. No aplicativo Inter Empresas, confirme a autenticação da conta utilizando a senha ou a biometria;",
        "12. Na tela 'Confirme os dados que serão compartilhados', revise as informações sobre o compartilhamento dos dados e role a página até o final;",
        "13. Revise os dados compartilhados e o prazo da autorização e, em seguida, toque em [Compartilhar dados] para concluir o processo;",
        "14. Após a conclusão do consentimento, verifique a mensagem 'Consentimento realizado com sucesso!' e toque em [Fechar] para finalizar o processo."
      ]
    }
  },
  {
    "id": "inter-mei",
    "nome": "Banco Inter MEI",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Todas Conectadas",
    "multiplas_msg": "Todas as contas vinculadas são conectadas.",
    "autorizador": "Titular MEI",
    "segundo_titular": "Não aplicável.",
    "especificidades": [
      "Fluxo simplificado exclusivo para clientes MEI."
    ],
    "tags": [
      "todas-juntas",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conecte outros bancos];",
        "3. Leia atentamente às informações e clique em [Continuar];",
        "4. Selecione a opção 'Inter MEI';",
        "5. A próxima tela será preenchida automaticamente, clique em [Conectar];",
        "6. Clique em [Conectar] novamente para ser direcionado a leitura do QR Code;",
        "7. Uma nova tela será aberta com um QR Code. Aponte a câmera do celular para o código e você será direcionado ao aplicativo do banco para concluir o consentimento;",
        "8. Ao ler o QR Code você será redirecionado ao app do banco. Realize o login no App normalmente (Senha, Face Id, biometria...); Após o login, confirme os dados a serem compartilhados.",
        "9. Na tela de compartilhamento, valide os dados a serem compartilhados e clique em [Compartilhar dados] e depois em [CONFIRMAR].",
        "10. Retorne ao Portal Domínio para acompanhar o progresso. Pelas normas do Open Finance a instituição tem até 5 minutos para iniciar o envio das informações. Caso o processo esteja demorando, clique em [Continuar em segundo plano] para continuar usando o Portal sem interromper o processo;",
        "11. Após a autenticação do consentimento, clique em [Fechar] e prossiga com a configuração do sistema Domínio."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, toque na opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'Inter MEI';",
        "5. Na tela 'O que você vai precisar', leia atentamente as informações apresentadas e toque em [Continuar];",
        "6. Em 'Confirme seus dados', verifique o CPF e o CNPJ do usuário master da conta e toque em [Continuar no Inter];",
        "7. No aplicativo Inter Empresas, confirme a autenticação da conta utilizando a senha ou a biometria;",
        "8. Na tela 'Confirme os dados que serão compartilhados', revise as informações sobre o compartilhamento dos dados e role a página até o final;",
        "9. Revise os dados compartilhados e o prazo da autorização e, em seguida, toque em [Compartilhar dados] para concluir o processo;",
        "10. Após a conclusão do consentimento, verifique a mensagem 'Consentimento realizado com sucesso!' e toque em [Fechar] para finalizar o processo."
      ]
    }
  },
  {
    "id": "itau",
    "nome": "Itaú",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Conta a Conta",
    "multiplas_msg": "É NECESSÁRIO realizar 1 consentimento individual para CADA conta corrente.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, 2º titular precisa assinar no App Itaú.",
    "especificidades": [
      "Requer 1 consentimento por conta (não conecta em lote).",
      "Autenticação via iToken no Desktop ou App.",
      "Opção de 'Continuar em segundo plano' durante o envio."
    ],
    "tags": [
      "conta-a-conta",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conecte outros bancos];",
        "3. Leia atentamente às informações e clique em [Continuar];",
        "4. Selecione a opção [Itaú Empresas];",
        "5. Nesta etapa, preencha com os dados de conexão à conta Itaú, sendo eles: Agência; Conta; Senha Eletrônica, CPF ou Código do operador;",
        "6. Estando todos os dados preenchidos, clique em [Conectar];",
        "7. Você será redirecionado(a) para o ambiente do Itaú para confirmar o consentimento, clique em [Continuar];",
        "8. Nesta etapa, serão configuradas as opções de acesso. Preencha de acordo com a sua opção e clique em [acessar];",
        "9. Preencha sua senha eletrônica, após preenchida clique em [acessar];",
        "10. Nesta etapa você deverá confirmar os dados a serem compartilhados. Verifique as informações e mova a barra de rolagem para baixo;",
        "11. Verifique os dados a serem compartilhados e, estando de acordo, clique em [quero compartilhar];",
        "12. Pelas normas do Open Finance a instituição tem até 5 minutos para iniciar o envio das informações. Caso o processo esteja demorando, clique em [Continuar em segundo plano] para continuar usando o Portal sem interromper o processo;",
        "13. Após a autenticação do consentimento, clique em [Fechar] e prossiga com a configuração do sistema Domínio."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, toque na opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'Itaú Empresas';",
        "5. Leia as informações sobre as duas etapas do fluxo de conexão e toque em [Começar];",
        "6. Na tela 'Credenciais utilizadas em cada etapa', leia atentamente as informações apresentadas e toque em [Continuar];",
        "7. Na tela 'Conecte a sua conta', informe a Agência, a Conta, a Senha Eletrônica e o CPF ou Código do operador. Em seguida, toque em [Conectar];",
        "8. Na tela 'Etapa 1 de 2 concluída', toque em [Continuar para a 2ª etapa];",
        "9. Na tela 'O que vai acontecer agora', leia atentamente as informações apresentadas e toque em [Continuar];",
        "10. Em 'Confirme seus dados', verifique o CPF e o CNPJ do usuário master da conta e toque em [Continuar no Itaú];",
        "11. No aplicativo 'Itaú Empresas', confirme a autenticação da conta para prosseguir com o consentimento;",
        "12. Em 'Compartilhamento', revise as informações apresentadas e os dados que serão compartilhados e toque em [Compartilhar];",
        "13. Após a conclusão do consentimento, verifique a mensagem 'Consentimento realizado com sucesso!' e toque em [Fechar] para finalizar o processo."
      ]
    }
  },
  {
    "id": "mercadopago",
    "nome": "Mercado Pago",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Todas Conectadas",
    "multiplas_msg": "Todas as contas vinculadas são conectadas automaticamente.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, se houver alçada conjunta.",
    "especificidades": [
      "Conecta todas as contas no fluxo Mercado Pago."
    ],
    "tags": [
      "todas-juntas",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conecte outros bancos];",
        "3. Leia atentamente às informações e clique em [Continuar];",
        "4. Selecione a opção 'Mercado Pago Empresas';",
        "5. A próxima tela será preenchida com os dados do usuário e da empresa. Se necessário, altere as informações e clique em [Conectar];",
        "6. Na tela de autorização, valide seus dados e clique em [Confirmar];",
        "7. Pelas normas do Open Finance a instituição tem até 5 minutos para iniciar o envio das informações. Caso o processo esteja demorando, clique em [Continuar em segundo plano] para continuar usando o Portal sem interromper o processo;",
        "8. Após a autenticação do consentimento, clique em [Fechar] e prossiga com a configuração do sistema Domínio."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, selecione a opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'Mercado Pago Empresas';",
        "5. Na tela 'O que você vai precisar', leia atentamente as informações apresentadas e toque em [Continuar];",
        "6. Em 'Confirme seus dados', verifique o CPF e o CNPJ do usuário master da conta e toque em [Continuar no Mercado];",
        "7. No aplicativo 'Mercado Pago', confirme a autenticação da conta utilizando a senha ou a biometria;",
        "8. Na tela 'Confirme os dados para conectar Mercado Pago', revise os dados que serão conectados e o prazo da autorização e, em seguida, toque em [Confirmar] para concluir o processo;",
        "9. Após a conclusão do consentimento, verifique a mensagem 'Consentimento realizado com sucesso!' e toque em [Fechar] para finalizar o processo."
      ]
    }
  },
  {
    "id": "nubank",
    "nome": "Nubank PJ",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Todas Conectadas",
    "multiplas_msg": "Todas as contas vinculadas são conectadas automaticamente.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, cotitular assina caso exista.",
    "especificidades": [
      "Selecionar a opção 'Nubank Empresas'.",
      "Conecta todas as contas correntes do CNPJ."
    ],
    "tags": [
      "todas-juntas",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conecte outros bancos];",
        "3. Leia atentamente às informações e clique em [Continuar];",
        "4. Selecione a opção 'Nubank Empresas';",
        "5. A tela será preenchida com os dados do usuário e empresa, clique em [Conectar];",
        "6. Uma nova tela será aberta com um QR Code. Aponte a câmera do celular para o código e você será direcionado ao aplicativo do banco para concluir o consentimento;",
        "7. Ao ler o QR Code você será redirecionado ao app do banco. Realize o login no App normalmente (Senha, Face Id, biometria...); ;",
        "8. Na próxima tela, confirme as informações e clique em [Autorizar];",
        "9. Pelas normas do Open Finance a instituição tem até 5 minutos para iniciar o envio das informações. Caso o processo esteja demorando, clique em [Continuar em segundo plano] para continuar usando o App sem interromper o processo;",
        "10. Após a autenticação do consentimento, clique em [Fechar] e prossiga com a configuração do sistema Domínio."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, selecione a opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'Nubank Empresas';",
        "5. Na tela 'O que você vai precisar', leia atentamente as informações apresentadas e toque em [Continuar];",
        "6. Em 'Confirme seus dados', verifique o CPF e o CNPJ do usuário master da conta e toque em [Continuar no Nubank];",
        "7. No aplicativo Nubank, confirme a autenticação da conta utilizando a senha ou a biometria;",
        "8. Na tela 'Confirme os dados do compartilhamento', revise as informações sobre o compartilhamento e toque em [Autorizar];",
        "9. Após a conclusão do consentimento, verifique a mensagem 'Consentimento realizado com sucesso!' e toque em [Fechar] para finalizar o processo."
      ]
    }
  },
  {
    "id": "santander",
    "nome": "Santander",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Conta a Conta",
    "multiplas_msg": "É NECESSÁRIO realizar 1 consentimento individual para CADA conta corrente.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, 2º titular deve aprovar no App Santander.",
    "especificidades": [
      "Requer 1 consentimento individual por conta corrente.",
      "Autenticação via Santander ID (QR Code / Token)."
    ],
    "tags": [
      "conta-a-conta",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conecte outra conta];",
        "3. Leia atentamente as informações e clique em [Continuar];",
        "4. Selecione a opção [Santander Empresas];",
        "5. Informe os seguintes dados: • Agência; • Conta; • Usuário; • Senha; • CPF; • CNPJ;",
        "6. Clique em [Conectar];",
        "7. Clique em [Continuar] para ser redirecionado ao ambiente do banco;",
        "8. Na janela suspensa do internet Banking, informe 'Agência' e 'Conta' e clique em [Entrar];",
        "9. Informe 'Usuário' e 'Senha', depois clique em [Entrar];",
        "10. Esta etapa 'Dispositivo de Segurança', requer a validação de segurança por dispositivo móvel com leitura de QRCode;",
        "11. Acesse sua conta no App 'Santander Empresas' efetuando o login em [Acessar conta];",
        "12. Selecione a opção 'Internet Banking';",
        "13. Posicione o 'QR code' para realizar a captura automática;",
        "14. Verifique os dados de 'Autenticacao Login' e clique em [GERAR CÓDIGO];",
        "15. Utilize o código gerado para autenticar no Internet Banking e clique em [Finalizar];",
        "16. No portal, verifique os dados a serem compartilhados e selecione a conta corrente para a qual será realizado o consentimento;",
        "17. Verifique os dados, role a página até o final e clique em [Continuar];",
        "18. Pelas normas do Open Finance a instituição tem até 5 minutos para iniciar o envio das informações. Caso o processo esteja demorando, clique em [Continuar em segundo plano] para continuar usando o App sem interromper o processo;",
        "19. Clique em [Fechar] para retornar ao portal."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, selecione a opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'Santander Empresas';",
        "5. Na tela 'Esta conexão tem duas etapas', leia atentamente as informações apresentadas e toque em [Começar];",
        "6. Na tela 'Credenciais utilizadas em cada etapa', leia atentamente as informações apresentadas e toque em [Continuar];",
        "7. Em 'Conecte a sua conta', preencha os campos 'Agência', 'Conta', 'Usuário' e 'Senha' da conta Santander Empresas e clique em [Conectar];",
        "8. Na tela 'Etapa 1 de 2 concluída', toque em [Continuar para a 2ª etapa];",
        "9. Na tela 'O que vai acontecer agora', leia atentamente as informações apresentadas e toque em [Continuar];",
        "10. Em 'Confirme seus dados', verifique o CPF e o CNPJ do usuário master da conta e toque em [Continuar no Santander];",
        "11. No aplicativo Santander Empresas, toque em [Acessar conta] para prosseguir;",
        "12. Na tela “Compartilhamento de dados”, revise os dados que serão compartilhados;",
        "13. Na tela seguinte, confirme as informações e clique em [Continuar e Redirecionar] para autorizar o compartilhamento e retornar ao sistema Domínio;",
        "14. Após a confirmação de que o consentimento foi realizado com sucesso, clique em [Fechar] e prossiga com a configuração no sistema Domínio."
      ]
    }
  },
  {
    "id": "sicoob",
    "nome": "Sicoob",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Todas Conectadas",
    "multiplas_msg": "Todas as contas cooperativas vinculadas são conectadas.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, 2º responsável deve assinar.",
    "especificidades": [
      "Selecionar 'Sicoob Empresas'.",
      "Conecta todas as contas cooperativas vinculadas."
    ],
    "tags": [
      "todas-juntas",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conecte outros bancos];",
        "3. Leia atentamente às informações e clique em [Continuar];",
        "4. Selecione a opção 'Sicoob Empresas';",
        "5. A próxima tela será preenchida com os dados do usuário e empresa, clique em [Conectar];",
        "6. Uma nova tela será exibida para conexão com o internet banking. Informe os dados necessários e clique em [Entrar];",
        "7. Confirme os dados exibidos e conduza a barra de rolagem até o final da janela;",
        "8. Confirme os dados exibidos e clique em [Prosseguir];",
        "9. Retorne ao Portal Domínio para acompanhar o progresso. Pelas normas do Open Finance a instituição tem até 5 minutos para iniciar o envio das informações. Caso o processo esteja demorando, clique em [Continuar em segundo plano] para continuar usando o Portal sem interromper o processo;",
        "10. Após a autenticação do consentimento, clique em [Fechar] e prossiga com a configuração do sistema Domínio."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, selecione a opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'Sicoob Empresas';",
        "5. Na tela 'O que você vai precisar', leia atentamente as informações apresentadas e toque em [Continuar];",
        "6. Em 'Confirme seus dados', verifique o CPF e o CNPJ do usuário master da conta e toque em [Continuar no Sicoob];",
        "7. No aplicativo Sicoob, confirme a autenticação da conta utilizando a senha ou a biometria;",
        "8. Na tela 'Confira o que será autorizado', revise as informações sobre o compartilhamento dos dados e toque em [Autorizar];",
        "9. Após a conclusão do consentimento, verifique a mensagem 'Consentimento realizado com sucesso!' e toque em [Fechar] para finalizar o processo."
      ]
    }
  },
  {
    "id": "sicredi",
    "nome": "Sicredi",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Todas Conectadas",
    "multiplas_msg": "Todas as contas cooperativas vinculadas são conectadas.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, se houver segundo titular.",
    "especificidades": [
      "Selecionar 'Sicredi Empresas'.",
      "Conecta todas as contas correntes."
    ],
    "tags": [
      "todas-juntas",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conecte outros bancos];",
        "3. Leia atentamente às informações e clique em [Continuar];",
        "4. Selecione a opção [Sicredi Empresas];",
        "5. Informe o Usuário e Senha de acesso à conta Sicredi e clique em [Conectar];",
        "6. Você será redirecionado(a) para o ambiente do banco Sicredi para confirmar o consentimento, clique em [Continuar];",
        "7. Nesta etapa, faça a leitura do QR Code com seu celular para ser redirecionado ao app Sicredi. Mantenha esta página aberta até a conclusão;",
        "8. Aponte seu celular para o QR Code e faça a leitura do mesmo;",
        "9. Após o redirecionamento, confirme os dados e toque em [Autorizar];",
        "10. Após a autenticação do consentimento, clique em [Fechar] e prossiga com a configuração do sistema Domínio;",
        "11. Retorne ao Portal Domínio para acompanhar o progresso. Pelas normas do Open Finance a instituição tem até 5 minutos para iniciar o envio das informações. O status final ficará conectado assim que finalizar o processo."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, selecione a opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'Sicredi Empresas';",
        "5. Na tela 'O que você vai precisar', leia atentamente as informações apresentadas e toque em [Continuar];",
        "6. Em 'Confirme seus dados', verifique o CPF e o CNPJ do usuário master da conta e toque em [Continuar no Sicredi];",
        "7. No aplicativo Sicredi, aguarde o carregamento;",
        "8. Revise os dados compartilhados e o prazo da autorização e, em seguida, toque em [Autorizar];",
        "9. Após a conclusão do consentimento, verifique a mensagem 'Consentimento realizado com sucesso!' e toque em [Fechar] para finalizar o processo."
      ]
    }
  },
  {
    "id": "stone",
    "nome": "Stone",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Todas Conectadas",
    "multiplas_msg": "Todas as contas correntes vinculadas são conectadas.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, caso exista segundo titular.",
    "especificidades": [
      "Selecionar 'Stone Pagamentos Empresas'.",
      "Conecta todas as contas correntes da Stone."
    ],
    "tags": [
      "todas-juntas",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conecte outros bancos];",
        "3. Leia atentamente às informações e clique em [Continuar];",
        "4. Selecione a opção [Stone Pagamentos Empresas];",
        "5. A próxima tela será preenchida com os dados do usuário e da empresa. Se necessário, altere as informações e clique em [Conectar];",
        "6. Uma nova tela será aberta para o preenchimento de credenciais de acesso para o ambiente do banco. Preencha e clique em [Entrar];",
        "7. Você será redirecionado(a) para o App da Stone para confirmar o consentimento; O aviso de autorização irá aparecer no seu smartphone para a liberação. Clique e arraste conforme a instrução;",
        "8. Ao acessar seu aplicativo do banco, uma mensagem informando a autorização pendente será exibida; clique na [Autorização de acesso pendente];",
        "9. Clique em [Autorizar] e posteriormente, [Voltar pro início];",
        "10. Retorne ao Portal Domínio para confirmar os dados compartilhados;",
        "11. Pelas normas do Open Finance a instituição tem até 5 minutos para iniciar o envio das informações. Caso o processo esteja demorando, clique em [Continuar em segundo plano] para continuar usando o Portal sem interromper o processo;",
        "12. Após a autenticação do consentimento, clique em [Fechar] e prossiga com a configuração do sistema Domínio."
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, selecione a opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'Stone Pagamentos Empresas';",
        "5. Na tela 'O que você vai precisar', leia atentamente as informações apresentadas e toque em [Continuar];",
        "6. Em 'Confirme seus dados', verifique o CPF e o CNPJ do usuário master da conta e toque em [Continuar no Stone];",
        "7. No aplicativo Stone, aguarde o carregamento;",
        "8. Na tela 'Confirme os dados que vão ser compartilhados', mova a página até o final e toque em [Compartilhar];",
        "9. Após a conclusão do consentimento, verifique a mensagem 'Consentimento realizado com sucesso!' e toque em [Fechar] para finalizar o processo."
      ]
    }
  },
  {
    "id": "unicred",
    "nome": "Unicred",
    "canais": [
      "Desktop",
      "SuperApp"
    ],
    "multiplas": "Todas Conectadas",
    "multiplas_msg": "Todas as contas cooperativas vinculadas são conectadas.",
    "autorizador": "Usuário Master",
    "segundo_titular": "Sim, 2º titular aprova pelo App.",
    "especificidades": [
      "Conecta todas as contas automaticamente."
    ],
    "tags": [
      "todas-juntas",
      "master"
    ],
    "tutoriais": {
      "Desktop": [
        "1. Acesse o Portal Domínio;",
        "2. Na tela inicial, clique na opção [Contabilidade Digital] ou [Meu Contador] e depois em [Conectar outra conta];",
        "3. Leia atentamente as informações e clique em [Continuar];",
        "4. Selecione a opção [Unicred Empresas];",
        "5. Preencha os dados solicitados e clique em [Conectar];",
        "6. Você será redirecionado(a) para o ambiente da Unicred para confirmar o consentimento. Aguarde alguns instantes;",
        "7. Informe os dados: 'Agência' e 'Conta'. Depois clique em [ACESSAR];",
        "8. Na tela \"Usuários vinculados à conta\", selecione o usuário correspondente ao CPF informado no passo 5 e clique em [CONFIRMAR].",
        "9. Preencha sua senha de 4 dígitos, depois clique em [ENTRAR];",
        "10. Aguarde o carregamento. Esse processo pode levar alguns minutos;",
        "11. Na próxima tela serão demonstradas as informações compartilhadas, leia atentamente às informações;",
        "12. Clique em [Confirmar compartilhamento] para prosseguir;",
        "13. Insira sua assinatura eletrônica e clique em [Confirmar];",
        "14. No seu celular, abra o aplicativo Unicred, acesse a opção [Unitoken] e utilize o Unitoken para escanear o QR Code exibido na tela do computador;",
        "15. Após autenticação, você será redirecionado;",
        "16. Quando a mensagem 'Pronto! Você pode fechar esta janela' for exibida, feche a janela do navegador;",
        "17. Pelas normas do Open Finance a instituição tem até 5 minutos para iniciar o envio das informações. Caso o processo esteja demorando, clique em [Continuar em segundo plano] para continuar usando o Portal sem interromper o processo;",
        "18. Após a autenticação do consentimento, clique em [Fechar] e prossiga com a configuração do sistema Domínio;"
      ],
      "SuperApp": [
        "1. Acesse o Super App Domínio;",
        "2. Na tela inicial, selecione a opção [Conecte outros bancos];",
        "3. Leia atentamente as informações e toque em [Continuar];",
        "4. Selecione a opção 'Unicred Empresas';",
        "5. Na tela 'O que você vai precisar', leia atentamente as informações apresentadas e toque em [Continuar];",
        "6. Em 'Confirme seus dados', verifique o CPF e o CNPJ do usuário master da conta e toque em [Continuar no Unicred];",
        "7. No aplicativo Unicred, toque na opção [Acessar conta];",
        "8. Na tela 'Solicitação de compartilhamento', revise os dados que serão compartilhados e toque em [Confirmar compartilhamento];",
        "9. Na tela 'ASSINATURA ELETRÔNICA', informe sua assinatura eletrônica e toque em [Confirmar compartilhamento] para autorizar o compartilhamento dos dados;",
        "10. Após a conclusão do consentimento, verifique a mensagem 'Consentimento realizado com sucesso!' e toque em [Fechar] para finalizar o processo."
      ]
    }
  }
];

let ofCurrentFilter = 'all';
let ofCurrentModalBank = null;
let ofCurrentModalTab = null;

// Alterna exibição do painel expansível da matriz
window.toggleMatrizOpenFinance = function() {
  const wrapper = document.getElementById('matriz-wrapper');
  const btn = document.getElementById('btn-toggle-matriz');
  if (!wrapper) return;

  const isOpen = wrapper.classList.contains('active');
  if (isOpen) {
    wrapper.classList.remove('active');
    if (btn) btn.innerHTML = '🏦 Guia de Bancos / Open Finance <span class="badge-count">15</span>';
  } else {
    wrapper.classList.add('active');
    if (btn) btn.innerHTML = '✖ Fechar Guia Open Finance';
    renderOpenFinanceCards();
  }
};

function renderOpenFinanceCards() {
  const container = document.getElementById('of-cards-grid');
  const searchInput = document.getElementById('of-search-input');
  if (!container) return;

  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

  const filtered = OF_BANCOS.filter(b => {
    const matchQ = b.nome.toLowerCase().includes(query) ||
                   b.multiplas_msg.toLowerCase().includes(query) ||
                   b.autorizador.toLowerCase().includes(query) ||
                   b.canais.some(c => c.toLowerCase().includes(query)) ||
                   b.especificidades.some(s => s.toLowerCase().includes(query));
    const matchF = ofCurrentFilter === 'all' || b.tags.includes(ofCurrentFilter);
    return matchQ && matchF;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div class="of-no-results">Nenhum banco encontrado com os filtros atuais.</div>';
    return;
  }

  container.innerHTML = filtered.map(b => {
    const isContaAConta = b.multiplas === 'Conta a Conta';
    const isOperador = b.tags.includes('perfil-operador');
    const tutorialKeys = Object.keys(b.tutoriais || {});

    return `
      <div class="of-card-item">
        <div class="of-card-top">
          <span class="of-card-name">${b.nome}</span>
          <div class="of-channel-tags">
            ${b.canais.map(c => `<span class="of-pill-channel">${c}</span>`).join('')}
          </div>
        </div>

        <div class="of-banner-mult ${isContaAConta ? 'warn' : 'ok'}">
          <strong>${isContaAConta ? '⚠️ CONTA A CONTA' : '⚡ TODAS JUNTAS'}</strong>: ${b.multiplas_msg}
        </div>

        ${isOperador ? `
          <div class="of-badge-operador">
            🚨 <strong>ATENÇÃO BRADESCO:</strong> Exige criar usuário Operador no Net Empresa antes do consentimento.
          </div>
        ` : ''}

        <div>
          <div class="of-label-mini">Autorização</div>
          <div class="of-auth-info">
            <strong>👤 ${b.autorizador}</strong>
            <div style="font-size:11px; color:#94a3b8; margin-top:2px;">
              2º Titular: ${b.segundo_titular}
            </div>
          </div>
        </div>

        <div>
          <div class="of-label-mini">Especificidades Rápidas</div>
          <ul class="of-specs-list">
            ${b.especificidades.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-top:auto; padding-top:10px;">
          <button type="button" class="of-btn-tutorial" onclick="openTutorialModal('${b.id}')">
            📖 Ver Tutorial Passo a Passo (${tutorialKeys.length} fluxo${tutorialKeys.length > 1 ? 's' : ''})
          </button>
        </div>
      </div>
    `;
  }).join('');
}

window.setOfFilter = function(filterVal, btnEl) {
  ofCurrentFilter = filterVal;
  document.querySelectorAll('.of-filter-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderOpenFinanceCards();
};

window.filterOfSearch = function() {
  renderOpenFinanceCards();
};

// ==========================================
// MODAL DE TUTORIAL PASSO A PASSO
// ==========================================

window.openTutorialModal = function(bankId) {
  const bank = OF_BANCOS.find(b => b.id === bankId);
  if (!bank) return;

  ofCurrentModalBank = bank;
  const modal = document.getElementById('of-tutorial-modal');
  if (!modal) return;

  document.getElementById('of-modal-title').textContent = bank.nome;
  
  // Banner de alerta no modal com foco nas regras críticas
  const alertEl = document.getElementById('of-modal-alert');
  const isContaAConta = bank.multiplas === 'Conta a Conta';
  alertEl.className = 'of-modal-banner ' + (isContaAConta ? 'warn' : 'ok');
  alertEl.innerHTML = `
    <div><strong>${isContaAConta ? '⚠️ ATENÇÃO - CONTA A CONTA' : '⚡ TODAS AS CONTAS AUTOMÁTICAS'}:</strong> ${bank.multiplas_msg}</div>
    <div style="margin-top:4px; font-size:12px; color:#cbd5e1;">
      👤 <strong>Autorizador:</strong> ${bank.autorizador} | <strong>2º Titular:</strong> ${bank.segundo_titular}
    </div>
  `;

  // Abas de Canais / Tutoriais
  const tabsContainer = document.getElementById('of-modal-tabs');
  const tutorialKeys = Object.keys(bank.tutoriais || {});
  tabsContainer.innerHTML = '';

  tutorialKeys.forEach((tKey, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'of-modal-tab-btn' + (idx === 0 ? ' active' : '');
    btn.textContent = (tKey === 'Desktop' ? '💻 ' : tKey === 'SuperApp' ? '📱 ' : '⚙️ ') + tKey;
    btn.onclick = () => switchTutorialTab(tKey, btn);
    tabsContainer.appendChild(btn);
  });

  // Exibir a primeira aba
  if (tutorialKeys.length > 0) {
    switchTutorialTab(tutorialKeys[0]);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function switchTutorialTab(tabKey, activeBtn) {
  ofCurrentModalTab = tabKey;
  if (activeBtn) {
    document.querySelectorAll('.of-modal-tab-btn').forEach(b => b.classList.remove('active'));
    activeBtn.classList.add('active');
  }

  const stepsList = document.getElementById('of-modal-steps');
  if (!stepsList || !ofCurrentModalBank) return;

  const steps = ofCurrentModalBank.tutoriais[tabKey] || [];
  if (steps.length === 0) {
    stepsList.innerHTML = '<div style="padding:20px; color:#94a3b8; text-align:center;">Nenhum passo catalogado para este canal.</div>';
    return;
  }

  stepsList.innerHTML = steps.map(s => {
    // Extrair numero do passo se houver
    const match = s.match(/^(\d+)\.\s*(.*)/);
    const num = match ? match[1] : '•';
    const text = match ? match[2] : s;

    return `
      <div class="of-step-item">
        <div class="of-step-num">${num}</div>
        <div class="of-step-text">${text}</div>
      </div>
    `;
  }).join('');
}

window.closeTutorialModal = function() {
  const modal = document.getElementById('of-tutorial-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
};

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeTutorialModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderOpenFinanceCards();
});
