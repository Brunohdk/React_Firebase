import ImgTodo from '../../../assets/cardtodo.png'
import ImgAccTracker from '../../../assets/cardacctracker.png'
import ImgCalculator from '../../../assets/cardcalculator.png'

export default [
    {
        id:'0',
        image: ImgTodo,
        title: 'To do List',
        subtitle: 'ReactJS + Styled C.',
        desc: 'Lista de a fazeres',
        content: 'Para que possamos ter mais agilidade nos nossos a fazeres do dia-a-dia.',
        linktest: '/todos',
        linkcode: 'https://github.com/Brunohdk/React_Firebase/blob/master/src/components/layout/af/TutorialToDo.js'
    },
    {
        id:'1',
        image: ImgAccTracker,
        title: 'Account Tracker',
        subtitle: 'ReactJS + Styled C.',
        desc: 'Controle de contas',
        content: 'Como um histórico do seu cartão de crédito, porém não restrito ao mesmo.',
        linktest: '/acctracker',
        linkcode: 'https://github.com/Brunohdk/React_Firebase/blob/master/src/components/layout/contents/testetracker/App.js'
    },
    {
        id:'2',
        image: ImgCalculator,
        title: 'Calculator',
        subtitle: 'ReactJS + Styled C.',
        desc: 'Calculadora',
        content: 'Calculadora funcional.',
        linktest: '/calculator',
        linkcode: ''
    }
]