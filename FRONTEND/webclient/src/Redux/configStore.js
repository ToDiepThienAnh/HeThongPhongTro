import { combineReducers, createStore } from 'redux';
import PhongReducer from './Reducer/PhongReducer'
import DichVuReducer from './Reducer/DichVuReducer'
import KhachHangReducer from './Reducer/KhachHangReducer'
import HopDongReducer from './Reducer/HopDongReducer'
import NhanVienReducer from './Reducer/NhanVienReducer'
import HoaDonReducer from './Reducer/HoaDonReducer'
import TaiSanReducer from './Reducer/TaiSanReducer'
import PhieuChiReducer from './Reducer/PhieuChiReducer'



const rootReducer = combineReducers({
    // khai báo reducer tại đây
    PhongReducer, DichVuReducer, KhachHangReducer, HopDongReducer, NhanVienReducer, HoaDonReducer, TaiSanReducer, PhieuChiReducer
})

const store = createStore(rootReducer);

export default store