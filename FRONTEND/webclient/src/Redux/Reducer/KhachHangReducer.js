import { SET_DANHSACH_KHACHHANG } from "../type/type";


const stateDefault = {
    mangKhachHang: []
}

const KhachHangReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_DANHSACH_KHACHHANG: {
            let newMangKhachHang = [];

            newMangKhachHang = action.data.map(kh => ({
                ...kh,
                key: kh.makhachhang,
                options: {}
            }))

            state.mangKhachHang = [...newMangKhachHang]

            return { ...state }
        }
        default:
            return { ...state }
    }
}




export default KhachHangReducer