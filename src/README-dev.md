## !important

Depois de muito debugging, percebi que esse estilo **não** aplica:
```css
html {
    margin: 0;
    padding: 0;
}
```
E tenho que fazer [isso](https://github.com/castelanlan/startupmap/blob/dfbf1a5724977c8bdd769e087385ae3640651516/src/styles/GlobalStyles.ts#L18) pra tirar a margem da página (bordas brancas na lateral):
```css
* {
    margin: 0;
}
```

O problema é que fazendo isso, _todas as outras margens_ de elementos são ignoradas se não tiverem `!important`... Não sei porque.

## Responsivo

Na minha opinião o responsivo da caixa de start up poderia melhorar, em celulares a descrição fica muuito longa e fina, e com espaço sobrando em baixo da foto da start up, onde a descrição poderia ir, mas não sei como chegar a esse resultado. [Código atual](https://github.com/castelanlan/startupmap/blob/dfbf1a5724977c8bdd769e087385ae3640651516/src/components/StartUp/index.tsx#L22).

## Modal

Não sei como estilizar os elementos [dentro do modal](https://github.com/castelanlan/startupmap/blob/dfbf1a5724977c8bdd769e087385ae3640651516/src/components/Header/index.tsx#L17)