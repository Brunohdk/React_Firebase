import ImgTodo from '../../../assets/cardtodo.png'
import ImgAccTracker from '../../../assets/cardacctracker.png'
import ImgCalculator from '../../../assets/cardcalculator.png'
import ImgTetris from '../../../assets/cardtetris.png';
import ImgRecipes from '../../../assets/cardrecipes.png';
import ImgWeather from '../../../assets/cardWeather.png';

export default [
    {
        id:'0',
        image: ImgTodo,
        title: 'To do List',
        subtitle: 'ReactJS + Styled C.',
        desc: 'Lista de a fazeres',
        content: 'Feito para que possamos ter mais agilidade nos nossos a fazeres do dia-a-dia.',
        linktest: '/todos',
        linkcode: 'https://github.com/Brunohdk/React_Firebase/tree/master/src/components/layout/contents/tutoriaisIniciantes/tutorialTodo'
    },
    {
        id:'1',
        image: ImgAccTracker,
        title: 'Account Tracker',
        subtitle: 'ReactJS + Styled C.',
        desc: 'Controle de contas',
        content: 'Como um histórico do seu cartão de crédito, porém não restrito ao mesmo.',
        linktest: '/acctracker',
        linkcode: 'https://github.com/Brunohdk/React_Firebase/tree/master/src/components/layout/contents/tutoriaisIniciantes/tutorialAccTracker'
    },
    {
        id:'2',
        image: ImgCalculator,
        title: 'Calculator',
        subtitle: 'ReactJS + Styled C.',
        desc: 'Calculadora',
        content: 'Calculadora funcional.',
        linktest: '/calculator',
        linkcode: 'https://github.com/Brunohdk/React_Firebase/tree/master/src/components/layout/contents/tutoriaisIniciantes/tutorialCalculator'
    },
    {
        id:'3',
        image: ImgTetris,
        title: 'Tetris',
        subtitle: 'ReactJS + Styled C.',
        desc: 'Game Tetris',
        content: 'Game feito em grid e funções',
        linktest: '/tetris',
        linkcode: 'https://github.com/Brunohdk/React_Firebase/tree/master/src/components/layout/contents/tutoriaisAvancados/TetrisGame'
    },
    {
        id:'4',
        image: ImgRecipes,
        title: 'Recipes Search',
        subtitle: 'ReactJS + SASS + API',
        desc: 'Página de receitas',
        content: 'Consultas de receitas culinárias com integração de uma API',
        linktest: '/recipes',
        linkcode: 'https://github.com/Brunohdk/React_Firebase/tree/master/src/components/layout/contents/tutoriaisMedianos/tutorialRecipes'
    },
    {
        id:'5',
        image: ImgWeather,
        title: 'Weather App',
        subtitle: 'ReactJS + SASS + API',
        desc: 'Previsão do tempo',
        content: 'Consultar previsão do tempo do mundo todo com integração de uma API.',
        linktest: '/weather',
        linkcode: 'https://github.com/Brunohdk/React_Firebase/tree/master/src/components/layout/contents/tutoriaisMedianos/tutorialRecipes'
    }
]