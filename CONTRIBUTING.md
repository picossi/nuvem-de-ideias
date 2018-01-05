## Quer contribuir?

Siga as instruções abaixo que tudo vai dar certo.

- Crie um fork do projeto.
- Clone o fork para a sua máquina. O seu repositório remoto será o `origin`.
- Adicione um repositório remoto chamado `upstream`.
```bash
$ git remote add upstream https://github.com/mumumilk/nuvem-de-ideias.git
```
- Utilize o `pull` para pegar as alterações para o seu repositório local antes de começar.
- Crie uma nova branch para começar, por exemplo `feature/xyz` ou `fix/xyz`.
- Implemente as alterações necessárias.
- Commit suas alterações usando [keywords](https://help.github.com/articles/closing-issues-using-keywords/) na mensagem do commit. Para fixes use (fixes #n), para melhorias e novas features use (resolves #n). (Onde `n` é o número da issue).
- Faça o push da sua branch para o seu fork no Github (para o remoto `origin`).
- A partir do seu fork abra um PR (pull request) para o repositório original.
- Assim que o pull request for aprovado e mergado você pode obter as mudanças do remoto `upstream` para o seu repositório local e deletar suas branchs extras.
