PGDMP         #                x            HeThongPhongTro    12.5    12.5 E    j           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            k           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            l           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            m           1262    16432    HeThongPhongTro    DATABASE     �   CREATE DATABASE "HeThongPhongTro" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
 !   DROP DATABASE "HeThongPhongTro";
                postgres    false            �            1259    16487    BaoCao    TABLE     �   CREATE TABLE public."BaoCao" (
    "MaBaoCao" integer NOT NULL,
    "TenBaoCao" text,
    "SoLuongKhach" integer,
    "DoanhThu" money
);
    DROP TABLE public."BaoCao";
       public         heap    postgres    false            �            1259    16485    BaoCao_MaBaoCao_seq    SEQUENCE     �   CREATE SEQUENCE public."BaoCao_MaBaoCao_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."BaoCao_MaBaoCao_seq";
       public          postgres    false    213            n           0    0    BaoCao_MaBaoCao_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."BaoCao_MaBaoCao_seq" OWNED BY public."BaoCao"."MaBaoCao";
          public          postgres    false    212            �            1259    16507    ChiTietPhieuThu    TABLE     �   CREATE TABLE public."ChiTietPhieuThu" (
    "SoLuongDichVu" smallint,
    "NgayGiaoPhieu" date,
    "NgayHanChot" date,
    "ThanhTien" money,
    "GhiChu" text
);
 %   DROP TABLE public."ChiTietPhieuThu";
       public         heap    postgres    false            �            1259    16435    CoSoVatChat    TABLE     �   CREATE TABLE public."CoSoVatChat" (
    id integer NOT NULL,
    "Ten" text,
    "DonGia" money,
    "NgayThem" date,
    "PhiSuaChua" money,
    "Loai" boolean NOT NULL
);
 !   DROP TABLE public."CoSoVatChat";
       public         heap    postgres    false            �            1259    16433    CoSoVatChat_id_seq    SEQUENCE     �   CREATE SEQUENCE public."CoSoVatChat_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."CoSoVatChat_id_seq";
       public          postgres    false    203            o           0    0    CoSoVatChat_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."CoSoVatChat_id_seq" OWNED BY public."CoSoVatChat".id;
          public          postgres    false    202            �            1259    16526    DichVu    TABLE     �   CREATE TABLE public."DichVu" (
    "MaDichVu" integer NOT NULL,
    "TenDichVu" text,
    "GiaDichVu" money,
    "LoaiDichVu" smallint,
    "ChiSoDau" smallint,
    "ChiSoCuoi" smallint
);
    DROP TABLE public."DichVu";
       public         heap    postgres    false            �            1259    16524    DichVu_MaDichVu_seq    SEQUENCE     �   CREATE SEQUENCE public."DichVu_MaDichVu_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."DichVu_MaDichVu_seq";
       public          postgres    false    220            p           0    0    DichVu_MaDichVu_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."DichVu_MaDichVu_seq" OWNED BY public."DichVu"."MaDichVu";
          public          postgres    false    219            �            1259    16454    HopDongThue    TABLE     �   CREATE TABLE public."HopDongThue" (
    "MaHopDong" integer NOT NULL,
    "NgayThue" date,
    "NgayHetHan" date,
    "ThoiHan" smallint,
    "KyThanhToan" smallint,
    "GhiChu" text
);
 !   DROP TABLE public."HopDongThue";
       public         heap    postgres    false            �            1259    16452    HopDongThue_MaHopDong_seq    SEQUENCE     �   CREATE SEQUENCE public."HopDongThue_MaHopDong_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."HopDongThue_MaHopDong_seq";
       public          postgres    false    207            q           0    0    HopDongThue_MaHopDong_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."HopDongThue_MaHopDong_seq" OWNED BY public."HopDongThue"."MaHopDong";
          public          postgres    false    206            �            1259    16515 	   KhachHang    TABLE     �   CREATE TABLE public."KhachHang" (
    "MaKhachHang" integer NOT NULL,
    "Hoten" text,
    "NoiThuongTru" text,
    "CMND" smallint,
    "SoDienThoai" smallint,
    "NoiSinh" text,
    "NguyenQuan" text,
    "NgaySinh" date
);
    DROP TABLE public."KhachHang";
       public         heap    postgres    false            �            1259    16513    KhachHang_MaKhachHang_seq    SEQUENCE     �   CREATE SEQUENCE public."KhachHang_MaKhachHang_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."KhachHang_MaKhachHang_seq";
       public          postgres    false    218            r           0    0    KhachHang_MaKhachHang_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."KhachHang_MaKhachHang_seq" OWNED BY public."KhachHang"."MaKhachHang";
          public          postgres    false    217            �            1259    16476    NhanVien    TABLE     �   CREATE TABLE public."NhanVien" (
    "MaNhanVien" integer NOT NULL,
    "Hoten" text,
    "SoDienThoai" smallint,
    "CMND" smallint,
    "NgaySinh" date
);
    DROP TABLE public."NhanVien";
       public         heap    postgres    false            �            1259    16474    NhanVien_MaNhanVien_seq    SEQUENCE     �   CREATE SEQUENCE public."NhanVien_MaNhanVien_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."NhanVien_MaNhanVien_seq";
       public          postgres    false    211            s           0    0    NhanVien_MaNhanVien_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."NhanVien_MaNhanVien_seq" OWNED BY public."NhanVien"."MaNhanVien";
          public          postgres    false    210            �            1259    16498    PhieuThu    TABLE     �   CREATE TABLE public."PhieuThu" (
    "MaPhieuThu" integer NOT NULL,
    "NgayLap" date,
    "KyThanhToan" smallint,
    "LoaiPhieuThu" smallint,
    "PhiPhatSinh" money,
    "TenPhieuThu" text,
    "ThanhTien" money
);
    DROP TABLE public."PhieuThu";
       public         heap    postgres    false            �            1259    16496    PhieuThu_MaPhieuThu_seq    SEQUENCE     �   CREATE SEQUENCE public."PhieuThu_MaPhieuThu_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."PhieuThu_MaPhieuThu_seq";
       public          postgres    false    215            t           0    0    PhieuThu_MaPhieuThu_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."PhieuThu_MaPhieuThu_seq" OWNED BY public."PhieuThu"."MaPhieuThu";
          public          postgres    false    214            �            1259    16446    Phong    TABLE     �   CREATE TABLE public."Phong" (
    "MaPhong" integer NOT NULL,
    "DienTich" integer,
    "LoaiPhong" smallint,
    "GiaPhong" money,
    "SucChua" smallint,
    "TinhTrangPhong" boolean,
    "TinhTrangPhi" boolean
);
    DROP TABLE public."Phong";
       public         heap    postgres    false            �            1259    16444    Phong_MaPhong_seq    SEQUENCE     �   CREATE SEQUENCE public."Phong_MaPhong_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Phong_MaPhong_seq";
       public          postgres    false    205            u           0    0    Phong_MaPhong_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."Phong_MaPhong_seq" OWNED BY public."Phong"."MaPhong";
          public          postgres    false    204            �            1259    16465    TaiKhoan    TABLE     �   CREATE TABLE public."TaiKhoan" (
    "MaTaiKhoan" integer NOT NULL,
    "TenTruyCap" text,
    "MatKhau" text,
    "LoaiTaiKhoan" smallint
);
    DROP TABLE public."TaiKhoan";
       public         heap    postgres    false            �            1259    16463    TaiKhoan_MaTaiKhoan_seq    SEQUENCE     �   CREATE SEQUENCE public."TaiKhoan_MaTaiKhoan_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."TaiKhoan_MaTaiKhoan_seq";
       public          postgres    false    209            v           0    0    TaiKhoan_MaTaiKhoan_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."TaiKhoan_MaTaiKhoan_seq" OWNED BY public."TaiKhoan"."MaTaiKhoan";
          public          postgres    false    208            �
           2604    16490    BaoCao MaBaoCao    DEFAULT     x   ALTER TABLE ONLY public."BaoCao" ALTER COLUMN "MaBaoCao" SET DEFAULT nextval('public."BaoCao_MaBaoCao_seq"'::regclass);
 B   ALTER TABLE public."BaoCao" ALTER COLUMN "MaBaoCao" DROP DEFAULT;
       public          postgres    false    212    213    213            �
           2604    16438    CoSoVatChat id    DEFAULT     t   ALTER TABLE ONLY public."CoSoVatChat" ALTER COLUMN id SET DEFAULT nextval('public."CoSoVatChat_id_seq"'::regclass);
 ?   ALTER TABLE public."CoSoVatChat" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            �
           2604    16529    DichVu MaDichVu    DEFAULT     x   ALTER TABLE ONLY public."DichVu" ALTER COLUMN "MaDichVu" SET DEFAULT nextval('public."DichVu_MaDichVu_seq"'::regclass);
 B   ALTER TABLE public."DichVu" ALTER COLUMN "MaDichVu" DROP DEFAULT;
       public          postgres    false    220    219    220            �
           2604    16457    HopDongThue MaHopDong    DEFAULT     �   ALTER TABLE ONLY public."HopDongThue" ALTER COLUMN "MaHopDong" SET DEFAULT nextval('public."HopDongThue_MaHopDong_seq"'::regclass);
 H   ALTER TABLE public."HopDongThue" ALTER COLUMN "MaHopDong" DROP DEFAULT;
       public          postgres    false    206    207    207            �
           2604    16518    KhachHang MaKhachHang    DEFAULT     �   ALTER TABLE ONLY public."KhachHang" ALTER COLUMN "MaKhachHang" SET DEFAULT nextval('public."KhachHang_MaKhachHang_seq"'::regclass);
 H   ALTER TABLE public."KhachHang" ALTER COLUMN "MaKhachHang" DROP DEFAULT;
       public          postgres    false    218    217    218            �
           2604    16479    NhanVien MaNhanVien    DEFAULT     �   ALTER TABLE ONLY public."NhanVien" ALTER COLUMN "MaNhanVien" SET DEFAULT nextval('public."NhanVien_MaNhanVien_seq"'::regclass);
 F   ALTER TABLE public."NhanVien" ALTER COLUMN "MaNhanVien" DROP DEFAULT;
       public          postgres    false    211    210    211            �
           2604    16501    PhieuThu MaPhieuThu    DEFAULT     �   ALTER TABLE ONLY public."PhieuThu" ALTER COLUMN "MaPhieuThu" SET DEFAULT nextval('public."PhieuThu_MaPhieuThu_seq"'::regclass);
 F   ALTER TABLE public."PhieuThu" ALTER COLUMN "MaPhieuThu" DROP DEFAULT;
       public          postgres    false    214    215    215            �
           2604    16449    Phong MaPhong    DEFAULT     t   ALTER TABLE ONLY public."Phong" ALTER COLUMN "MaPhong" SET DEFAULT nextval('public."Phong_MaPhong_seq"'::regclass);
 @   ALTER TABLE public."Phong" ALTER COLUMN "MaPhong" DROP DEFAULT;
       public          postgres    false    204    205    205            �
           2604    16468    TaiKhoan MaTaiKhoan    DEFAULT     �   ALTER TABLE ONLY public."TaiKhoan" ALTER COLUMN "MaTaiKhoan" SET DEFAULT nextval('public."TaiKhoan_MaTaiKhoan_seq"'::regclass);
 F   ALTER TABLE public."TaiKhoan" ALTER COLUMN "MaTaiKhoan" DROP DEFAULT;
       public          postgres    false    208    209    209            `          0    16487    BaoCao 
   TABLE DATA           W   COPY public."BaoCao" ("MaBaoCao", "TenBaoCao", "SoLuongKhach", "DoanhThu") FROM stdin;
    public          postgres    false    213   O       c          0    16507    ChiTietPhieuThu 
   TABLE DATA           s   COPY public."ChiTietPhieuThu" ("SoLuongDichVu", "NgayGiaoPhieu", "NgayHanChot", "ThanhTien", "GhiChu") FROM stdin;
    public          postgres    false    216   8O       V          0    16435    CoSoVatChat 
   TABLE DATA           ^   COPY public."CoSoVatChat" (id, "Ten", "DonGia", "NgayThem", "PhiSuaChua", "Loai") FROM stdin;
    public          postgres    false    203   UO       g          0    16526    DichVu 
   TABLE DATA           o   COPY public."DichVu" ("MaDichVu", "TenDichVu", "GiaDichVu", "LoaiDichVu", "ChiSoDau", "ChiSoCuoi") FROM stdin;
    public          postgres    false    220   rO       Z          0    16454    HopDongThue 
   TABLE DATA           r   COPY public."HopDongThue" ("MaHopDong", "NgayThue", "NgayHetHan", "ThoiHan", "KyThanhToan", "GhiChu") FROM stdin;
    public          postgres    false    207   �O       e          0    16515 	   KhachHang 
   TABLE DATA           �   COPY public."KhachHang" ("MaKhachHang", "Hoten", "NoiThuongTru", "CMND", "SoDienThoai", "NoiSinh", "NguyenQuan", "NgaySinh") FROM stdin;
    public          postgres    false    218   �O       ^          0    16476    NhanVien 
   TABLE DATA           ^   COPY public."NhanVien" ("MaNhanVien", "Hoten", "SoDienThoai", "CMND", "NgaySinh") FROM stdin;
    public          postgres    false    211   �O       b          0    16498    PhieuThu 
   TABLE DATA           �   COPY public."PhieuThu" ("MaPhieuThu", "NgayLap", "KyThanhToan", "LoaiPhieuThu", "PhiPhatSinh", "TenPhieuThu", "ThanhTien") FROM stdin;
    public          postgres    false    215   �O       X          0    16446    Phong 
   TABLE DATA           ~   COPY public."Phong" ("MaPhong", "DienTich", "LoaiPhong", "GiaPhong", "SucChua", "TinhTrangPhong", "TinhTrangPhi") FROM stdin;
    public          postgres    false    205   P       \          0    16465    TaiKhoan 
   TABLE DATA           [   COPY public."TaiKhoan" ("MaTaiKhoan", "TenTruyCap", "MatKhau", "LoaiTaiKhoan") FROM stdin;
    public          postgres    false    209    P       w           0    0    BaoCao_MaBaoCao_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."BaoCao_MaBaoCao_seq"', 1, false);
          public          postgres    false    212            x           0    0    CoSoVatChat_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."CoSoVatChat_id_seq"', 1, false);
          public          postgres    false    202            y           0    0    DichVu_MaDichVu_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."DichVu_MaDichVu_seq"', 1, false);
          public          postgres    false    219            z           0    0    HopDongThue_MaHopDong_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."HopDongThue_MaHopDong_seq"', 1, false);
          public          postgres    false    206            {           0    0    KhachHang_MaKhachHang_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."KhachHang_MaKhachHang_seq"', 1, false);
          public          postgres    false    217            |           0    0    NhanVien_MaNhanVien_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."NhanVien_MaNhanVien_seq"', 1, false);
          public          postgres    false    210            }           0    0    PhieuThu_MaPhieuThu_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."PhieuThu_MaPhieuThu_seq"', 1, false);
          public          postgres    false    214            ~           0    0    Phong_MaPhong_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Phong_MaPhong_seq"', 1, false);
          public          postgres    false    204                       0    0    TaiKhoan_MaTaiKhoan_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."TaiKhoan_MaTaiKhoan_seq"', 1, false);
          public          postgres    false    208            �
           2606    16495    BaoCao BaoCao_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."BaoCao"
    ADD CONSTRAINT "BaoCao_pkey" PRIMARY KEY ("MaBaoCao");
 @   ALTER TABLE ONLY public."BaoCao" DROP CONSTRAINT "BaoCao_pkey";
       public            postgres    false    213            �
           2606    16443    CoSoVatChat CoSoVatChat_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."CoSoVatChat"
    ADD CONSTRAINT "CoSoVatChat_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."CoSoVatChat" DROP CONSTRAINT "CoSoVatChat_pkey";
       public            postgres    false    203            �
           2606    16534    DichVu DichVu_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."DichVu"
    ADD CONSTRAINT "DichVu_pkey" PRIMARY KEY ("MaDichVu");
 @   ALTER TABLE ONLY public."DichVu" DROP CONSTRAINT "DichVu_pkey";
       public            postgres    false    220            �
           2606    16462    HopDongThue HopDongThue_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public."HopDongThue"
    ADD CONSTRAINT "HopDongThue_pkey" PRIMARY KEY ("MaHopDong");
 J   ALTER TABLE ONLY public."HopDongThue" DROP CONSTRAINT "HopDongThue_pkey";
       public            postgres    false    207            �
           2606    16523    KhachHang KhachHang_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public."KhachHang"
    ADD CONSTRAINT "KhachHang_pkey" PRIMARY KEY ("MaKhachHang");
 F   ALTER TABLE ONLY public."KhachHang" DROP CONSTRAINT "KhachHang_pkey";
       public            postgres    false    218            �
           2606    16484    NhanVien NhanVien_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."NhanVien"
    ADD CONSTRAINT "NhanVien_pkey" PRIMARY KEY ("MaNhanVien");
 D   ALTER TABLE ONLY public."NhanVien" DROP CONSTRAINT "NhanVien_pkey";
       public            postgres    false    211            �
           2606    16506    PhieuThu PhieuThu_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."PhieuThu"
    ADD CONSTRAINT "PhieuThu_pkey" PRIMARY KEY ("MaPhieuThu");
 D   ALTER TABLE ONLY public."PhieuThu" DROP CONSTRAINT "PhieuThu_pkey";
       public            postgres    false    215            �
           2606    16451    Phong Phong_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Phong"
    ADD CONSTRAINT "Phong_pkey" PRIMARY KEY ("MaPhong");
 >   ALTER TABLE ONLY public."Phong" DROP CONSTRAINT "Phong_pkey";
       public            postgres    false    205            �
           2606    16473    TaiKhoan TaiKhoan_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."TaiKhoan"
    ADD CONSTRAINT "TaiKhoan_pkey" PRIMARY KEY ("MaTaiKhoan");
 D   ALTER TABLE ONLY public."TaiKhoan" DROP CONSTRAINT "TaiKhoan_pkey";
       public            postgres    false    209            `      x������ � �      c      x������ � �      V      x������ � �      g      x������ � �      Z      x������ � �      e      x������ � �      ^      x������ � �      b      x������ � �      X      x������ � �      \      x������ � �     