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