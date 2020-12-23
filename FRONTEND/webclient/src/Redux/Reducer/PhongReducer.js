import { SET_DANHSACH_PHONG, SET_PHONG } from "../type/type";


const stateDefault = {
    // mangPhong: [{"maphong":5,"dientich":15,"loaiphong":1,"giaphong":"$1,400,000.00","succhua":5,"tinhtrangphong":false,"trangthai":true}],
    mangPhong: [],
    Phong: {
        values: {
            dientich: "",
            giaphong: " ",
            succhua: " ",
            tinhtrangphong: " ",
            trangthai: false,
            tenphong: " ",
        },
        errors: {
            dientich: " ",
            giaphong: " ",
            succhua: " ",
            tinhtrangphong: " ",
            trangthai: false,
            tenphong: " ",
        }
    }
}

const PhongReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_DANHSACH_PHONG: {
            let newMangPhong = [];

            newMangPhong = action.data.map(phong => ({
                ...phong,
                key: phong.maphong,
                options: {}
            }))

            state.mangPhong = [...newMangPhong]

            return { ...state }
        }
        case SET_PHONG: {
            state.Phong = { ...action.Phong }
            return { ...state }
        }

        default:
            return { ...state }
    }
}




export default PhongReducer