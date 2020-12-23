import { SET_DANHSACH_HOPDONG } from "../type/type";


const stateDefault = {
    mangHopDong: [],
    HopDong: {
        values: {
            ngaythue: '',
            ngayhethan: '',
            thoihan: '',
            kythanhtoan: ''
        },
        errors: {
            ngaythue: '',
            ngayhethan: '',
            thoihan: '',
            kythanhtoan: ''
        }
    }
}

const HoaDonReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_DANHSACH_HOPDONG: {
            let newMangHopDong = [];

            newMangHopDong = action.data.map(hopdong => ({
                ...hopdong,
                key: hopdong.mahopdong,
                options: {}
            }))

            state.mangHopDong = [...newMangHopDong]

            return { ...state }
        }
        default:
            return { ...state }
    }
}




export default HoaDonReducer