import amg1 from '../../assets/images/person/2.png';
import amg2 from '../../assets/images/person/3.jpg';
import amg3 from '../../assets/images/person/4.jpg';
import amg4 from '../../assets/images/person/5.jpg';
import amg5 from '../../assets/images/person/6.jpg';
import image1 from  "../images/person/1.png";
import image2 from  "../images/person/2.png";
import image3 from  "../images/person/3.jpg";
import image4 from  "../images/person/4.jpg";
import image5 from  "../images/person/5.jpg";
import image6 from  "../images/person/6.jpg";
import image7 from  "../images/person/7.png";
import image8 from "../images/person/8.png";
export const Users = [
{
    id:1,
    profilePicture: "/assets/images/person/1.png",
    username: "Safak Kocaoglu",
},
{
    id:2,
    profilePicture: "/assets/images/person/2.png",
    username: "Janell Shrum",
},
{
    id:3,
    profilePicture: "/assets/images/person/3.png",
    username: "Alex Durden",
},
{
    id:4,
    profilePicture: "/assets/images/person/4.png",
    username: "Dora Hawks",
},
{
    id:5,
    profilePicture: "/assets/images/person/5.png",
    username: "Thomas Holden",
},
{
    id:6,
    profilePicture: "/assets/images/person/6.png",
    username: "Shirley Beauchamp",
},
{
    id:7,
    profilePicture: "/assets/images/person/7.png",
    username: "Travis Bennett",
},
{
    id:8,
    profilePicture: "/assets/images/person/8.png",
    username: "Kristen Thomas",
},
{
    id:9,
    profilePicture: "/assets/images/person/9.png",
    username: "Gary Duty",
},
{
    id:10,
    profilePicture: "/assets/images/person/10.png",
    username: "Safak Kocaoglu",
},
];

