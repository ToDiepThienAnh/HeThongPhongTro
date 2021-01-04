import { SET_DANHSACH_HOADON, SET_HOADON } from "../type/type";


const stateDefault = {
    // mangPhong: [{"maphong":5,"dientich":15,"loaiphong":1,"giaphong":"$1,400,000.00","succhua":5,"tinhtrangphong":false,"trangthai":true}],
    mangHoaDon: [],
    mangHoaDonDaThanhToan: [],
    HoaDon: {
        values: {
            ngaylap: "",
            thangthanhtoan: "",
            phiphatsinh: "",
            tenphieuthu: "",
            thanhtien: "",
            tinhtrangphi: "",
            namthanhtoan: "",
            maphong: ""
        },
        errors: {
            ngaylap: "",
            thangthanhtoan: "",
            phiphatsinh: "",
            tenphieuthu: "",
            thanhtien: "",
            tinhtrangphi: "",
            namthanhtoan: "",
            maphong: ""
        }
    }
}

const HoaDonReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case SET_DANHSACH_HOADON: {
            let newMangHoaDon = [];

            newMangHoaDon = action.data.map(hoadon => ({
                ...hoadon,
                key: hoadon.mahoadon,
                options: {}
            }))

            state.mangHoaDon = [...newMangHoaDon]

            return { ...state }
        }
        case 'SET_DANHSACH_HOADON_THANHTOAN': {
            let newMangHoaDon = [];

            newMangHoaDon = action.data.map(hoadon => ({
                ...hoadon,
                key: hoadon.mahoadon,
                options: {}
            }))

            state.mangHoaDonDaThanhToan = [...newMangHoaDon]

            return { ...state }
        }
        case SET_HOADON: {
            state.HoaDon = action.HoaDon
            return { ...state }
        }
        default:
            return { ...state }
    }
}




export default HoaDonReducer