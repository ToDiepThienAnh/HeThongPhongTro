import { ADD_PHONG, DELELTE_PHONG, SET_DANHSACH_PHONG, SET_PHONG } from "../type/type";


const stateDefault = {
    // mangPhong: [{"maphong":5,"dientich":15,"loaiphong":1,"giaphong":"$1,400,000.00","succhua":5,"tinhtrangphong":false,"trangthai":true}],
    mangPhong: [],
    Phong: {
        values: {
            // maphong: 0,
            dientich: '',
            giaphong: '',
            succhua: '',
            tinhtrangphong: '',
            trangthai: false,
            tenphong: '',
        },
        errors: {

            dientich: '',
            giaphong: '',
            succhua: '',
            tinhtrangphong: '',
            trangthai: false,
            tenphong: '',
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
                options: phong.maphong
            }))

            state.mangPhong = [...newMangPhong]

            return { ...state }
        }
        case SET_PHONG: {
            state.Phong = { ...action.Phong }
            return { ...state }
        }
        case ADD_PHONG: {
            console.log(action);
            let mangPhongUpdate = [...state.mangPhong, state.Phong.values];

            return { ...state }
        }
        case DELELTE_PHONG: {
            let mangPhongUpdate = [...state.mangPhong]
            mangPhongUpdate = mangPhongUpdate.filter(phong => phong.maphong !== action.maPhong)
            console.log(mangPhongUpdate);
            return {
                ...state,
                mangPhong: mangPhongUpdate
            }
        }
        default:
            return { ...state }
    }
}




export default PhongReducer