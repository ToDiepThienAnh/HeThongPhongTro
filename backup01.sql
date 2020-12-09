PGDMP     1    *        	        x            HeThongPhongTro    12.5    12.5 >    ^           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            _           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            `           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            a           1262    16432    HeThongPhongTro    DATABASE     �   CREATE DATABASE "HeThongPhongTro" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
 !   DROP DATABASE "HeThongPhongTro";
                postgres    false            �            1259    16435    cosovatchat    TABLE     w   CREATE TABLE public.cosovatchat (
    id integer NOT NULL,
    "Ten" text,
    "DonGia" money,
    soluong smallint
);
    DROP TABLE public.cosovatchat;
       public         heap    postgres    false            �            1259    16433    CoSoVatChat_id_seq    SEQUENCE     �   CREATE SEQUENCE public."CoSoVatChat_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."CoSoVatChat_id_seq";
       public          postgres    false    203            b           0    0    CoSoVatChat_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."CoSoVatChat_id_seq" OWNED BY public.cosovatchat.id;
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
       public          postgres    false    214            c           0    0    DichVu_MaDichVu_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."DichVu_MaDichVu_seq" OWNED BY public.dichvu.madichvu;
          public          postgres    false    213            �            1259    16454    hopdongthue    TABLE     �   CREATE TABLE public.hopdongthue (
    mahopdong integer NOT NULL,
    ngaythue date,
    ngayhethan date,
    thoihan smallint,
    kythanhtoan smallint
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
       public          postgres    false    207            d           0    0    HopDongThue_MaHopDong_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."HopDongThue_MaHopDong_seq" OWNED BY public.hopdongthue.mahopdong;
          public          postgres    false    206            �            1259    16515 	   khachhang    TABLE     �   CREATE TABLE public.khachhang (
    makhachhang integer NOT NULL,
    hoten text,
    noithuongtru text,
    cmnd smallint,
    sdt smallint,
    noisinh text,
    nguyenquan text,
    ngaysinh date,
    gioitinh text
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
       public          postgres    false    212            e           0    0    KhachHang_MaKhachHang_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."KhachHang_MaKhachHang_seq" OWNED BY public.khachhang.makhachhang;
          public          postgres    false    211            �            1259    16446    phong    TABLE     �   CREATE TABLE public.phong (
    maphong integer NOT NULL,
    dientich smallint,
    loaiphong smallint,
    giaphong money,
    succhua smallint,
    tinhtrangphong boolean,
    sophong smallint
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
       public          postgres    false    205            f           0    0    Phong_MaPhong_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Phong_MaPhong_seq" OWNED BY public.phong.maphong;
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
       public          postgres    false    209            g           0    0    TaiKhoan_MaTaiKhoan_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."TaiKhoan_MaTaiKhoan_seq" OWNED BY public.taikhoan.id;
          public          postgres    false    208            �            1259    16507    dichvu_phong    TABLE     j   CREATE TABLE public.dichvu_phong (
    chisodau smallint,
    chisocuoi date,
    thanhtiendichvu date
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
       public          postgres    false    216            h           0    0    nhanvien_manhanvien_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.nhanvien_manhanvien_seq OWNED BY public.nhanvien.manhanvien;
          public          postgres    false    215            �            1259    16659    phieuthu    TABLE     �   CREATE TABLE public.phieuthu (
    maphieuthu integer NOT NULL,
    ngaylap date,
    thangthanhtoan smallint,
    phiphatsinh money,
    tenphieuthu text,
    thanhtien money,
    tinhtrangphi boolean,
    namthanhtoan smallint
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
       public          postgres    false    218            i           0    0    phieuthu_maphieuthu_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.phieuthu_maphieuthu_seq OWNED BY public.phieuthu.maphieuthu;
          public          postgres    false    217            �
           2604    16438    cosovatchat id    DEFAULT     r   ALTER TABLE ONLY public.cosovatchat ALTER COLUMN id SET DEFAULT nextval('public."CoSoVatChat_id_seq"'::regclass);
 =   ALTER TABLE public.cosovatchat ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            �
           2604    16529    dichvu madichvu    DEFAULT     t   ALTER TABLE ONLY public.dichvu ALTER COLUMN madichvu SET DEFAULT nextval('public."DichVu_MaDichVu_seq"'::regclass);
 >   ALTER TABLE public.dichvu ALTER COLUMN madichvu DROP DEFAULT;
       public          postgres    false    213    214    214            �
           2604    16457    hopdongthue mahopdong    DEFAULT     �   ALTER TABLE ONLY public.hopdongthue ALTER COLUMN mahopdong SET DEFAULT nextval('public."HopDongThue_MaHopDong_seq"'::regclass);
 D   ALTER TABLE public.hopdongthue ALTER COLUMN mahopdong DROP DEFAULT;
       public          postgres    false    206    207    207            �
           2604    16518    khachhang makhachhang    DEFAULT     �   ALTER TABLE ONLY public.khachhang ALTER COLUMN makhachhang SET DEFAULT nextval('public."KhachHang_MaKhachHang_seq"'::regclass);
 D   ALTER TABLE public.khachhang ALTER COLUMN makhachhang DROP DEFAULT;
       public          postgres    false    212    211    212            �
           2604    16651    nhanvien manhanvien    DEFAULT     z   ALTER TABLE ONLY public.nhanvien ALTER COLUMN manhanvien SET DEFAULT nextval('public.nhanvien_manhanvien_seq'::regclass);
 B   ALTER TABLE public.nhanvien ALTER COLUMN manhanvien DROP DEFAULT;
       public          postgres    false    215    216    216            �
           2604    16662    phieuthu maphieuthu    DEFAULT     z   ALTER TABLE ONLY public.phieuthu ALTER COLUMN maphieuthu SET DEFAULT nextval('public.phieuthu_maphieuthu_seq'::regclass);
 B   ALTER TABLE public.phieuthu ALTER COLUMN maphieuthu DROP DEFAULT;
       public          postgres    false    217    218    218            �
           2604    16449    phong maphong    DEFAULT     p   ALTER TABLE ONLY public.phong ALTER COLUMN maphong SET DEFAULT nextval('public."Phong_MaPhong_seq"'::regclass);
 <   ALTER TABLE public.phong ALTER COLUMN maphong DROP DEFAULT;
       public          postgres    false    204    205    205            �
           2604    16468    taikhoan id    DEFAULT     t   ALTER TABLE ONLY public.taikhoan ALTER COLUMN id SET DEFAULT nextval('public."TaiKhoan_MaTaiKhoan_seq"'::regclass);
 :   ALTER TABLE public.taikhoan ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208    209            L          0    16435    cosovatchat 
   TABLE DATA           C   COPY public.cosovatchat (id, "Ten", "DonGia", soluong) FROM stdin;
    public          postgres    false    203   �D       W          0    16526    dichvu 
   TABLE DATA           L   COPY public.dichvu (madichvu, tendichvu, giadichvu, loaidichvu) FROM stdin;
    public          postgres    false    214   IE       S          0    16507    dichvu_phong 
   TABLE DATA           L   COPY public.dichvu_phong (chisodau, chisocuoi, thanhtiendichvu) FROM stdin;
    public          postgres    false    210   �E       P          0    16454    hopdongthue 
   TABLE DATA           \   COPY public.hopdongthue (mahopdong, ngaythue, ngayhethan, thoihan, kythanhtoan) FROM stdin;
    public          postgres    false    207   �E       U          0    16515 	   khachhang 
   TABLE DATA           y   COPY public.khachhang (makhachhang, hoten, noithuongtru, cmnd, sdt, noisinh, nguyenquan, ngaysinh, gioitinh) FROM stdin;
    public          postgres    false    212   �E       Y          0    16648    nhanvien 
   TABLE DATA           R   COPY public.nhanvien (manhanvien, hoten, diachi, sdt, cmnd, ngaysinh) FROM stdin;
    public          postgres    false    216   F       [          0    16659    phieuthu 
   TABLE DATA           �   COPY public.phieuthu (maphieuthu, ngaylap, thangthanhtoan, phiphatsinh, tenphieuthu, thanhtien, tinhtrangphi, namthanhtoan) FROM stdin;
    public          postgres    false    218   (F       N          0    16446    phong 
   TABLE DATA           i   COPY public.phong (maphong, dientich, loaiphong, giaphong, succhua, tinhtrangphong, sophong) FROM stdin;
    public          postgres    false    205   EF       R          0    16465    taikhoan 
   TABLE DATA           I   COPY public.taikhoan (id, tentruycap, matkhau, loaitaikhoan) FROM stdin;
    public          postgres    false    209   �F       j           0    0    CoSoVatChat_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."CoSoVatChat_id_seq"', 4, true);
          public          postgres    false    202            k           0    0    DichVu_MaDichVu_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."DichVu_MaDichVu_seq"', 4, true);
          public          postgres    false    213            l           0    0    HopDongThue_MaHopDong_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."HopDongThue_MaHopDong_seq"', 1, false);
          public          postgres    false    206            m           0    0    KhachHang_MaKhachHang_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."KhachHang_MaKhachHang_seq"', 1, false);
          public          postgres    false    211            n           0    0    Phong_MaPhong_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Phong_MaPhong_seq"', 3, true);
          public          postgres    false    204            o           0    0    TaiKhoan_MaTaiKhoan_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."TaiKhoan_MaTaiKhoan_seq"', 3, true);
          public          postgres    false    208            p           0    0    nhanvien_manhanvien_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.nhanvien_manhanvien_seq', 1, false);
          public          postgres    false    215            q           0    0    phieuthu_maphieuthu_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.phieuthu_maphieuthu_seq', 1, false);
          public          postgres    false    217            �
           2606    16443    cosovatchat CoSoVatChat_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.cosovatchat
    ADD CONSTRAINT "CoSoVatChat_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.cosovatchat DROP CONSTRAINT "CoSoVatChat_pkey";
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
           2606    16656    nhanvien nhanvien_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.nhanvien
    ADD CONSTRAINT nhanvien_pkey PRIMARY KEY (manhanvien);
 @   ALTER TABLE ONLY public.nhanvien DROP CONSTRAINT nhanvien_pkey;
       public            postgres    false    216            �
           2606    16667    phieuthu phieuthu_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.phieuthu
    ADD CONSTRAINT phieuthu_pkey PRIMARY KEY (maphieuthu);
 @   ALTER TABLE ONLY public.phieuthu DROP CONSTRAINT phieuthu_pkey;
       public            postgres    false    218            L   j   x�3�<2���<��҇�7�e(�&�s���prq:ޜ��P��p��J��L�2�]'CC�pN$���*5�2�t>��R!�rj&���)=... 44."      W   [   x�3�<2����6?N=���߱�w�rVp�|�k��;��LT�����pc$����
ΠÍΜ*F0o� W� �Z+�      S      x������ � �      P      x������ � �      U      x������ � �      Y      x������ � �      [      x������ � �      N   /   x�3�44�4�T1�100 a=Nc�4NC.#\RF\Ƹ���b���� C�<      R   -   x�3�t���442�4�2�L��047�4r�9Sr3���=... ��.     