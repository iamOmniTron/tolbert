
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();


const main = async ()=>{
    try {
        const seedHero = await db.hero.upsert({
            where:{
                id:1
            },
            update:{},
            create:{
                title:"We provide Medical services you can trust",
                content:"I want to assure you, you have the best medical services by trusting in our services. Established in 2009, we are the best in Nigeria",
                imageUrl:'[\"Screenshot 2024-03-11 at 8.48.51PM.png\","\feedback form.jpg\"]',
        
            }
        })
        
        const seedBlog = await db.blog.upsert({
            where:{
                id:1
            },
            update:{},
            create:{
                title:"Test Blog Title",
                author:"Ibrahim Abiodun",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis eum sed assumenda, voluptatem neque consequuntur est. Voluptas cupiditate fugit nesciunt, illum rem architecto distinctio, assumenda vero quae libero magni!",
                imageUrl:"DSC_0094.JPG",
            }
        });
        
        const seedServices = await db.service.upsert({
            where:{
                id:1
            },
            create:{
                name:"Orthopedic",
                description:"This deals with bones, skeletons and the rest",
                imageUrl:"giant.jpg",
                phone:"+23437587905"
            },
        })
        
        const seedVideo = await db.video.upsert({
            where:{id:1},
            update:{},
            create:{
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt aliquid alias rerum ducimus praesentium",
                videoUrl:""
            }
        })
        
        const seedTestimonial = await db.review.upsert({
            where:{
                id:1
            },
            update:{},
            create:{
                name:"Olanrewaju Olawunmi",
                review:"Nice Customer Service",
                isPublic:true,
                rating:5
            }
        })
        
        const seedClient = await db.client.upsert({
            where:{
                id:1
            },
            update:{},
            create:{
                logo:"caduceus.png",
                name:"NMA"
            }
        })
        console.log({seedBlog,seedClient,seedHero,seedVideo,seedTestimonial,seedServices})
    } catch (error) {
        throw new Error(error)
    }
}


main().then(async()=>{
    await db.$disconnect()
}).catch(async(e)=>{
    console.log(e);
    await db.$disconnect();
    process.exit(1)
})