export const Posts = [
{
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: "/assets/images/post/1.jpg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    commentsNumber: 9,
    comment : [
        {
        profilePicture :  Users[2].profilePicture,
        profileUsername : Users[2].username,
        likes : 8,
        date: "2 minutes ago",
        comment : "Dude what a chimba, invite"
        },
        {
        profilePicture : Users[4].profilePicture,
        profileUsername : Users[4].username,
        likes : 3,
        date: "Now",
        comment : "Wow i love Nature 🍃"    
        },
        {
        profilePicture : Users[4].profilePicture,
        profileUsername : Users[4].username,
        likes : 2,
        date: "1 minute ago",
        comment : "I've been there"    
        }
    ]   
},
{
    id: 2,
    photo: "/assets/images/post/2.jpg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    commentsNumber: 1,
    comment : [
        {
        profilePicture :  Users[1].profilePicture,
        profileUsername : Users[1].username,
        likes : 13,
        date: "10 minutes agp",
        comment : "Sealing ah ⛵🌊? "
        },
        {
        profilePicture : Users[1].profilePicture,
        profileUsername : Users[1].username,
        likes : 8,
        date: "3 days ago",
        comment : "Man when are u comming back? 🤓 "    
        },
    ]   
},
{
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: "/assets/images/post/3.jpg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    commentsNumber: 2,
    comment : [
        {
        profilePicture :  Users[2].profilePicture,
        profileUsername : Users[2].username,
        likes : 2,
        date: "30 minutos ago",
        comment : "where that ***** r u? "
        },
        {
        profilePicture : Users[5].profilePicture,
        profileUsername : Users[5].username,
        likes : 5,
        date: "1 hour go",
        comment : "Stars!!✨✨✨"    
        },
        {
        profilePicture : Users[7].profilePicture,
        profileUsername : Users[7].username,
        likes : 21,
        date: "3 days ago",
        comment : "whatever u r taking i need some of that dose 💊"    
        }
    ]   
},
{
    id: 4,
    photo: "/assets/images/post/4.jpg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    commentsNumber: 3,
    comment : [
        {
        profilePicture :  Users[6].profilePicture,
        profileUsername : Users[6].username,
        likes : 1,
        date: "2 hours ago",
        comment : "god dude, seems like u r freezing 🥶"
        }
    ]   
},
{
    id: 5,
    photo: "/assets/images/post/5.jpg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    commentsNumber: 5,
    comment : [
        {
        profilePicture :  Users[2].profilePicture,
        profileUsername : Users[2].username,
        likes : 0,
        date: "1 hour ago",
        comment : "U THINK THATS PRETTY? 🥵🥵"
        },
        {
        profilePicture : Users[9].profilePicture,
        profileUsername : Users[9].username,
        likes : 11,
        date: "20 minutes ago",
        comment : "how did u take that picture?"    
        },
        {
        profilePicture : Users[4].profilePicture,
        profileUsername : Users[2].username,
        likes : 3,
        date: "3 hours ago",
        comment : "I've been there"    
        },
        {
        profilePicture : Users[4].profilePicture,
        profileUsername : Users[2].username,
        likes : 8,
        date: "3 minutes ago",
        comment : "crazy view!"    
        }
    ] 
},
{
    id: 6,
    photo: "/assets/images/post/6.jpg",
    date: "2 day ago",
    userId: 6,
    like: 44,
    commentsNumber: 6,
    comment : [
        {
        profilePicture :  Users[5].profilePicture,
        profileUsername : Users[5].username,
        likes : 13,
        date: "1 day ago",
        comment : "thats a road of threes🍁🍁"
        },
        {
        profilePicture : Users[8].profilePicture,
        profileUsername : Users[8].username,
        likes : 5,
        date: "40 minutes ago",
        comment : "Everest <3"    
        },
    ] 
},
{
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: "/assets/images/post/7.jpg",
    date: "3 days ago",
    userId: 7,
    like: 52,
    commentsNumber: 3,
    comment : [
        {
        profilePicture :  Users[6].profilePicture,
        profileUsername : Users[6].username,
        likes : 43,
        date: "2 days ago",
        comment : "U make me smile darling 🥀"
        },
        {
        profilePicture : Users[7].profilePicture,
        profileUsername : Users[7].username,
        likes : 16,
        date: "14 hours ago",
        comment : "OH god that looks hot hot"    
        },
        {
        profilePicture : Users[5].profilePicture,
        profileUsername : Users[5].username,
        likes : 1,
        date: "2 minutes ago",
        comment : "When will we met?"    
        }
    ] 
},
{
    id: 8,
    photo: "/assets/images/post/8.jpg",
    date: "4 days ago",
    userId: 8,
    like: 15,
    commentsNumber: 1,
    comment : [
        {
        profilePicture :  Users[2].profilePicture,
        profileUsername : Users[2].username,
        likes : 5,
        date: "3 days ago",
        comment : "Oh my eyes 🌅"
        },
        {
        profilePicture : Users[0].profilePicture,
        profileUsername : Users[0].username,
        likes : 12,
        date: "1 day ago",
        comment : "perfect for a relaxing reading 📖"    
        },
        {
        profilePicture : Users[8].profilePicture,
        profileUsername : Users[8].username,
        likes : 7,
        date: "3 hours ago",
        comment : "what a three 🌳"    
        }
    ] 
},
{
    id: 9,
    desc: "Change the world by being yourself.",
    photo: "/assets/images/post/9.jpg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    commentsNumber: 2,
    comment : [
        {
        profilePicture :  Users[2].profilePicture,
        profileUsername : Users[2].username,
        likes : 3,
        date: "4 days ago",
        comment : "Oh no is about to explote!"
        },
        {
        profilePicture : Users[4].profilePicture,
        profileUsername : Users[2].username,
        likes : 5,
        date: "2 days ago",
        comment : "aaah scary 🌋🌋"    
        },
        {
        profilePicture : Users[4].profilePicture,
        profileUsername : Users[2].username,
        likes : 8,
        date: "20 hours ago",
        comment : "were u flying? 🪽😎"    
        }
    ] 
},
{
    id: 10,
    photo: "/assets/images/post/10.jpg",
    date: "1 week ago",
    userId: 10,
    like: 104,
    commentsNumber: 12,
    comment : [
        {
        profilePicture :  Users[7].profilePicture,
        profileUsername : Users[7].username,
        likes : 25,
        date: "3 days ago",
        comment : "Didn´t know u were traveling"
        },
        {
        profilePicture : Users[7].profilePicture,
        profileUsername : Users[7].username,
        likes : 2,
        date: "3 days ago",
        comment : "where r u?"    
        },
        {
        profilePicture : Users[4].profilePicture,
        profileUsername : Users[2].username,
        likes : 35,
        date: "1 days ago",
        comment : "Finally a city man"    
        }
    ] 
},
];
export const Grupos = [{
    name:"AGRA lovers",
    perfil:"https://niixer.com/wp-content/uploads/2023/02/Picsart_23-03-09_21-08-46-956.jpg",
    foto1:"https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/0ea5c-princesa-jazmin-disney-png.png?fit=500%2C500&ssl=1",
    foto2:"https://w7.pngwing.com/pngs/631/446/png-transparent-disney-princess-illustration-belle-princess-aurora-cinderella-rapunzel-princess-jasmine-beauty-and-the-beast-disney-princess-beast-doll-thumbnail.png",
    foto3:"https://w7.pngwing.com/pngs/23/472/png-transparent-princess-aurora-princess-jasmine-disney-princess-sleeping-beauty-aurora-princess-thumbnail.png",
    tipo:"Public",
    portada:"https://www.grapheverywhere.com/wp-content/uploads/2019/07/pic004.jpg"
},
{
    name:"Club Java",
    perfil:"https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp",
    foto1:"https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/0ea5c-princesa-jazmin-disney-png.png?fit=500%2C500&ssl=1",
    foto2:"https://w7.pngwing.com/pngs/631/446/png-transparent-disney-princess-illustration-belle-princess-aurora-cinderella-rapunzel-princess-jasmine-beauty-and-the-beast-disney-princess-beast-doll-thumbnail.png",
    foto3:"https://w7.pngwing.com/pngs/23/472/png-transparent-princess-aurora-princess-jasmine-disney-princess-sleeping-beauty-aurora-princess-thumbnail.png",
    tipo:"Public",
    portada:"https://static.vecteezy.com/system/resources/previews/022/100/214/original/java-logo-transparent-free-png.png"
},{
    name:"React lover",
    perfil:"https://th.bing.com/th/id/OIP.Bil7q6xfmqrjDXWZ8iL7sQHaDt?rs=1&pid=ImgDetMain.png",
    foto1:"https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/0ea5c-princesa-jazmin-disney-png.png?fit=500%2C500&ssl=1",
    foto2:"https://w7.pngwing.com/pngs/631/446/png-transparent-disney-princess-illustration-belle-princess-aurora-cinderella-rapunzel-princess-jasmine-beauty-and-the-beast-disney-princess-beast-doll-thumbnail.png",
    foto3:"https://w7.pngwing.com/pngs/23/472/png-transparent-princess-aurora-princess-jasmine-disney-princess-sleeping-beauty-aurora-princess-thumbnail.png",
    tipo:"Public",
    portada:"https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0"
}]

