import { SET_DANHSACH_TAISAN, SET_TAISAN } from "../type/type";

const stateDefault = {
    mangTaiSan: [],
    TaiSan: {
        values: {
            // maphong: 0,
            ten: '',
            dongia: '',
            maphong: '',
            serial: ''

        },
        errors: {

            ten: '',
            dongia: '',
            maphong: '',
            serial: ''
        }
    }
}

const TaiSanReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_DANHSACH_TAISAN: {
            let newMangPhong = [];

            newMangPhong = action.data.map(taisan => ({
                ...taisan,
                key: taisan.id,
                options: taisan.id
            }))

            state.mangTaiSan = [...newMangPhong]

            return { ...state }
        }
        case SET_TAISAN: {
            state.TaiSan = { ...action.TaiSan }
            return { ...state }
        }

        default:
            return { ...state }
    }
}




export default TaiSanReducer