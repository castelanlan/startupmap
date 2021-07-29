# Contribuindo

### Dependências

`yarn install` ou `npm install`

### Começar projeto

`yarn run start` ou `npm run`, vai começar na porta 3000.

### Build

`yarn build` ou `npm build`

# Problemas

## !important

Depois de muito debugging, percebi que esse estilo **não** aplica:
```css
html {
    margin: 0;
    padding: 0;
    background-color: var(...); /* mesmo usando !important aqui ele não aplica*/
}
```
E tenho que fazer [isso](https://github.com/castelanlan/startupmap/blob/dfbf1a5724977c8bdd769e087385ae3640651516/src/styles/GlobalStyles.ts#L18) pra tirar a margem da página (bordas brancas na lateral):
```css
* {
    margin: 0;
}
```

O problema é que fazendo isso, _todas as outras margens_ de elementos são ignoradas se não tiverem `!important`... Não sei porque.
Isso também significa que a cor de fundo _real_ da página é branca, e em celulares, que tem scroll horizontal, é possível ver a cor branca no canto inferior direito.

## Responsivo

Na minha opinião o responsivo da caixa de start up poderia melhorar, em celulares a descrição fica muuito longa e fina, e com espaço sobrando em baixo da foto da start up, onde a descrição poderia ir, mas não sei como chegar a esse resultado. [Código atual](https://github.com/castelanlan/startupmap/blob/dfbf1a5724977c8bdd769e087385ae3640651516/src/components/StartUp/index.tsx#L22).

## Modal

Não sei como estilizar os elementos [dentro do modal](https://github.com/castelanlan/startupmap/blob/dfbf1a5724977c8bdd769e087385ae3640651516/src/components/Header/index.tsx#L17)

## Botão entrar em contato

Não sei encaixar ele na caixa flex então ele fica em cima da descrição em alguns níveis de zoom específicos.

## Footer

Problemas mencionados no primeiro tópico