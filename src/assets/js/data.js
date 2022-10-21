/* eslint-disable prettier/prettier */
const allQuestions = [
    {
        id: 1,
        question_text: {
            name: "Viết lại bằng tiếng Việt",
            text: "I have two hats",
            lang: "EN"
        },
        arr_words: {
            arr: [
                {
                    id: 1,
                    name: "ô",
                    value: 1,
                },
                {
                    id: 2,
                    name: "xe",
                    value: 2,
                },
                {
                    id: 3,
                    name: "mũ",
                    value: 3,
                },
                {
                    id: 4,
                    name: "chiếc",
                    value: 4,
                },
                {
                    id: 5,
                    name: "Hai",
                    value: 5,
                },
                {
                    id: 6,
                    name: "Tôi",
                    value: 6,
                },
                {
                    id: 7,
                    name: "có",
                    value: 7,
                },
                {
                    id: 8,
                    name: "này",
                    value: 8,
                }
            ],
            lang: "VN"
        },
        answer: "Tôi có hai chiếc mũ",
        is_show_switch: true
    },
    {
        id: 2,
        question_text: {
            name: `Làm sao để nói "những chiếc áo khoác?"`,
            text: "",
            lang: "VN"
        },
        arr_words: {
            arr:[
                {
                    id: 1,
                    name: "Good morning",
                    value: 1,
                },
                {
                    id: 2,
                    name: "hi",
                    value: 2,
                },
                {
                    id: 3,
                    name: "coats",
                    value: 3,
                },
            ],
            lang: "EN"
        },
        answer: "coats",
        is_show_switch: false
    },
    {
        id: 3,
        question_text: {
            name: `Chọn cặp từ`,
            text: "",
            lang: "VN"
        },
        arr_words: {
            arr: [
                {
                    id: 1,
                    name: "này",
                    value: 1,
                },
                {
                    id: 2,
                    name: "thích",
                    value: 2,
                },
                {
                    id: 3,
                    name: "màu đen",
                    value: 3,
                },
                {
                    id: 4,
                    name: "xin chào",
                    value: 4,
                },
                {
                    id: 5,
                    name: "màu đỏ",
                    value: 5,
                }
            ],
            arr2: [
                {
                    id: 1,
                    name: "black",
                    value: 3,
                },
                {
                    id: 2,
                    name: "red",
                    value: 5,
                },
                {
                    id: 3,
                    name: "hi",
                    value: 4,
                },
                {
                    id: 4,
                    name: "this",
                    value: 1,
                },
                {
                    id: 5,
                    name: "like",
                    value: 2,
                }
            ],
            lang: "EN"
        },
        answer: "",
        is_show_switch: false
    },
    {
        id: 4,
        question_text: {
            name: `Bạn nghe được gì?`,
            text: "",
            lang: "VN"
        },
        arr_words: {
            arr:[
                {
                    id: 1,
                    name: "Rent",
                    value: 1,
                },
                {
                    id: 2,
                    name: "Red",
                    value: 2,
                },
                {
                    id: 3,
                    name: "Right",
                    value: 3,
                },
                {
                    id: 4,
                    name: "Road",
                    value: 4,
                },
            ],
            lang: "EN"
        },
        answer: "Red",
        is_show_switch: false
    },
    {
        id: 5,
        question_text: {
            name: "Nhấn vào những gì bạn nghe",
            text: "",
            lang: "EN"
        },
        arr_words: {
            arr: [
                {
                    id: 1,
                    name: "hot",
                    value: 1,
                },
                {
                    id: 2,
                    name: "this",
                    value: 2,
                },
                {
                    id: 3,
                    name: "two",
                    value: 3,
                },
                {
                    id: 4,
                    name: "hat",
                    value: 4,
                },
                {
                    id: 5,
                    name: "and",
                    value: 5,
                },
                {
                    id: 6,
                    name: "one",
                    value: 6,
                }
            ],
            lang: "EN"
        },
        answer: "one and two",
        is_show_switch: true
    },
    {
        id: 5,
        question_text: {
            name: "Đọc lại câu này",
            text: "I have two hats",
            lang: "EN"
        },
        arr_words: {
            arr: [],
            lang: "EN"
        },
        answer: "I have two hats",
        is_show_switch: false
    },
];

export default allQuestions;
