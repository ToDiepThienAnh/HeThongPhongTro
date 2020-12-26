import { SET_MA_KHACHHANG, SET_DANHSACH_HOPDONG, SET_KHACHHANG_PHONG, SET_MAPHONG_PHONG, SET_HOPDONG } from "../type/type";


const stateDefault = {
    mangHopDong: [],
    HopDong: {
        values: {
            maphong: '',
            makhachhang: '',
            ngaythue: '',
            ngayhethan: '',
            thoihan: '',
            kythanhtoan: ''
        },
        errors: {
            maphong: '',
            makhachhang: '',
            ngaythue: '',
            ngayhethan: '',
            thoihan: '',
            kythanhtoan: ''
        }
    },
    mangMaPhong: [],

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
        case SET_MAPHONG_PHONG: {
            let newMangKhachHangPhong = [...state.mangMaPhong, action.data];
            state.mangMaPhong = [...newMangKhachHangPhong]
            return { ...state }
        }
        case SET_HOPDONG: {
            state.HopDong = { ...action.HopDong }
            return { ...state }
        }

        default:
            return { ...state }
    }
}




export default HoaDonReducer