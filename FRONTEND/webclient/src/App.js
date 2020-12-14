
import './App.css';
import DanhSachHoaDon from './Components/HoaDon/DanhSachHoaDon';
import FormHoaDon from './Components/HoaDon/FormHoaDon';
import Home from './Components/Home';
import FormDangKy from './Components/TaiKhoan/FormDangKy';
import FormDangNhap from './Components/TaiKhoan/FormDangNhap';
import FormDoiMatKhau from './Components/TaiKhoan/FormDoiMatKhau';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DanhSachPhong from './Components/Phong/DanhSachPhong';
import FormHopDong from './Components/HopDong/FormHopDong';



function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' exact component={DanhSachPhong} />
      <Route path='/login' exact component={FormDangNhap} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
