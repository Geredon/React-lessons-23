let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are yuo?", likesCount: 12},
            {id: 2, message: "t`s my first post", likesCount: 4},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, imgDialogs: <img src="https://coolsen.ru/wp-content/uploads/2021/06/78-7.jpg"/>, name: "Egor"},
            {
                id: 2,
                imgDialogs: <img
                    src="https://klopik.com/uploads/posts/2013-04/1364760830_animals-dressed-like-humans-24.jpg"/>,
                name: "Lex"
            },
            {
                id: 3,
                imgDialogs: <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-26.jpg"/>,
                name: "Oleg"
            },
            {
                id: 4,
                imgDialogs: <img
                    src="https://all-t-shirts.ru/goods_images/ru126357II000a80f123c069e634318f5a207ed529b0a.jpg"/>,
                name: "Sasha"
            },
            {
                id: 5,
                imgDialogs: <img src="https://img.staticdj.com/6c574836016f363e7eb39cb2bc7436ec.jpeg"/>,
                name: "Valera"
            },
            {
                id: 6,
                imgDialogs: <img
                    src="https://i.pinimg.com/736x/ff/7a/81/ff7a81364dc76b492b7773cc4280c04a--human-zoo-house-mouse.jpg"/>,
                name: "Victor"
            },
            {
                id: 7,
                imgDialogs: <img
                    src="https://avatars.mds.yandex.net/i?id=2a0000017a14d19eb9e1d94705337fd8f2ec-4577184-images-thumbs&ref=rim&n=33&w=188&h=150"/>,
                name: "Alex"
            },
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is you?"},
            {id: 3, message: "Welcome"},
        ],
    },
    sideBar: [
        {
            id: 4,
            img: <img src="https://all-t-shirts.ru/goods_images/ru126357II000a80f123c069e634318f5a207ed529b0a.jpg"/>,
            name: "Sasha"
        },
        {
            id: 5,
            img: <img src="https://img.staticdj.com/6c574836016f363e7eb39cb2bc7436ec.jpeg"/>,
            name: "Valera"
        },
        {
            id: 2,
            img: <img src="https://klopik.com/uploads/posts/2013-04/1364760830_animals-dressed-like-humans-24.jpg"/>,
            name: "Lex"
        },
    ],
}

export default state;
