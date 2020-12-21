PGDMP         !                x            HeThongPhongTro    12.5    12.5 ?    \           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ]           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ^           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            _           1262    16432    HeThongPhongTro    DATABASE     �   CREATE DATABASE "HeThongPhongTro" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
 !   DROP DATABASE "HeThongPhongTro";
                postgres    false            �            1259    16435    taisan    TABLE     ~   CREATE TABLE public.taisan (
    id integer NOT NULL,
    ten text,
    dongia money,
    maphong integer,
    serial text
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
       public          postgres    false    203            `           0    0    CoSoVatChat_id_seq    SEQUENCE OWNED BY     F   ALTER SEQUENCE public."CoSoVatChat_id_seq" OWNED BY public.taisan.id;
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
       public          postgres    false    212            a           0    0    DichVu_MaDichVu_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."DichVu_MaDichVu_seq" OWNED BY public.dichvu.madichvu;
          public          postgres    false    211            �            1259    16454    hopdongthue    TABLE     �   CREATE TABLE public.hopdongthue (
    mahopdong integer NOT NULL,
    ngaythue date,
    ngayhethan date,
    thoihan smallint,
    kythanhtoan smallint,
    maphong integer,
    makhachhang integer
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
       public          postgres    false    207            b           0    0    HopDongThue_MaHopDong_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."HopDongThue_MaHopDong_seq" OWNED BY public.hopdongthue.mahopdong;
          public          postgres    false    206            �            1259    16515 	   khachhang    TABLE     	  CREATE TABLE public.khachhang (
    makhachhang integer NOT NULL,
    hoten text,
    noithuongtru text,
    noisinh text,
    nguyenquan text,
    ngaysinh date,
    gioitinh text,
    maphong integer,
    trangthai boolean,
    sodienthoai text,
    cmnd text
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
       public          postgres    false    210            c           0    0    KhachHang_MaKhachHang_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."KhachHang_MaKhachHang_seq" OWNED BY public.khachhang.makhachhang;
          public          postgres    false    209            �            1259    16446    phong    TABLE     �   CREATE TABLE public.phong (
    maphong integer NOT NULL,
    dientich smallint,
    giaphong money,
    succhua smallint,
    tinhtrangphong boolean,
    trangthai boolean,
    tenphong text
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
       public          postgres    false    205            d           0    0    Phong_MaPhong_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."Phong_MaPhong_seq" OWNED BY public.phong.maphong;
          public          postgres    false    204            �            1259    16507    dichvu_phong    TABLE     �   CREATE TABLE public.dichvu_phong (
    chisodau smallint,
    maphong integer NOT NULL,
    madichvu integer NOT NULL,
    chisocuoi smallint,
    thanhtiendichvu money
);
     DROP TABLE public.dichvu_phong;
       public         heap    postgres    false            �            1259    16648    nhanvien    TABLE     �   CREATE TABLE public.nhanvien (
    manhanvien integer NOT NULL,
    hoten text,
    diachi text,
    matkhau text,
    sodienthoai text,
    tentaikhoan text,
    cmnd text
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
       public          postgres    false    214            e           0    0    nhanvien_manhanvien_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.nhanvien_manhanvien_seq OWNED BY public.nhanvien.manhanvien;
          public          postgres    false    213            �            1259    16659    phieuthu    TABLE     �   CREATE TABLE public.phieuthu (
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
       public          postgres    false    216            f           0    0    phieuthu_maphieuthu_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.phieuthu_maphieuthu_seq OWNED BY public.phieuthu.maphieuthu;
          public          postgres    false    215            �
           2604    16529    dichvu madichvu    DEFAULT     t   ALTER TABLE ONLY public.dichvu ALTER COLUMN madichvu SET DEFAULT nextval('public."DichVu_MaDichVu_seq"'::regclass);
 >   ALTER TABLE public.dichvu ALTER COLUMN madichvu DROP DEFAULT;
       public          postgres    false    212    211    212            �
           2604    16457    hopdongthue mahopdong    DEFAULT     �   ALTER TABLE ONLY public.hopdongthue ALTER COLUMN mahopdong SET DEFAULT nextval('public."HopDongThue_MaHopDong_seq"'::regclass);
 D   ALTER TABLE public.hopdongthue ALTER COLUMN mahopdong DROP DEFAULT;
       public          postgres    false    206    207    207            �
           2604    16518    khachhang makhachhang    DEFAULT     �   ALTER TABLE ONLY public.khachhang ALTER COLUMN makhachhang SET DEFAULT nextval('public."KhachHang_MaKhachHang_seq"'::regclass);
 D   ALTER TABLE public.khachhang ALTER COLUMN makhachhang DROP DEFAULT;
       public          postgres    false    209    210    210            �
           2604    16651    nhanvien manhanvien    DEFAULT     z   ALTER TABLE ONLY public.nhanvien ALTER COLUMN manhanvien SET DEFAULT nextval('public.nhanvien_manhanvien_seq'::regclass);
 B   ALTER TABLE public.nhanvien ALTER COLUMN manhanvien DROP DEFAULT;
       public          postgres    false    213    214    214            �
           2604    16662    phieuthu maphieuthu    DEFAULT     z   ALTER TABLE ONLY public.phieuthu ALTER COLUMN maphieuthu SET DEFAULT nextval('public.phieuthu_maphieuthu_seq'::regclass);
 B   ALTER TABLE public.phieuthu ALTER COLUMN maphieuthu DROP DEFAULT;
       public          postgres    false    216    215    216            �
           2604    16449    phong maphong    DEFAULT     p   ALTER TABLE ONLY public.phong ALTER COLUMN maphong SET DEFAULT nextval('public."Phong_MaPhong_seq"'::regclass);
 <   ALTER TABLE public.phong ALTER COLUMN maphong DROP DEFAULT;
       public          postgres    false    204    205    205            �
           2604    16438 	   taisan id    DEFAULT     m   ALTER TABLE ONLY public.taisan ALTER COLUMN id SET DEFAULT nextval('public."CoSoVatChat_id_seq"'::regclass);
 8   ALTER TABLE public.taisan ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            U          0    16526    dichvu 
   TABLE DATA           L   COPY public.dichvu (madichvu, tendichvu, giadichvu, loaidichvu) FROM stdin;
    public          postgres    false    212   �J       Q          0    16507    dichvu_phong 
   TABLE DATA           _   COPY public.dichvu_phong (chisodau, maphong, madichvu, chisocuoi, thanhtiendichvu) FROM stdin;
    public          postgres    false    208   K       P          0    16454    hopdongthue 
   TABLE DATA           r   COPY public.hopdongthue (mahopdong, ngaythue, ngayhethan, thoihan, kythanhtoan, maphong, makhachhang) FROM stdin;
    public          postgres    false    207   +K       S          0    16515 	   khachhang 
   TABLE DATA           �   COPY public.khachhang (makhachhang, hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, maphong, trangthai, sodienthoai, cmnd) FROM stdin;
    public          postgres    false    210   _K       W          0    16648    nhanvien 
   TABLE DATA           f   COPY public.nhanvien (manhanvien, hoten, diachi, matkhau, sodienthoai, tentaikhoan, cmnd) FROM stdin;
    public          postgres    false    214   �K       Y          0    16659    phieuthu 
   TABLE DATA           �   COPY public.phieuthu (maphieuthu, ngaylap, thangthanhtoan, phiphatsinh, tenphieuthu, thanhtien, tinhtrangphi, namthanhtoan, maphong) FROM stdin;
    public          postgres    false    216   {L       N          0    16446    phong 
   TABLE DATA           j   COPY public.phong (maphong, dientich, giaphong, succhua, tinhtrangphong, trangthai, tenphong) FROM stdin;
    public          postgres    false    205   �L       L          0    16435    taisan 
   TABLE DATA           B   COPY public.taisan (id, ten, dongia, maphong, serial) FROM stdin;
    public          postgres    false    203   �L       g           0    0    CoSoVatChat_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."CoSoVatChat_id_seq"', 4, true);
          public          postgres    false    202            h           0    0    DichVu_MaDichVu_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."DichVu_MaDichVu_seq"', 4, true);
          public          postgres    false    211            i           0    0    HopDongThue_MaHopDong_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."HopDongThue_MaHopDong_seq"', 2, true);
          public          postgres    false    206            j           0    0    KhachHang_MaKhachHang_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."KhachHang_MaKhachHang_seq"', 1, true);
          public          postgres    false    209            k           0    0    Phong_MaPhong_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Phong_MaPhong_seq"', 13, true);
          public          postgres    false    204            l           0    0    nhanvien_manhanvien_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.nhanvien_manhanvien_seq', 1, false);
          public          postgres    false    213            m           0    0    phieuthu_maphieuthu_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.phieuthu_maphieuthu_seq', 1, false);
          public          postgres    false    215            �
           2606    16443    taisan CoSoVatChat_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.taisan
    ADD CONSTRAINT "CoSoVatChat_pkey" PRIMARY KEY (id);
 C   ALTER TABLE ONLY public.taisan DROP CONSTRAINT "CoSoVatChat_pkey";
       public            postgres    false    203            �
           2606    16534    dichvu DichVu_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.dichvu
    ADD CONSTRAINT "DichVu_pkey" PRIMARY KEY (madichvu);
 >   ALTER TABLE ONLY public.dichvu DROP CONSTRAINT "DichVu_pkey";
       public            postgres    false    212            �
           2606    16462    hopdongthue HopDongThue_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.hopdongthue
    ADD CONSTRAINT "HopDongThue_pkey" PRIMARY KEY (mahopdong);
 H   ALTER TABLE ONLY public.hopdongthue DROP CONSTRAINT "HopDongThue_pkey";
       public            postgres    false    207            �
           2606    16523    khachhang KhachHang_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.khachhang
    ADD CONSTRAINT "KhachHang_pkey" PRIMARY KEY (makhachhang);
 D   ALTER TABLE ONLY public.khachhang DROP CONSTRAINT "KhachHang_pkey";
       public            postgres    false    210            �
           2606    16451    phong Phong_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.phong
    ADD CONSTRAINT "Phong_pkey" PRIMARY KEY (maphong);
 <   ALTER TABLE ONLY public.phong DROP CONSTRAINT "Phong_pkey";
       public            postgres    false    205            �
           2606    16706    dichvu_phong dichvu_phong_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.dichvu_phong
    ADD CONSTRAINT dichvu_phong_pkey PRIMARY KEY (maphong, madichvu);
 H   ALTER TABLE ONLY public.dichvu_phong DROP CONSTRAINT dichvu_phong_pkey;
       public            postgres    false    208    208            �
           2606    16656    nhanvien nhanvien_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.nhanvien
    ADD CONSTRAINT nhanvien_pkey PRIMARY KEY (manhanvien);
 @   ALTER TABLE ONLY public.nhanvien DROP CONSTRAINT nhanvien_pkey;
       public            postgres    false    214            �
           2606    16667    phieuthu phieuthu_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.phieuthu
    ADD CONSTRAINT phieuthu_pkey PRIMARY KEY (maphieuthu);
 @   ALTER TABLE ONLY public.phieuthu DROP CONSTRAINT phieuthu_pkey;
       public            postgres    false    216            �
           2606    16695 (   dichvu_phong fk_dichvuPhong_dichvu_phong    FK CONSTRAINT     �   ALTER TABLE ONLY public.dichvu_phong
    ADD CONSTRAINT "fk_dichvuPhong_dichvu_phong" FOREIGN KEY (maphong) REFERENCES public.phong(maphong) NOT VALID;
 T   ALTER TABLE ONLY public.dichvu_phong DROP CONSTRAINT "fk_dichvuPhong_dichvu_phong";
       public          postgres    false    208    205    2745            �
           2606    16700 "   dichvu_phong fk_dichvu_dichvuPhong    FK CONSTRAINT     �   ALTER TABLE ONLY public.dichvu_phong
    ADD CONSTRAINT "fk_dichvu_dichvuPhong" FOREIGN KEY (madichvu) REFERENCES public.dichvu(madichvu) NOT VALID;
 N   ALTER TABLE ONLY public.dichvu_phong DROP CONSTRAINT "fk_dichvu_dichvuPhong";
       public          postgres    false    208    2753    212            �
           2606    16732 $   hopdongthue fk_khachhang_hopdongthue    FK CONSTRAINT     �   ALTER TABLE ONLY public.hopdongthue
    ADD CONSTRAINT fk_khachhang_hopdongthue FOREIGN KEY (makhachhang) REFERENCES public.khachhang(makhachhang) NOT VALID;
 N   ALTER TABLE ONLY public.hopdongthue DROP CONSTRAINT fk_khachhang_hopdongthue;
       public          postgres    false    207    210    2751            �
           2606    16683     hopdongthue fk_phong_hopdongthue    FK CONSTRAINT     �   ALTER TABLE ONLY public.hopdongthue
    ADD CONSTRAINT fk_phong_hopdongthue FOREIGN KEY (maphong) REFERENCES public.phong(maphong) NOT VALID;
 J   ALTER TABLE ONLY public.hopdongthue DROP CONSTRAINT fk_phong_hopdongthue;
       public          postgres    false    205    207    2745            �
           2606    16688    khachhang fk_phong_khachhang    FK CONSTRAINT     �   ALTER TABLE ONLY public.khachhang
    ADD CONSTRAINT fk_phong_khachhang FOREIGN KEY (maphong) REFERENCES public.phong(maphong) NOT VALID;
 F   ALTER TABLE ONLY public.khachhang DROP CONSTRAINT fk_phong_khachhang;
       public          postgres    false    205    210    2745            �
           2606    16707    phieuthu fk_phong_phieuthu    FK CONSTRAINT     �   ALTER TABLE ONLY public.phieuthu
    ADD CONSTRAINT fk_phong_phieuthu FOREIGN KEY (maphong) REFERENCES public.phong(maphong) NOT VALID;
 D   ALTER TABLE ONLY public.phieuthu DROP CONSTRAINT fk_phong_phieuthu;
       public          postgres    false    216    2745    205            �
           2606    16727    taisan fk_taiSan_Phong    FK CONSTRAINT     �   ALTER TABLE ONLY public.taisan
    ADD CONSTRAINT "fk_taiSan_Phong" FOREIGN KEY (maphong) REFERENCES public.phong(maphong) NOT VALID;
 B   ALTER TABLE ONLY public.taisan DROP CONSTRAINT "fk_taiSan_Phong";
       public          postgres    false    205    203    2745            U   f   x�3�<2����6?N=���߱�w�rVp�|�k��;��LT�����pc$����
ΠÍΜ*F0o� �)gxfZ&P��D� T�1�      Q      x������ � �      P   $   x�3�4202�54�50�0�@L3NC����� tA�      S   �   x�3�)z�ky�BHQi^�B��E��@��(}�km��Ǳ q(�x1��txDu��_f^'6����������!g^b.�!g��������!sY�[��p�����^*:��#�N07220400352������ [�_�      W   r   x�3�9�E�%��������ë��28-��L<����y�
�
0�Of^�BHQ)�YX�p��<�����+��p��dNC#cNK3ccs##C�ļCC#�?�=... �7+      Y      x������ � �      N   C   x�uɹ�0�x�B���$��AL�% "pt�pV8l�4$M	��u�=g�L��.���j�xM���      L      x������ � �     