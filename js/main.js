let blinds
const blindsWrapper = document.querySelector('.blindsWrapper')

const contentData = [
    {
        id: 1,
        title: 'Новости компании',
        content: 'Сегодня нашей компании исполнился ровно один год. Мы благодарны Вам, что вы были с нами!',
    },
    {
        id: 2,
        title: 'Наша продукция',
        content: 'Наша компания производит и поставляет лучшие плюшивые игрушки во всей галактике!!!',
    },
    {   id: 3,
        title: 'Наши работники',
        content: 'У нас профессионалы своего дела!',
    },
    {
        id: 4,
        title: 'Магазины',
        content: 'В каждом городе',
    },
    {
        id: 5,
        title: 'Где нас найти?',
        content: 'Мы находимся рядом с Вами!',
    },
];

const createTemplate = item => {
    return `
    <div class="blindsItem">
        <div class="blindsItemTitle">${item.title}</div>
        <div class="blindsItemContent">${item.content}</div>
    </div>
    `
}

const wList = () => {
    contentData.forEach(item => {
        blindsWrapper.innerHTML += createTemplate(item);
    })
    blinds = document.querySelectorAll('.blindsItem')
}

wList();

for (item of blinds) {
    item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active')
        } else {
            for (el of blinds) {
                el.classList.remove('active')
            }
            this.classList.add('active')
        }
    })
}