import dallas from '../img/products/productBG/dallas.webp'
import austin from '../img/products/productBG/austin.webp'
import newyork from '../img/products/productBG/newyork.webp'
import winterBG from '../img/products/productBG/winterBG.jpg'
import classic from '../img/products/classic.png'
import front from '../img/products/front.png'
import anticorrosive from '../img/products/anticorrosive.png'
import winter from '../img/products/winter.png'

export const products = [
    {
        name: "КОРУНД-Классик",
        desc: 'Теплоизоляция крыш, фасадов, пола, трубопроводов горячего и холодного водоснабжения, паропроводов.',
        fullDesc: 'Используется при теплоизоляции крыш, фасадов зданий, внутренних стен, откосов окон, бетонного пола, трубопроводов горячего и холодного водоснабжения, паропроводов, воздуховодов систем кондиционирования, систем охлаждения, различных ёмкостей, цистерн, трейлеров, рефрижераторов. Применяется для исключения конденсата на трубах холодного водоснабжения и снижения теплопотерь в системах отопления (согласно СНиП).\n' +
            'Температурный диапазон применения от -60 °С до +200°С (до +260°С в пиковом кратковременном режиме). Срок службы материала при соблюдении правил технологии нанесения не менее 15 лет. \n',
        packaging: 'пластиковое ведро',
        volume: '5, 10 и 20 л',
        image: classic,
        imageBG: dallas,
        link: '/classic'
    },
    {
        name: "КОРУНД-Фасад",
        desc: 'Устраняет промерзания, образования конденсата и грибка. Снижает теплопотери, устраняет промерзания.',
        fullDesc: 'Обладает теплоизоляционными свойствами и повышенной паропроницаемостью. Предназначен для нанесения слоями до 1 мм на фасады зданий. Устраняет промерзания, образования конденсата и грибка. Эффективно снижает теплопотери, не нарушая естественный воздухообмен внутреннего помещения с окружающей средой. \n',
        packaging: 'пластиковое ведро',
        volume: '5, 10 и 20 л',
        image: front,
        imageBG: austin,
        link: '/front'
    },
    {
        name: "КОРУНД-Антикор",
        desc: 'Для использования в качестве первого слоя на на плохо подготовленных металлических поверхностях.',
        fullDesc: 'КОРУНД-Антикор наносится на плохо подготовленную металлическую поверхность со следами коррозии (ржавчины). Достаточно удалить металлической щёткой «сырую» (рыхлую) ржавчину, после чего можно наносить жидкую композицию КОРУНД-Антикор. \n' +
            'Рекомендуется для использования на металлических поверхностях в качестве первого слоя в системе теплоизоляционных покрытий марки КОРУНД. Для последующих слоёв целесообразно применять КОРУНД-Классик. Применение КОРУНД-Антикор при теплоизоляции уже существующих конструкций и трубопроводов многократно снижает трудозатраты, поскольку не требует специальной подготовки рабочей поверхности. \n' +
            'Благодаря составу термоизолятор не только консервирует и преобразует коррозийный металл, но и препятствует дальнейшему возникновению коррозии. Металл, покрытый КОРУНД-Антикор не подвержен атмосферному влиянию. \n' +
            'Срок службы материала от 15 лет.',
        packaging: 'пластиковое ведро',
        volume: '10 и 20 л',
        image: anticorrosive,
        imageBG: newyork,
        link: '/anticorrosive'
    },
    {
        name: "КОРУНД-Зима",
        desc: 'Можно наносить в интервале температур от -5 °С до -20 °С. Температура эксплуатации от -60 °С до +90 °С.',
        fullDesc: 'Данный материал разработан для применения в строительстве, реконструкции и ремонте жилых, коммерческих и общественных зданий. В отличие от других модификаций, работы по нанесению КОРУНД-Зима могут проводиться в интервале температур от -5 °С до -20 °С (минимальная температура нанесения обычных модификаций не ниже +7 °С). Температура эксплуатации модификации КОРУНД-Зима составляет от -60 °С до +90 °С. \n' +
            'С теплоизолятором КОРУНД-Зима вы забудете о перерывах в ожидании подходящей погоды. Срок службы материала от 15 лет. \n',
        packaging: 'металлическое ведро',
        volume: '20 л',
        image: winter,
        imageBG: winterBG,
        link: '/winter'
    },
    /*//ПОЛИМЕРНАЯ ИЗОЛЯЦИЯ
    {
        name: 'КОРУНД-Санитарный',
        desc: 'Предназначен для нанесения на любые поверхности в качестве гидроизоляции пола и стен в санузлах, на кухне (обратная гидроизоляция). Экологически безопасен. Специальные добавки в составе препятствуют образованию грибка и плесени на защищаемых поверхностях. Подходит для  наружных и внутренних работ. \n',
        fullDesc: 'Предназначен для нанесения на любые поверхности в качестве гидроизоляции пола и стен в санузлах, на кухне (обратная гидроизоляция). Экологически безопасен. Специальные добавки в составе препятствуют образованию грибка и плесени на защищаемых поверхностях. Подходит для  наружных и внутренних работ. \n',
        packaging: 'пластиковое ведро',
        volume: '7 и 14 кг',
        image: '',
        link: ''
    },
    {
        name: 'КОРУНД-Жидкая кровля',
        desc: 'Предназначен для нанесения на любые поверхности в качестве: швов панельных зданий, плоских и скатных кровель жилых, промышленных, общественных объектов и зданий городской инфраструктуры. \n',
        fullDesc: 'Предназначен для нанесения на любые поверхности в качестве: швов панельных зданий, плоских и скатных кровель жилых, промышленных, общественных объектов и зданий городской инфраструктуры. \n',
        packaging: 'пластиковое ведро',
        volume: '7 и 14 кг',
        image: '',
        link: ''
    },
    {
        name: 'КОРУНД-Фундамент',
        desc: 'Предназначен для нанесения на вертикальные и горизонтальные основания фундаментов. Экологически безопасен. Специальные добавки в составе препятствуют образованию грибка и плесени на защищаемых поверхностях. Подходит для  наружных и внутренних работ. \n',
        fullDesc: 'Предназначен для нанесения на вертикальные и горизонтальные основания фундаментов. Экологически безопасен. Специальные добавки в составе препятствуют образованию грибка и плесени на защищаемых поверхностях. Подходит для  наружных и внутренних работ. \n',
        packaging: 'пластиковое ведро',
        volume: '7 и 14 кг',
        image: '',
        link: ''
    },
    //ГРУНТ
    {
        name: 'Грунтовка глубокого проникновения ЯХОНТ',
        desc: 'Применяется для обработки поверхностей перед нанесением финишного покрытия. Снижает пористость оснований, повышает их долговечность, а также способствует упрочнению оснований. \n',
        fullDesc: 'Применяется для обработки поверхностей перед нанесением финишного покрытия. Снижает пористость оснований, повышает их долговечность, а также способствует упрочнению оснований. Может использоваться для проведения фасадных и внутренних работ. Грунтовка хорошо контактирует с оштукатуренными, бетонными, деревянными, гипсокартонными и другими основаниями. \n',
        packaging: 'пластиковая канистра',
        volume: '10 л',
        image: '',
        link: ''
    },
    {
        name: 'Грунт глубокого проникновения ЯХОНТ',
        desc: 'Может использоваться для проведения фасадных и внутренних работ. Грунтовка хорошо контактирует с оштукатуренными, бетонными, деревянными, гипсокартонными и другими основаниями. \n',
        fullDesc: 'Применяется для обработки поверхностей перед нанесением финишного покрытия. Снижает пористость оснований, повышает их долговечность, а также способствует упрочнению оснований. Может использоваться для проведения фасадных и внутренних работ. Грунтовка хорошо контактирует с оштукатуренными, бетонными, деревянными, гипсокартонными и другими основаниями. \n',
        packaging: 'пластиковая канистра',
        volume: '10 л',
        image: '',
        link: ''
    },*/
]