export const Cursos = [
{  portada:"https://th.bing.com/th/id/OIP.Kh8FxmTS-rqhiblYODYE2wHaE7?rs=1&pid=ImgDetMain" ,
    titulo:"Pincipios de python" ,
    cantidadLessons: 10
},{  portada:"https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2024/07/19/halo-p.jpeg" ,
    titulo:"HALO 1" ,
    cantidadLessons: 10
},{  portada:"https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2024/07/19/halo-p.jpeg" ,
    titulo:"HALO 1" ,
    cantidadLessons: 10
}
]

export const Fotos = [{foto:"https://static.vecteezy.com/system/resources/previews/015/571/212/original/education-and-knowledge-books-for-learning-suitable-for-poster-web-and-mobile-services-in-flat-style-cartoon-hand-drawn-templates-illustration-vector.jpg"},
    {foto:"https://th.bing.com/th/id/OIP.q76DDR4iHhYJ4Ps3bu4A_gHaE8?rs=1&pid=ImgDetMain"},
    {foto:"https://th.bing.com/th/id/OIP.TlB0zjlPuynWyHoMaokukgHaEK?rs=1&pid=ImgDetMain"},
    {foto:"https://static.vecteezy.com/system/resources/previews/011/116/274/non_2x/education-concept-with-cartoon-character-vector.jpg"},
    {foto:"https://th.bing.com/th/id/OIP.kmLTYzArjAj6MuU-X3jxFAHaE8?rs=1&pid=ImgDetMain"}
]
export const BlogPosts = [
    {
        image: 'https://www.tarlogic.com/wp-content/uploads/2023/09/riesgos-seguridad-IA-3.jpg',
        title: 'La IA y el futuro de la humanidad',
        date: '2024-09-01'
    },
    {
        image: 'https://latam.kaspersky.com/content/es-mx/images/repository/isc/2020/cyber-security-article.jpg',
        title: 'La ingeniería social y la ciberseguridad',
        date: '2024-10-02'
    },
    {
        image: 'https://www.grupocibernos.com/hs-fs/hubfs/50.png?width=960&name=50.png',
        title: 'La ciberseguridad en la nube',
        date: '2024-09-11'
    }
];
export const Amigos = [
    {
        nombre: 'Steven Spielberg',
        imagen: amg1
    },
    {
        nombre: 'Jane Smith',
        imagen: amg2
    },
    {
        nombre: 'Sam Wilson',
        imagen: amg3
    },
    {
        nombre: 'John Doe',
        imagen: amg4
    },
    {
        nombre: 'Jane Doe',
        imagen: amg5
    }
];


