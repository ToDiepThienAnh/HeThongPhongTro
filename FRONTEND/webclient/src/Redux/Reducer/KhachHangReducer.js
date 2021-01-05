import { SET_DANHSACH_KHACHHANG, SET_KHACHHANG } from "../type/type";


const stateDefault = {
    mangKhachHang: [],
    mangKhachHangTraPhong: [],
    KhachHang: {
        values: {
            hoten: "",
            noithuongtru: "",
            noisinh: "",
            nguyenquan: "",
            ngaysinh: "",
            gioitinh: "",
            maphong: "",
            sodienthoai: "",
            cmnd: ""
        },
        errors: {
            hoten: "",
            noithuongtru: "",
            noisinh: "",
            nguyenquan: "",
            ngaysinh: "",
            gioitinh: "",
            maphong: "",
            sodienthoai: "",
            cmnd: ""
        }
    }
}

const KhachHangReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_DANHSACH_KHACHHANG: {
            let newMangKhachHang = [];

            newMangKhachHang = action.data.map(kh => ({
                ...kh,
                key: kh.makhachhang,
                options: kh.makhachhang
            }))

            state.mangKhachHang = [...newMangKhachHang]

            return { ...state }
        }
        case 'SET_KHACHHANG_TRAPHONG': {
            let newMangKhachHang = [];

            newMangKhachHang = action.data.map(kh => ({
                ...kh,
                key: kh.makhachhang,
                options: kh.makhachhang
            }))

            state.mangKhachHangTraPhong = [...newMangKhachHang]

            return { ...state }
        }
        case SET_KHACHHANG: {
            state.KhachHang = action.KhachHang
            return { ...state }
        }
        default:
            return { ...state }
    }
}




export default KhachHangReducer