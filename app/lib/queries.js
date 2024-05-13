"use server"

import { PrismaClient } from "@prisma/client";


const db = new PrismaClient();




export const getTotalReservations = async ()=>{

    const reservations = await db.reservation.count();
    return reservations;
}


export const getReservations = async ()=>{

    const reservations = await db.reservation.findMany({
        orderBy:{
            createdAt:"desc"
        }
    });
    return reservations;
}
export const getReservationById = async (id)=>{

    const reservation = await db.reservation.findFirst({
        where:{
            id
        }
    });
    return reservation;
}


export const getTotalServices = async ()=>{
    
    const services = await db.service.count();
    return services;
}

export const getServices = async ()=>{
    const services = await db.service.findMany({
        include:{
            subServices:true
        },
        orderBy:{
            id:"desc"
        }
    });
    return services;
}

export const getServiceById = async (id)=>{
    const service = await db.service.findFirst({
        where:{
            id
        },
        include:{
            subServices:true
        }
    });

    return service;
}


export const getBlogPosts = async ()=>{
    const posts = await db.blog.findMany({
        orderBy:{
            createdAt:"desc"
        }
    });
    return posts;
}

export const getBlogPostById = async (id)=>{
    const post = await db.blog.findFirst({
        where:{
            id
        }
    });

    return post;
}



export const getComplaints =  async ()=>{
    const complaints = await db.compliant.findMany({
        orderBy:{
            id:"desc"
        }
    });
    return complaints;
}



export const getHero = async ()=>{
    const hero = await db.hero.findFirst({
        where:{
            id:1
        }
    });

    return hero;
}


export const getClients = async ()=>{
    const clients = await db.client.findMany({
        orderBy:{
            id:"desc"
        }
    })

    return clients
}


export const getReviews = async ()=>{
    const reviews = await db.review.findMany({
        orderBy:{
            id:"desc"
        }
    });
    return reviews;
}