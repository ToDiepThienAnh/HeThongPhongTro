PGDMP     &                    x            HeThongPhongTro    12.5    12.5 I    n           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            o           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            p           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            q           1262    16432    HeThongPhongTro    DATABASE     �   CREATE DATABASE "HeThongPhongTro" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
 !   DROP DATABASE "HeThongPhongTro";
                postgres    false            �            1259    16435    taisan    TABLE     X   CREATE TABLE public.taisan (
    id integer NOT NULL,
    ten text,
    dongia money
);
    DROP TABLE public.taisan;
       public         heap    postgres    false            �            1259    16433    CoSoVatChat_id_seq    SEQUENCE     �   CREATE SEQUENCE public."CoSoVatChat_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."CoSoVatChat_id_seq";
       public          postgres    false    203            r           0    0    CoSoVatChat_id_seq    SEQUENCE OWNED BY     F   ALTER SEQUENCE public."CoSoVatChat_id_seq" OWNED BY public.taisan.id;
          public          postgres    false    202            �            1259    16526    dichvu    TABLE     |   CREATE TABLE public.dichvu (
    madichvu integer NOT NULL,
    tendichvu text,
    giadichvu money,
    loaidichvu text
);
    DROP TABLE public.dichvu;
       public         heap    postgres    false            �            1259    16524    DichVu_MaDichVu_seq    SEQUENCE     �   CREATE SEQUENCE public."DichVu_MaDichVu_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."DichVu_MaDichVu_seq";
       public          postgres    false    214            s           0    0    DichVu_MaDichVu_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."DichVu_MaDichVu_seq" OWNED BY public.dichvu.madichvu;
          public          postgres    false    213            �            1259    16454    hopdongthue    TABLE     �   CREATE TABLE public.hopdongthue (
    mahopdong integer NOT NULL,
    ngaythue date,
    ngayhethan date,
    thoihan smallint,
    kythanhtoan smallint,
    maphong integer
);
    DROP TABLE public.hopdongthue;
       public         heap    postgres    false            �            1259    16452    HopDongThue_MaHopDong_seq    SEQUENCE     �   CREATE SEQUENCE public."HopDongThue_MaHopDong_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."HopDongThue_MaHopDong_seq";
       public          postgres    false    207            t           0    0    HopDongThue_MaHopDong_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."HopDongThue_MaHopDong_seq" OWNED BY public.hopdongthue.mahopdong;
          public          postgres    false    206            �            1259    16515 	   khachhang    TABLE     �   CREATE TABLE public.khachhang (
    makhachhang integer NOT NULL,
    hoten text,
    noithuongtru text,
    cmnd smallint,
    sdt smallint,
    noisinh text,
    nguyenquan text,
    ngaysinh date,
    gioitinh text,
    maphong integer
);
    DROP TABLE public.khachhang;
       public         heap    postgres    false            �            1259    16513    KhachHang_MaKhachHang_seq    SEQUENCE     �   CREATE SEQUENCE public."KhachHang_MaKhachHang_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."KhachHang_MaKhachHang_seq";
       public          postgres    false    212            u           0    0    KhachHang_MaKhachHang_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."KhachHang_MaKhachHang_seq" OWNED BY public.khachhang.makhachhang;
          public          postgres    false    211            �            1259    16446    phong    TABLE     �   CREATE TABLE public.phong (
    maphong integer NOT NULL,
    dientich smallint,
    loaiphong smallint,
    giaphong money,
    succhua smallint,
    tinhtrangphong boolean,
    trangthai boolean
);
    DROP TABLE public.phong;
       public         heap    postgres    false            �            1259    16444    Phong_MaPhong_seq    SEQUENCE     �   CREATE SEQUENCE public."Phong_MaPhong_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Phong_MaPhong_seq";
       public          postgres    false    205            v           0    0    Phong_MaPhong_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Phong_MaPhong_seq" OWNED BY public.phong.maphong;
          public          postgres    false    204            �            1259    16465    taikhoan    TABLE     |   CREATE TABLE public.taikhoan (
    id integer NOT NULL,
    tentruycap text,
    matkhau text,
    loaitaikhoan smallint
);
    DROP TABLE public.taikhoan;
       public         heap    postgres    false            �            1259    16463    TaiKhoan_MaTaiKhoan_seq    SEQUENCE     �   CREATE SEQUENCE public."TaiKhoan_MaTaiKhoan_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."TaiKhoan_MaTaiKhoan_seq";
       public          postgres    false    209            w           0    0    TaiKhoan_MaTaiKhoan_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."TaiKhoan_MaTaiKhoan_seq" OWNED BY public.taikhoan.id;
          public          postgres    false    208            �            1259    16507    dichvu_phong    TABLE     �   CREATE TABLE public.dichvu_phong (
    chisodau smallint,
    chisocuoi date,
    thanhtiendichvu date,
    maphong integer NOT NULL,
    madichvu integer NOT NULL
);
     DROP TABLE public.dichvu_phong;
       public         heap    postgres    false            �            1259    16648    nhanvien    TABLE     �   CREATE TABLE public.nhanvien (
    manhanvien integer NOT NULL,
    hoten text,
    diachi text,
    sdt smallint,
    cmnd smallint,
    ngaysinh date
);
    DROP TABLE public.nhanvien;
       public         heap    postgres    false            �            1259    16646    nhanvien_manhanvien_seq    SEQUENCE     �   CREATE SEQUENCE public.nhanvien_manhanvien_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.nhanvien_manhanvien_seq;
       public          postgres    false    216            x           0    0    nhanvien_manhanvien_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.nhanvien_manhanvien_seq OWNED BY public.nhanvien.manhanvien;
          public          postgres    false    215            �            1259    16659    phieuthu    TABLE     �   CREATE TABLE public.phieuthu (
    maphieuthu integer NOT NULL,
    ngaylap date,
    thangthanhtoan smallint,
    phiphatsinh money,
    tenphieuthu text,
    thanhtien money,
    tinhtrangphi boolean,
    namthanhtoan smallint,
    maphong integer
);
    DROP TABLE public.phieuthu;
       public         heap    postgres    false            �            1259    16657    phieuthu_maphieuthu_seq    SEQUENCE     �   CREATE SEQUENCE public.phieuthu_maphieuthu_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.phieuthu_maphieuthu_seq;
       public          postgres    false    218            y           0    0    phieuthu_maphieuthu_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.phieuthu_maphieuthu_seq OWNED BY public.phieuthu.maphieuthu;
          public          postgres    false    217            �            1259    16712    taisan_phong    TABLE     �   CREATE TABLE public.taisan_phong (
    id_taisan integer NOT NULL,
    id_phong integer NOT NULL,
    soluong smallint,
    tinhtrang boolean
);
     DROP TABLE public.taisan_phong;
       public         heap    postgres    false            �
           2604    16529    dichvu madichvu    DEFAULT     t   ALTER TABLE ONLY public.dichvu ALTER COLUMN madichvu SET DEFAULT nextval('public."DichVu_MaDichVu_seq"'::regclass);
 >   ALTER TABLE public.dichvu ALTER COLUMN madichvu DROP DEFAULT;
       public          postgres    false    213    214    214            �
           2604    16457    hopdongthue mahopdong    DEFAULT     �   ALTER TABLE ONLY public.hopdongthue ALTER COLUMN mahopdong SET DEFAULT nextval('public."HopDongThue_MaHopDong_seq"'::regclass);
 D   ALTER TABLE public.hopdongthue ALTER COLUMN mahopdong DROP DEFAULT;
       public          postgres    false    207    206    207            �
           2604    16518    khachhang makhachhang    DEFAULT     �   ALTER TABLE ONLY public.khachhang ALTER COLUMN makhachhang SET DEFAULT nextval('public."KhachHang_MaKhachHang_seq"'::regclass);
 D   ALTER TABLE public.khachhang ALTER COLUMN makhachhang DROP DEFAULT;
       public          postgres    false    212    211    212            �
           2604    16651    nhanvien manhanvien    DEFAULT     z   ALTER TABLE ONLY public.nhanvien ALTER COLUMN manhanvien SET DEFAULT nextval('public.nhanvien_manhanvien_seq'::regclass);
 B   ALTER TABLE public.nhanvien ALTER COLUMN manhanvien DROP DEFAULT;
       public          postgres    false    216    215    216            �
           2604    16662    phieuthu maphieuthu    DEFAULT     z   ALTER TABLE ONLY public.phieuthu ALTER COLUMN maphieuthu SET DEFAULT nextval('public.phieuthu_maphieuthu_seq'::regclass);
 B   ALTER TABLE public.phieuthu ALTER COLUMN maphieuthu DROP DEFAULT;
       public          postgres    false    217    218    218            �
           2604    16449    phong maphong    DEFAULT     p   ALTER TABLE ONLY public.phong ALTER COLUMN maphong SET DEFAULT nextval('public."Phong_MaPhong_seq"'::regclass);
 <   ALTER TABLE public.phong ALTER COLUMN maphong DROP DEFAULT;
       public          postgres    false    205    204    205            �
           2604    16468    taikhoan id    DEFAULT     t   ALTER TABLE ONLY public.taikhoan ALTER COLUMN id SET DEFAULT nextval('public."TaiKhoan_MaTaiKhoan_seq"'::regclass);
 :   ALTER TABLE public.taikhoan ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    209    209            �
           2604    16438 	   taisan id    DEFAULT     m   ALTER TABLE ONLY public.taisan ALTER COLUMN id SET DEFAULT nextval('public."CoSoVatChat_id_seq"'::regclass);
 8   ALTER TABLE public.taisan ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            f          0    16526    dichvu 
   TABLE DATA           L   COPY public.dichvu (madichvu, tendichvu, giadichvu, loaidichvu) FROM stdin;
    public          postgres    false    214   U       b          0    16507    dichvu_phong 
   TABLE DATA           _   COPY public.dichvu_phong (chisodau, chisocuoi, thanhtiendichvu, maphong, madichvu) FROM stdin;
    public          postgres    false    210   qU       _          0    16454    hopdongthue 
   TABLE DATA           e   COPY public.hopdongthue (mahopdong, ngaythue, ngayhethan, thoihan, kythanhtoan, maphong) FROM stdin;
    public          postgres    false    207   �U       d          0    16515 	   khachhang 
   TABLE DATA           �   COPY public.khachhang (makhachhang, hoten, noithuongtru, cmnd, sdt, noisinh, nguyenquan, ngaysinh, gioitinh, maphong) FROM stdin;
    public          postgres    false    212   �U       h          0    16648    nhanvien 
   TABLE DATA           R   COPY public.nhanvien (manhanvien, hoten, diachi, sdt, cmnd, ngaysinh) FROM stdin;
    public          postgres    false    216   -V       j          0    16659    phieuthu 
   TABLE DATA           �   COPY public.phieuthu (maphieuthu, ngaylap, thangthanhtoan, phiphatsinh, tenphieuthu, thanhtien, tinhtrangphi, namthanhtoan, maphong) FROM stdin;
    public          postgres    false    218   JV       ]          0    16446    phong 
   TABLE DATA           k   COPY public.phong (maphong, dientich, loaiphong, giaphong, succhua, tinhtrangphong, trangthai) FROM stdin;
    public          postgres    false    205   gV       a          0    16465    taikhoan 
   TABLE DATA           I   COPY public.taikhoan (id, tentruycap, matkhau, loaitaikhoan) FROM stdin;
    public          postgres    false    209   �V       [          0    16435    taisan 
   TABLE DATA           1   COPY public.taisan (id, ten, dongia) FROM stdin;
    public          postgres    false    203   �V       k          0    16712    taisan_phong 
   TABLE DATA           O   COPY public.taisan_phong (id_taisan, id_phong, soluong, tinhtrang) FROM stdin;
    public          postgres    false    219   gW       z           0    0    CoSoVatChat_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."CoSoVatChat_id_seq"', 4, true);
          public          postgres    false    202            {           0    0    DichVu_MaDichVu_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."DichVu_MaDichVu_seq"', 4, true);
          public          postgres    false    213            |           0    0    HopDongThue_MaHopDong_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."HopDongThue_MaHopDong_seq"', 2, true);
          public          postgres    false    206            }           0    0    KhachHang_MaKhachHang_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."KhachHang_MaKhachHang_seq"', 1, true);
          public          postgres    false    211            ~           0    0    Phong_MaPhong_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Phong_MaPhong_seq"', 13, true);
          public          postgres    false    204                       0    0    TaiKhoan_MaTaiKhoan_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."TaiKhoan_MaTaiKhoan_seq"', 3, true);
          public          postgres    false    208            �           0    0    nhanvien_manhanvien_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.nhanvien_manhanvien_seq', 1, false);
          public          postgres    false    215            �           0    0    phieuthu_maphieuthu_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.phieuthu_maphieuthu_seq', 1, false);
          public          postgres    false    217            �
           2606    16443    taisan CoSoVatChat_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.taisan
    ADD CONSTRAINT "CoSoVatChat_pkey" PRIMARY KEY (id);
 C   ALTER TABLE ONLY public.taisan DROP CONSTRAINT "CoSoVatChat_pkey";
       public            postgres    false    203            �
           2606    16534    dichvu DichVu_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.dichvu
    ADD CONSTRAINT "DichVu_pkey" PRIMARY KEY (madichvu);
 >   ALTER TABLE ONLY public.dichvu DROP CONSTRAINT "DichVu_pkey";
       public            postgres    false    214            �
           2606    16462    hopdongthue HopDongThue_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.hopdongthue
    ADD CONSTRAINT "HopDongThue_pkey" PRIMARY KEY (mahopdong);
 H   ALTER TABLE ONLY public.hopdongthue DROP CONSTRAINT "HopDongThue_pkey";
       public            postgres    false    207            �
           2606    16523    khachhang KhachHang_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.khachhang
    ADD CONSTRAINT "KhachHang_pkey" PRIMARY KEY (makhachhang);
 D   ALTER TABLE ONLY public.khachhang DROP CONSTRAINT "KhachHang_pkey";
       public            postgres    false    212            �
           2606    16451    phong Phong_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.phong
    ADD CONSTRAINT "Phong_pkey" PRIMARY KEY (maphong);
 <   ALTER TABLE ONLY public.phong DROP CONSTRAINT "Phong_pkey";
       public            postgres    false    205            �
           2606    16473    taikhoan TaiKhoan_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.taikhoan
    ADD CONSTRAINT "TaiKhoan_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.taikhoan DROP CONSTRAINT "TaiKhoan_pkey";
       public            postgres    false    209            �
           2606    16706    dichvu_phong dichvu_phong_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.dichvu_phong
    ADD CONSTRAINT dichvu_phong_pkey PRIMARY KEY (maphong, madichvu);
 H   ALTER TABLE ONLY public.dichvu_phong DROP CONSTRAINT dichvu_phong_pkey;
       public            postgres    false    210    210            �
           2606    16656    nhanvien nhanvien_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.nhanvien
    ADD CONSTRAINT nhanvien_pkey PRIMARY KEY (manhanvien);
 @   ALTER TABLE ONLY public.nhanvien DROP CONSTRAINT nhanvien_pkey;
       public            postgres    false    216            �
           2606    16667    phieuthu phieuthu_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.phieuthu
    ADD CONSTRAINT phieuthu_pkey PRIMARY KEY (maphieuthu);
 @   ALTER TABLE ONLY public.phieuthu DROP CONSTRAINT phieuthu_pkey;
       public            postgres    false    218            �
           2606    16716    taisan_phong taisan_phong_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.taisan_phong
    ADD CONSTRAINT taisan_phong_pkey PRIMARY KEY (id_taisan, id_phong);
 H   ALTER TABLE ONLY public.taisan_phong DROP CONSTRAINT taisan_phong_pkey;
       public            postgres    false    219    219            �
           2606    16695 (   dichvu_phong fk_dichvuPhong_dichvu_phong    FK CONSTRAINT     �   ALTER TABLE ONLY public.dichvu_phong
    ADD CONSTRAINT "fk_dichvuPhong_dichvu_phong" FOREIGN KEY (maphong) REFERENCES public.phong(maphong) NOT VALID;
 T   ALTER TABLE ONLY public.dichvu_phong DROP CONSTRAINT "fk_dichvuPhong_dichvu_phong";
       public          postgres    false    2756    205    210            �
           2606    16700 "   dichvu_phong fk_dichvu_dichvuPhong    FK CONSTRAINT     �   ALTER TABLE ONLY public.dichvu_phong
    ADD CONSTRAINT "fk_dichvu_dichvuPhong" FOREIGN KEY (madichvu) REFERENCES public.dichvu(madichvu) NOT VALID;
 N   ALTER TABLE ONLY public.dichvu_phong DROP CONSTRAINT "fk_dichvu_dichvuPhong";
       public          postgres    false    214    2766    210            �
           2606    16683     hopdongthue fk_phong_hopdongthue    FK CONSTRAINT     �   ALTER TABLE ONLY public.hopdongthue
    ADD CONSTRAINT fk_phong_hopdongthue FOREIGN KEY (maphong) REFERENCES public.phong(maphong) NOT VALID;
 J   ALTER TABLE ONLY public.hopdongthue DROP CONSTRAINT fk_phong_hopdongthue;
       public          postgres    false    2756    205    207            �
           2606    16688    khachhang fk_phong_khachhang    FK CONSTRAINT     �   ALTER TABLE ONLY public.khachhang
    ADD CONSTRAINT fk_phong_khachhang FOREIGN KEY (maphong) REFERENCES public.phong(maphong) NOT VALID;
 F   ALTER TABLE ONLY public.khachhang DROP CONSTRAINT fk_phong_khachhang;
       public          postgres    false    212    205    2756            �
           2606    16707    phieuthu fk_phong_phieuthu    FK CONSTRAINT     �   ALTER TABLE ONLY public.phieuthu
    ADD CONSTRAINT fk_phong_phieuthu FOREIGN KEY (maphong) REFERENCES public.phong(maphong) NOT VALID;
 D   ALTER TABLE ONLY public.phieuthu DROP CONSTRAINT fk_phong_phieuthu;
       public          postgres    false    205    2756    218            �
           2606    16717 "   taisan_phong fk_phong_taisan_Phong    FK CONSTRAINT     �   ALTER TABLE ONLY public.taisan_phong
    ADD CONSTRAINT "fk_phong_taisan_Phong" FOREIGN KEY (id_taisan) REFERENCES public.phong(maphong);
 N   ALTER TABLE ONLY public.taisan_phong DROP CONSTRAINT "fk_phong_taisan_Phong";
       public          postgres    false    2756    205    219            �
           2606    16722 #   taisan_phong fk_taisan_taisan_Phong    FK CONSTRAINT     �   ALTER TABLE ONLY public.taisan_phong
    ADD CONSTRAINT "fk_taisan_taisan_Phong" FOREIGN KEY (id_phong) REFERENCES public.taisan(id);
 O   ALTER TABLE ONLY public.taisan_phong DROP CONSTRAINT "fk_taisan_taisan_Phong";
       public          postgres    false    219    2754    203            f   [   x�3�<2����6?N=���߱�w�rVp�|�k��;��LT�����pc$����
ΠÍΜ*F0o� W� �Z+�      b      x������ � �      _   1   x�3�4����54�54Aars��qq@ŀLC�4s��qqq �_      d   N   x�3�I�S���O���T)MV�HrK�8�L-8-̌9C�\��dΐg_NCKKK]C]Cμ�\�?�=... ���      h      x������ � �      j      x������ � �      ]   =   x�3�44�4�T1�110�100�30�4�L�,�2�J��aR�`)#�RƸ��q[���� f%      a   -   x�3�t���442�4�2�L��047�4r�9Sr3���=... ��.      [   f   x�3�<2���<��҇�7�e(�&�s���pq:ޜ��P��p��J��L�"�]'CC�pN�Bcb�p:^T��T75�S��&���� �-9      k      x������ � �     