export const Updates = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnXe_ieqBthtJEu_APkg9ECuUwhIOI4IVtg&s',
        title: 'John posted an update',
        date: '1 minute ago'
    },
    {
        image: 'https://a.ltrbxd.com/resized/sm/upload/db/2x/a6/v6/harrypotter-1200-1200-675-675-crop-000000.jpg?v=7f87bbd1ff',
        title: 'Adele posted an update',
        date: '20 minutes ago'
    },
    {
        image: 'https://th.bing.com/th/id/OIP.WGbPMH8cEmqepMQ_ZQ-i6wHaKD?rs=1&pid=ImgDetMain',
        title: 'Gabriel posted an update ',
        date: '1 hour ago'
    },
    {
        image: 'https://img001.prntscr.com/file/img001/sAKPdBnDSLOs8XC3cXTAXA.png',
        title: 'Daniela ghosted you ',
        date: '4 hours ago'
    }
];

export const Notificaciones = [
    {nombre : "Sebastián",
    fecha:"31 Oct 2024", 
    descripcion:"Sebastián comentó en tu publicación", 
    image:"https://media.licdn.com/dms/image/v2/D4E03AQFWLYd4U2IykQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726429797240?e=1735776000&v=beta&t=USojFEa4nB8DGcQHObU4CQx1OoXSrEx1Cu-EyJv3e8U" 
} ,{
    nombre : "Juliana",
    fecha:"1 Nov 2024", 
    descripcion:"Juliana le gustó tu imagen", 
    image:"https://media.licdn.com/dms/image/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_200_200/0/1715274045600?e=2147483647&v=beta&t=6fvPqhD8LWK_kcsVnpNEvkyTyOLI-APzYCUKhC34MxA" 
},{  
    nombre : "Esteban",
    fecha:"3 Nov 2024", 
    descripcion:"Esteban comentó en tu publicación", 
    image:"https://akamai.sscdn.co/uploadfile/letras/fotos/a/7/f/b/a7fba5f1cd128cba1548e8a0aa5d6360.jpg" 
}
]
export const Amigos2 = [
    { nombre: 'John Doe', imagen: image1 },
    { nombre: 'Jane Smith', imagen: image2 },
    { nombre: 'Sam Wilson', imagen: image3 },
    { nombre: 'Sam Wilson', imagen: image4 },
    { nombre: 'Sam Wilson', imagen: image5 },
    { nombre: 'Sam Wilson', imagen: image6 },
    { nombre: 'Sam Wilson', imagen: image7 },
    { nombre: 'Sam Wilson', imagen: image8 }
];